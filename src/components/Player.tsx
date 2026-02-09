import type { PlayerType } from "../types/game";

interface Props {
  player: PlayerType;
}

export default function Player({ player }: Props) {
  return (
    <div
      className="absolute rounded-full bg-cyan-400 transition-all duration-75"
      style={{
        width: player.size,
        height: player.size,
        left: player.x - player.size / 2,
        top: player.y - player.size / 2,
        boxShadow: "0 0 20px rgba(34, 211, 238, 1), 0 0 40px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.3)",
        border: "2px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <div className="absolute inset-2 rounded-full bg-white opacity-50" />
    </div>
  );
}
