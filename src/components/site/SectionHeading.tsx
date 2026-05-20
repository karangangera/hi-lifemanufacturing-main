type Props = { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center"; light?: boolean };

export function SectionHeading({ eyebrow, title, subtitle, align = "left", light }: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-semibold ${light ? "text-[#F59E0B]" : "text-[#2563EB]"}`}>
          <span className={`h-px w-8 ${light ? "bg-[#F59E0B]" : "bg-[#2563EB]"}`} /> {eyebrow}
        </div>
      )}
      <h2 className={`mt-3 font-display text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight ${light ? "text-white" : "text-[#0F172A]"}`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-4 text-[15.5px] leading-relaxed ${light ? "text-white/70" : "text-[#0F172A]/65"}`}>{subtitle}</p>}
    </div>
  );
}