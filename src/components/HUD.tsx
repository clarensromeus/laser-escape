interface Props {
  level: number;
  time: number;
  score: number;
}

export default function HUD({ level, time, score }: Props) {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
      <div className="bg-black/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-cyan-500/30 space-y-1">
        <p className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
          <span className="text-cyan-300">📊</span> Level: <span className="text-white">{level + 1}</span>
        </p>
        <p className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
          <span className="text-cyan-300">⏱️</span> Time: <span className="text-white">{time.toFixed(1)}s</span>
        </p>
      </div>

      <div className="bg-black/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-yellow-500/30">
        <p className="text-yellow-400 text-lg font-bold flex items-center gap-2">
          <span className="text-yellow-300">🎯</span> Score: <span className="text-white">{score}</span>
        </p>
      </div>
    </div>
  );
}
