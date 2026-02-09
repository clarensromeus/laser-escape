import { useRef, useState } from "react";
import Player from "./Player";
import Laser from "./Laser";
import Target from "./Target";
import HUD from "./HUD";
import Intro from "./Intro";
import useGameLoop from "../hooks/useGameLoop";
import useControls from "../hooks/useControls";
import { isColliding, isCollidingWithTarget } from "../utils/collisions";
import { levels } from "../utils/levels";
import type { PlayerType, LaserType, TargetType } from "../types/game";

export default function GameBoard() {
  const boardRef = useRef<HTMLDivElement>(null);

  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(0);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const [player, setPlayer] = useState<PlayerType>({
    x: 450,
    y: 250,
    size: 20,
  });

  const [target, setTarget] = useState<TargetType>({
    x: Math.random() * 800 + 50,
    y: Math.random() * 400 + 50,
    size: 24,
  });

  const lasers: LaserType[] = Array.from({
    length: levels[level].lasers,
  }).map((_, i) => ({
    x: (i * 140) % 800,
    y: (i * 90) % 400,
    width: 200,
    height: 6,
    angle: (i * 25) % 360,
  }));

  useControls(setPlayer, boardRef);

  useGameLoop(() => {
    setTime((t) => t + 0.016);

    // Check laser collisions
    lasers.forEach((laser) => {
      if (isColliding(player, laser)) {
        setGameOver(true);
      }
    });

    // Check target collection
    if (isCollidingWithTarget(player, target)) {
      setScore((s) => s + 1);
      // Spawn new target at random position
      setTarget({
        x: Math.random() * 800 + 50,
        y: Math.random() * 350 + 75,
        size: 24,
      });
    }

    // Win condition: score 10 targets
    if (score >= 10) {
      setWon(true);
    }

    // Level progression
    if (time > 10) {
      setLevel((l) => Math.min(l + 1, levels.length - 1));
      setTime(0);
    }
  }, started && !gameOver && !won);

  const handleRestart = () => {
    setGameOver(false);
    setWon(false);
    setTime(0);
    setLevel(0);
    setScore(0);

    setPlayer({
      x: 450,
      y: 250,
      size: 20,
    });

    setTarget({
      x: Math.random() * 800 + 50,
      y: Math.random() * 400 + 50,
      size: 24,
    });
  };

  return (
    <div
      ref={boardRef}
      className="relative w-[900px] h-[500px] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_60px_rgba(34,211,238,0.3)]"
    >
      {!started && <Intro onStart={() => { setStarted(true); console.log('Started!') }} />}

      <HUD level={level} time={time} score={score} />
      <Player player={player} />
      <Target target={target} />

      {lasers.map((laser, i) => (
        <Laser key={i} laser={laser} />
      ))}

      {won && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-6">
          <div className="text-center space-y-4">
            <p className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent animate-pulse">
              🎉 VICTORY! 🎉
            </p>
            <p className="text-cyan-400 text-2xl font-semibold">
              Final Score: <span className="text-white text-4xl">{score}</span>
            </p>
            <p className="text-gray-400 text-lg">
              You've mastered the lasers!
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-bold hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.6)] border-2 border-cyan-300"
          >
            PLAY AGAIN
          </button>
        </div>
      )}

      {gameOver && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-6">
          <div className="text-center space-y-4">
            <p className="text-6xl font-bold text-red-500 tracking-widest animate-pulse drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]">
              GAME OVER
            </p>
            <p className="text-cyan-400 text-2xl font-semibold">
              Final Score: <span className="text-white text-4xl">{score}</span>
            </p>
            <p className="text-gray-400 text-lg">
              Level {level + 1} • Time: {time.toFixed(1)}s
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-bold hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.6)] border-2 border-cyan-300"
          >
            RESTART
          </button>
        </div>
      )}
    </div>
  );
}
