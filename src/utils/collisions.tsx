import type { PlayerType, LaserType, TargetType } from "../types/game";

export function isColliding(player: PlayerType, laser: LaserType): boolean {
  return (
    player.x < laser.x + laser.width &&
    player.x + player.size > laser.x &&
    player.y < laser.y + laser.height &&
    player.y + player.size > laser.y
  );
}

export function isCollidingWithTarget(player: PlayerType, target: TargetType): boolean {
  const dx = player.x - target.x;
  const dy = player.y - target.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < (player.size / 2 + target.size / 2);
}
