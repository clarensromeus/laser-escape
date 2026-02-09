interface Props {
  onStart: () => void;
}

export default function Intro({ onStart }: Props) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col items-center justify-start p-4 overflow-y-auto z-50">
      <div className="text-center space-y-4 max-w-2xl w-full my-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wider drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          LASER ESCAPE
        </h1>
        <p className="text-cyan-300 text-base italic">Navigate. Collect. Survive.</p>

        {/* core logics */}
        <div className="bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 space-y-3 text-left">
          <h2 className="text-xl font-bold text-cyan-400 text-center mb-2">How to Play</h2>
          {/* first half */}
          <div className="space-y-2 text-gray-300 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-xl">🎮</span>
              <p><strong className="text-cyan-400">Control:</strong> Move your mouse to control the player</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl">🎯</span>
              <p><strong className="text-yellow-400">Objective:</strong> Collect golden targets to score points</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl">⚠️</span>
              <p><strong className="text-red-400">Avoid:</strong> Don't touch the red lasers or it's game over!</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl">📈</span>
              <p><strong className="text-purple-400">Progress:</strong> Survive 10 seconds to advance levels</p>
            </div>
          </div>
         {/* second half */}
          <div className="flex justify-center gap-6 mt-4 pt-3 border-t border-cyan-500/20">
            <div className="text-center">
              <div className="w-4 h-4 rounded-full bg-cyan-400 mx-auto mb-1 shadow-[0_0_20px_rgba(34,211,238,1)]"></div>
              <p className="text-xs text-gray-400">You</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-1 bg-red-500 mx-auto mb-1 shadow-[0_0_20px_rgba(239,68,68,1)]"></div>
              <p className="text-xs text-gray-400">Laser</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 rounded-full bg-yellow-400 mx-auto mb-1 shadow-[0_0_20px_rgba(250,204,21,1)]"></div>
              <p className="text-xs text-gray-400">Target</p>
            </div>
          </div>
        </div>
       {/* start game button */}
        <button
          onClick={onStart}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-bold rounded-full hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition-all duration-300 border-2 border-cyan-300"
        >
          START GAME
        </button>
      </div>
    </div>
  );
}
