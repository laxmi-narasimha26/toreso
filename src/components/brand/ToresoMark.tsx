import Link from "next/link";

type ToresoMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function ToresoMark({ compact = false, inverse = false }: ToresoMarkProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Toreso home">
      <span className={`relative grid h-9 w-9 place-items-center rounded-full border ${inverse ? "border-[#f3eee6]/35" : "border-[#242424]/25"}`}>
        <span className={`absolute h-5 w-5 rounded-full border ${inverse ? "border-[#b9c7cd]/70" : "border-[#8fa1aa]/45"}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${inverse ? "bg-[#f3eee6]" : "bg-[#242424]"}`} />
      </span>
      {compact ? null : (
        <span className="leading-none">
          <span className={`block font-display text-[1.55rem] font-semibold tracking-[-0.035em] ${inverse ? "text-[#fbf8f2]" : "text-[#242424]"}`}>
            Toreso
          </span>
          <span className={`mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.24em] ${inverse ? "text-[#b9c7cd]" : "text-[#716960]"}`}>
            Total recyclable solutions
          </span>
        </span>
      )}
    </Link>
  );
}

type ProductArtifactProps = {
  variant: "roller" | "mailer" | "tape" | "pouch" | "honeycomb" | "label";
  title: string;
  material: string;
  accent?: "vapor" | "amber" | "fiber" | "sage";
};

const accentClass = {
  vapor: "from-[#b9c7cd] to-[#8fa1aa]",
  amber: "from-[#c9ad82] to-[#8f5f4a]",
  fiber: "from-[#dfd1bf] to-[#9a8469]",
  sage: "from-[#c8cdd0] to-[#8fa1aa]",
};

export function ProductArtifact({
  variant,
  title,
  material,
  accent = "fiber",
}: ProductArtifactProps) {
  return (
    <figure className="group relative overflow-hidden rounded-[1.6rem] border border-[#242424]/10 bg-[#fbf8f2]/78 p-5 shadow-[0_18px_60px_rgba(17,17,17,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(185,199,205,0.32),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.45),transparent)]" />
      <div className="relative grid min-h-[190px] place-items-center rounded-[1.15rem] bg-[#e8ded2]">
        <ArtifactShape variant={variant} accent={accent} />
      </div>
      <figcaption className="relative mt-5">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#80695b]">{material}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#242424]">{title}</h3>
      </figcaption>
    </figure>
  );
}

function ArtifactShape({
  variant,
  accent,
}: {
  variant: ProductArtifactProps["variant"];
  accent: NonNullable<ProductArtifactProps["accent"]>;
}) {
  if (variant === "roller") {
    return (
      <div className="relative h-28 w-44">
        <div className={`absolute left-2 top-5 h-20 w-20 rounded-full bg-gradient-to-br ${accentClass[accent]}`} />
        <div className="absolute left-[2.35rem] top-[2.55rem] h-8 w-8 rounded-full border-[8px] border-[#e8ded2] bg-[#242424]/60" />
        <div className="absolute right-3 top-10 h-10 w-24 rounded-full bg-[#fbf8f2] shadow-[inset_0_-8px_0_rgba(17,17,17,0.11)]" />
        <div className="absolute bottom-5 right-7 h-12 w-4 rounded-full bg-[#b9c7cd]" />
      </div>
    );
  }

  if (variant === "mailer") {
    return (
      <div className="relative h-28 w-44">
        <div className={`absolute inset-x-4 top-7 h-20 skew-y-[-4deg] rounded-[0.9rem] bg-gradient-to-br ${accentClass[accent]}`} />
        <div className="absolute left-10 right-10 top-[4.2rem] h-px rotate-[-4deg] bg-[#242424]/24" />
        <div className="absolute bottom-8 left-14 h-6 w-20 rounded-full border border-[#242424]/20 bg-[#fbf8f2]/70" />
      </div>
    );
  }

  if (variant === "tape") {
    return (
      <div className="relative h-28 w-44">
        <div className={`absolute left-8 top-3 h-[5.5rem] w-[5.5rem] rounded-full bg-gradient-to-br ${accentClass[accent]}`} />
        <div className="absolute left-[4.05rem] top-[2.4rem] h-10 w-10 rounded-full border-[10px] border-[#e8ded2] bg-[#242424]/50" />
        <div className="absolute bottom-5 right-5 h-12 w-28 rounded-[0.85rem] bg-[#fbf8f2] shadow-[inset_0_-7px_0_rgba(17,17,17,0.1)]" />
      </div>
    );
  }

  if (variant === "pouch") {
    return (
      <div className="relative h-32 w-36">
        <div className={`absolute inset-x-5 top-2 h-28 rounded-t-[1.35rem] rounded-b-[0.65rem] bg-gradient-to-br ${accentClass[accent]}`} />
        <div className="absolute left-10 right-10 top-6 h-1 rounded-full bg-[#242424]/35" />
        <div className="absolute bottom-8 left-11 right-11 h-8 rounded-[0.75rem] border border-[#242424]/18 bg-[#fbf8f2]/65" />
      </div>
    );
  }

  if (variant === "honeycomb") {
    return (
      <div className="grid h-28 w-44 grid-cols-5 gap-2.5">
        {Array.from({ length: 15 }, (_, index) => (
          <span key={index} className={`rounded-full bg-gradient-to-br ${accentClass[accent]}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-28 w-44">
      <div className="absolute inset-y-4 left-8 w-28 rounded-[0.9rem] bg-[#fbf8f2] shadow-[0_14px_40px_rgba(17,17,17,0.12)]" />
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`absolute left-12 h-2 rounded-full bg-gradient-to-r ${accentClass[accent]}`}
          style={{ top: `${32 + index * 14}px`, width: `${54 + index * 8}px` }}
        />
      ))}
    </div>
  );
}

export function LoopStatement({
  number,
  label,
  text,
}: {
  number: string;
  label: string;
  text: string;
}) {
  return (
    <article className="border-t border-[#242424]/18 py-6">
      <p className="font-display text-4xl font-medium tracking-[-0.04em] text-[#242424]">{number}</p>
      <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#80695b]">{label}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5a554f]">{text}</p>
    </article>
  );
}
