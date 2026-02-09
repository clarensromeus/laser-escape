export interface PlayerType {
  x: number;
  y: number;
  size: number;
}

export interface LaserType {
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
}

export interface LevelType {
  lasers: number;
  speed: number;
}

export interface TargetType {
  x: number;
  y: number;
  size: number;
}
