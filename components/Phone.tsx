const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${base}/${path.replace(/^\//, "")}`;
}

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

// A screenshot in a thin device frame. Screenshots are 540×1092 (iPhone with the status bar cropped off).
export function Phone({ src, alt, className = "", priority = false }: Props) {
  return (
    <div
      className={`rounded-[1.9rem] bg-[#0f1214] p-[4px] shadow-[0_30px_60px_-30px_rgba(15,18,20,0.35),0_0_0_1px_rgba(15,18,20,0.06)] dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08)] ${className}`}
    >
      <img
        src={asset(src)}
        alt={alt}
        width={540}
        height={1092}
        loading="eager"
        className="block aspect-[540/1092] w-full rounded-[1.65rem] object-cover"
      />
    </div>
  );
}
