'use client';

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  motion,
  AnimatePresence,
  Transition,
  type VariantLabels,
  type Target,
  type TargetAndTransition,
} from "framer-motion";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  transition?: Transition;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | VariantLabels | TargetAndTransition;
  exit?: Target | VariantLabels;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines";
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0.05,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...rest
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
    const [isClient, setIsClient] = useState(false);

    // Fix hydration issues
    useEffect(() => {
      setIsClient(true);
    }, []);

    const splitIntoCharacters = useCallback((text: string): string[] => {
      if (typeof window !== 'undefined' && typeof Intl !== "undefined" && Intl.Segmenter) {
        try {
          const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
          return Array.from(
            segmenter.segment(text),
            (segment) => segment.segment
          );
        } catch {
          console.warn('Intl.Segmenter not supported, falling back to Array.from');
          return Array.from(text);
        }
      }
      return Array.from(text);
    }, []);

    const elements = useMemo(() => {
      if (!isClient || !texts[currentTextIndex]) {
        return [];
      }

      const currentText: string = texts[currentTextIndex];
      
      if (splitBy === "characters") {
        const words = currentText.split(" ");
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }
      
      if (splitBy === "words") {
        return currentText.split(" ").map((word, i, arr) => ({
          characters: [word],
          needsSpace: i !== arr.length - 1,
        }));
      }
      
      if (splitBy === "lines") {
        return currentText.split("\n").map((line, i, arr) => ({
          characters: [line],
          needsSpace: i !== arr.length - 1,
        }));
      }

      return [{
        characters: [currentText],
        needsSpace: false,
      }];
    }, [texts, currentTextIndex, splitBy, splitIntoCharacters, isClient]);

    const getStaggerDelay = useCallback(
      (index: number, totalChars: number): number => {
        if (staggerDuration === 0) return 0;
        
        const total = Math.max(totalChars, 1);
        const clampedIndex = Math.max(0, Math.min(index, total - 1));
        
        if (staggerFrom === "first") return clampedIndex * staggerDuration;
        if (staggerFrom === "last")
          return (total - 1 - clampedIndex) * staggerDuration;
        if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - clampedIndex) * staggerDuration;
        }
        if (staggerFrom === "random") {
          // Use a deterministic random based on index to avoid layout shifts
          const seed = (clampedIndex * 9301 + 49297) % 233280;
          const randomValue = seed / 233280;
          return randomValue * staggerDuration * total;
        }
        if (typeof staggerFrom === "number") {
          return Math.abs(staggerFrom - clampedIndex) * staggerDuration;
        }
        return clampedIndex * staggerDuration;
      },
      [staggerFrom, staggerDuration]
    );

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        const validIndex = Math.max(0, Math.min(newIndex, texts.length - 1));
        setCurrentTextIndex(validIndex);
        if (onNext) onNext(validIndex);
      },
      [onNext, texts.length]
    );

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1;
      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
      const prevIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1;
      if (prevIndex !== currentTextIndex) {
        handleIndexChange(prevIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        if (validIndex !== currentTextIndex) {
          handleIndexChange(validIndex);
        }
      },
      [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0);
      }
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset]
    );

    useEffect(() => {
      if (!auto || !isClient) return;
      const intervalId = setInterval(next, rotationInterval);
      return () => clearInterval(intervalId);
    }, [next, rotationInterval, auto, isClient]);

    // Don't render anything on server-side to prevent hydration mismatch
    if (!isClient) {
      return (
        <span className={cn("flex flex-wrap whitespace-pre-wrap relative", mainClassName)}>
          {texts[0]}
        </span>
      );
    }

    const totalCharacters = elements.reduce(
      (sum, word) => sum + word.characters.length,
      0
    );

    return (
      <motion.span
        className={cn(
          "flex flex-wrap whitespace-pre-wrap relative",
          mainClassName
        )}
        {...rest}
        layout
        transition={transition}
      >
        <span className="sr-only">{texts[currentTextIndex]}</span>
        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.span
            key={`${currentTextIndex}-${splitBy}`}
            className={cn(
              splitBy === "lines"
                ? "flex flex-col w-full"
                : "flex flex-wrap whitespace-pre-wrap relative",
              splitLevelClassName
            )}
            layout
            aria-hidden="true"
          >
            {elements.map((wordObj, wordIndex) => {
              const previousCharsCount = elements
                .slice(0, wordIndex)
                .reduce((sum, word) => sum + word.characters.length, 0);
              
              return (
                <span
                  key={`word-${wordIndex}`}
                  className="inline-flex"
                >
                  {wordObj.characters.map((char, charIndex) => (
                    <motion.span
                      key={`char-${charIndex}`}
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      transition={{
                        ...transition,
                        delay: getStaggerDelay(
                          previousCharsCount + charIndex,
                          totalCharacters
                        ),
                      }}
                      className={cn("inline-block", elementLevelClassName)}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordObj.needsSpace && (
                    <span className="whitespace-pre"> </span>
                  )}
                </span>
              );
            })}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
