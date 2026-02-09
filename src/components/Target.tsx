import type { TargetType } from "../types/game";

interface Props {
    target: TargetType;
}

export default function Target({ target }: Props) {
    return (
        <div
            className="absolute rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 shadow-[0_0_30px_gold] animate-pulse"
            style={{
                width: target.size,
                height: target.size,
                left: target.x - target.size / 2,
                top: target.y - target.size / 2,
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4)",
            }}
        >
            <div className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-100 to-transparent opacity-60" />
        </div>
    );
}
