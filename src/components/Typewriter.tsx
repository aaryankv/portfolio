import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  words: string[];
  typingSpeedMs?: number;
  deleteSpeedMs?: number;
  pauseMs?: number;
  loop?: boolean;
  className?: string;
};

export default function Typewriter({
  words,
  typingSpeedMs = 60,
  deleteSpeedMs = 30,
  pauseMs = 1200,
  loop = true,
  className = ""
}: Props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const current = useMemo(() => words[index] ?? "", [words, index]);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setBlink(true);
    const blinkTimer = window.setInterval(() => setBlink((v) => !v), 500);
    return () => window.clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    if (!current) return;

    if (!deleting && subIndex === current.length) {
      // Pause at end of word
      timerRef.current = window.setTimeout(() => setDeleting(true), pauseMs) as unknown as number;
      return () => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
      };
    }

    if (deleting && subIndex === 0) {
      // Move to next word
      const next = index + 1;
      if (next < words.length) {
        setIndex(next);
      } else if (loop) {
        setIndex(0);
      }
      setDeleting(false);
      return;
    }

    timerRef.current = window.setTimeout(() => {
      setSubIndex((v) => v + (deleting ? -1 : 1));
    }, deleting ? deleteSpeedMs : typingSpeedMs) as unknown as number;

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [current, deleting, index, pauseMs, subIndex, typingSpeedMs, deleteSpeedMs, loop, words.length]);

  return (
    <span className={["inline-flex items-center", className].join(" ")}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-cyan-300">
        {current.substring(0, subIndex)}
      </span>
      <span
        aria-hidden="true"
        className={[
          "ml-0.5 h-5 w-[2px] rounded-sm",
          blink ? "bg-cyan-300/90" : "bg-transparent"
        ].join(" ")}
      />
    </span>
  );
}
