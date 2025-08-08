// Line 172: Change 'let program: Program | undefined;' to 'const program: Program | undefined;'
// Line 212: Remove the unused parameter 't' from the update function.

import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

import '../../../app/globals.css';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

vec3 getColorFromRamp(ColorStop colors[3], float factor) {
  vec3 finalColor;
  if (factor <= colors[0].position) {
    finalColor = colors[0].color;
  } else if (factor >= colors[2].position) {
    finalColor = colors[2].color;
  } else if (factor < colors[1].position) {
    float range = colors[1].position - colors[0].position;
    float lerpFactor = (factor - colors[0].position) / range;
    finalColor = mix(colors[0].color, colors[1].color, lerpFactor);
  } else {
    float range = colors[2].position - colors[1].position;
    float lerpFactor = (factor - colors[1].position) / range;
    finalColor = mix(colors[1].color, colors[2].color, lerpFactor);
  }
  return finalColor;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor = getColorFromRamp(colors, uv.x);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  time?: number;
  speed?: number;
}

export default function Aurora(props: AuroraProps): React.ReactElement {
  const {
    colorStops = ["#5227FF", "#7cff67", "#5227FF"],
    amplitude = 1.0,
    blend = 0.5,
    time = 0,
    speed = 1.0
  } = props;

  const ctnDom = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const animationIdRef = useRef<number | null>(null);

  // Initialize WebGL once
  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn || rendererRef.current) return;

    try {
      const renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: true,
        antialias: true
      });
      
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.canvas.style.backgroundColor = 'transparent';

      const geometry = new Triangle(gl);
      if (geometry.attributes.uv) {
        delete geometry.attributes.uv;
      }

      const colorStopsArray: [number, number, number][] = colorStops.slice(0, 3).map((hex: string): [number, number, number] => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      });

      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uTime: { value: time * speed * 0.1 },
          uAmplitude: { value: amplitude },
          uColorStops: { value: colorStopsArray },
          uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
          uBlend: { value: blend }
        }
      });

      const mesh = new Mesh(gl, { geometry, program });
      
      rendererRef.current = renderer;
      programRef.current = program;
      meshRef.current = mesh;
      
      ctn.appendChild(gl.canvas);

      // Resize handler
      const resize = () => {
        if (!ctn || !renderer || !program) return;
        const width = ctn.offsetWidth;
        const height = ctn.offsetHeight;
        renderer.setSize(width, height);
        program.uniforms.uResolution.value = [width, height];
      };

      window.addEventListener("resize", resize);
      resize();

      return () => {
        window.removeEventListener("resize", resize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
        if (ctn && gl.canvas.parentNode === ctn) {
          ctn.removeChild(gl.canvas);
        }
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        rendererRef.current = null;
        programRef.current = null;
        meshRef.current = null;
      };
    } catch (error) {
      console.error('Error initializing Aurora WebGL:', error);
    }
  }, [amplitude, blend, colorStops, speed, time]); // Add all dependencies

  // Update uniforms when props change
  useEffect(() => {
    const program = programRef.current;
    const renderer = rendererRef.current;
    const mesh = meshRef.current;
    
    if (!program || !renderer || !mesh) return;

    // Update uniforms
    program.uniforms.uTime.value = time * speed * 0.1;
    program.uniforms.uAmplitude.value = amplitude;
    program.uniforms.uBlend.value = blend;

    // Update color stops
    const colorStopsArray: [number, number, number][] = colorStops.slice(0, 3).map((hex: string): [number, number, number] => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });
    program.uniforms.uColorStops.value = colorStopsArray;

    // Render
    renderer.render({ scene: mesh });
  }, [time, speed, amplitude, blend, colorStops]);

  return (
    <div 
      ref={ctnDom} 
      className="aurora-container w-full h-full"
      style={{ minHeight: '100%' }}
    />
  );
}
