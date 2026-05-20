import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { industries } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({ meta: [{ title: "Industries Served | Hi-Life Manufacturing" }] }),
});

function IndustriesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Industries" title="Pumps engineered for every demanding process." subtitle="Hi-Life supplies precision pumps across India's chemical, pharma, textile, paint, water-treatment and ceramics industries." breadcrumb="Industries" />
      <section className="py-20 container-pro space-y-16">
        {industries.map((ind, i) => (
          <div key={ind.slug} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-industrial aspect-[4/3]">
              <img src={ind.image} alt={ind.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <Badge className="bg-[#2563EB]/10 text-[#2563EB] border-0">Industry 0{i+1}</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mt-3">{ind.name}</h2>
              <p className="mt-4 text-[#0F172A]/75 leading-[1.8]">{ind.description}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#2563EB] font-semibold">Common Fluids</div>
                  <ul className="mt-2 space-y-1 text-sm text-[#0F172A]/75">
                    {ind.fluids.map((f) => <li key={f}>• {f}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#2563EB] font-semibold">Recommended Pumps</div>
                  <ul className="mt-2 space-y-1 text-sm text-[#0F172A]/75">
                    {ind.recommended.map((r) => <li key={r}>• {r}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}