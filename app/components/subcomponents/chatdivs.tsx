// app/components/ChatBullet.tsx
type ChatBulletProps = {
  index: number;
  title: string;
  body: string;
};

export function ChatBullet({ index, title, body }: ChatBulletProps) {
  return (
    <div
      className="
        relative flex gap-3 rounded-xl 
        bg-zinc-950/80 border border-white/10 
        px-4 py-3
        shadow-[0_0_30px_rgba(139,92,246,0.18)]
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-0.5 hover:border-purple-500/40
      "
    >
      {/* Accent bar */}
      <div className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-gradient-to-b from-purple-400 via-sky-400 to-purple-500" />

      {/* Index bubble */}
      <div className="relative z-10 mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/20 text-xs font-semibold text-purple-200 border border-purple-400/40">
        {index}
      </div>

      {/* Text content */}
      <div className="relative z-10 flex-1 space-y-1">
        <h4 className="text-sm font-semibold text-white">
          {title}
        </h4>
        <p className="text-xs text-gray-300 leading-relaxed">
          {body}
        </p>
      </div>

      {/* Subtle bottom glare */}
      <div className="pointer-events-none absolute -bottom-6 left-6 right-2 h-16 bg-gradient-to-t from-purple-500/25 via-transparent to-transparent blur-2xl opacity-60" />
    </div>
  );
}
