//@ts-ignore
import { useEffect, RefObject } from "react";
import type { PlayerType } from "../types/game";

export default function useControls(
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>,
  boardRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const move = (e: MouseEvent | Touch) => {
      if (!boardRef.current) return;

      const rect = boardRef.current.getBoundingClientRect();

      setPlayer((p) => ({
        ...p,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }));
    };

    const handleMouse = (e: MouseEvent) => move(e);
    const handleTouch = (e: TouchEvent) => move(e.touches[0]);

    boardRef.current?.addEventListener("mousemove", handleMouse);
    boardRef.current?.addEventListener("touchmove", handleTouch);

    return () => {
      boardRef.current?.removeEventListener("mousemove", handleMouse);
      boardRef.current?.removeEventListener("touchmove", handleTouch);
    };
  }, [boardRef, setPlayer]);
}
