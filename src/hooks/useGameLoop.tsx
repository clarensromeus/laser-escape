import { useEffect, useRef } from "react";

export default function useGameLoop(callback: () => void, active: boolean) {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const loop = () => {
      callback();
      frame.current = requestAnimationFrame(loop);
    };

    frame.current = requestAnimationFrame(loop);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active, callback]);
}
