import type { LaserType } from "../types/game";

interface Props {
  laser: LaserType;
}

export default function Laser({ laser }: Props) {
  return (
    <div
      className="absolute bg-red-500 transition-opacity duration-300"
      style={{
        width: laser.width,
        height: laser.height,
        left: laser.x,
        top: laser.y,
        transform: `rotate(${laser.angle}deg)`,
        boxShadow: "0 0 20px rgba(239, 68, 68, 1), 0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.3)",
        animation: "laserPulse 2s ease-in-out infinite",
      }}
    />
  );
}
