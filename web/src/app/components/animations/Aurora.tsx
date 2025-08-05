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
uniform vec3 uColorStops[3]; // Still using 3 color stops as per your initial setup
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

// Defining ColorStop as a struct (no changes needed here)
struct ColorStop {
  vec3 color;
  float position;
};

// --- FIX START ---
// Corrected COLOR_RAMP to handle 3 color stops properly
// This now correctly interpolates between all three color stops based on the factor.
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
  } else { // factor >= colors[1].position
    float range = colors[2].position - colors[1].position;
    float lerpFactor = (factor - colors[1].position) / range;
    finalColor = mix(colors[1].color, colors[2].color, lerpFactor);
  }
  return finalColor;
}
// --- FIX END ---

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  // --- FIX START ---
  // Call the new function instead of the macro
  rampColor = getColorFromRamp(colors, uv.x);
  // --- FIX END ---
  
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

interface UpdateProps {
  time?: number;
  speed?: number;
  amplitude?: number;
  blend?: number;
  colorStops?: string[];
}

export default function Aurora(props: AuroraProps): React.ReactElement {
  const {
    colorStops = ["#5227FF", "#7cff67", "#5227FF"],
    amplitude = 1.0,
    blend = 0.5,
    time = 0, // Add time to props with a default
    speed = 1.0 // Add speed to props with a default
  } = props;
  const propsRef = useRef<AuroraProps>(props);
  // Ensure propsRef.current is always up-to-date with the latest props
  useEffect(() => {
    propsRef.current = props;
  }, [props]);


  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

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

    const colorStopsArray: [number, number, number][] = colorStops.map((hex: string): [number, number, number] => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: time * speed * 0.1 }, // Initialize with current prop values
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsArray },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uBlend: { value: blend }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;

    const update = (): void => {
      animateId = requestAnimationFrame(update);
      // Use the time and speed from propsRef.current directly
      const currentProps: UpdateProps = propsRef.current;
      program.uniforms.uTime.value = (currentProps.time ?? 0) * (currentProps.speed ?? 1.0) * 0.1;
      program.uniforms.uAmplitude.value = currentProps.amplitude ?? 1.0;
      program.uniforms.uBlend.value = currentProps.blend ?? 0.5; // Use 0.5 as default if blend is undefined

      // Always re-map color stops in case they change
      const currentStops: string[] = currentProps.colorStops ?? colorStops;
      program.uniforms.uColorStops.value = currentStops.map((hex: string) => {
        const c = new Color(hex);
        return [c.r, c.g, c.b] as [number, number, number];
      });
      renderer.render({ scene: mesh });
    };
    animateId = requestAnimationFrame(update);

    function resize(): void {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    }
    window.addEventListener("resize", resize);

    resize();

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (ctn && gl.canvas.parentNode === ctn) {
        (ctn as HTMLElement).removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // Re-run effect when ctnDom.current or any prop changes
  }, [ctnDom, colorStops, amplitude, blend, time, speed]);

  return <div ref={ctnDom} className="aurora-container" />;
}
