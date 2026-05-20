type Props = { title: string; subtitle?: string; eyebrow?: string; image?: string; breadcrumb?: string };

export function PageHero({ title, subtitle, eyebrow, image, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]/40" />
        </div>
      )}
      <div className="absolute inset-0 industrial-grid opacity-50" />
      <div className="container-pro relative py-20 md:py-28">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#F59E0B] font-semibold">
            <span className="h-px w-8 bg-[#F59E0B]" /> {eyebrow}
          </div>
        )}
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
        {breadcrumb && <div className="mt-6 text-xs text-white/50">Home / {breadcrumb}</div>}
      </div>
    </section>
  );
}