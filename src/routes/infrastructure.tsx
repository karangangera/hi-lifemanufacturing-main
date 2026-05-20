import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { infrastructure } from "@/lib/site-data";

export const Route = createFileRoute("/infrastructure")({
  component: InfraPage,
  head: () => ({ meta: [{ title: "Manufacturing Infrastructure | Hi-Life" }] }),
});

function InfraPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Infrastructure" title="8,400 m² of vertically integrated pump manufacturing." subtitle="A walkthrough of our Ahmedabad facility — machining, assembly, testing and export warehousing under one roof." breadcrumb="Infrastructure" />
      <section className="py-20 container-pro grid grid-cols-1 md:grid-cols-2 gap-8">
        {infrastructure.map((item) => (
          <div key={item.title} className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-industrial transition-shadow">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-7">
              <h3 className="font-display text-xl font-bold text-[#0F172A]">{item.title}</h3>
              <p className="mt-3 text-sm text-[#0F172A]/70 leading-relaxed">{item.description}</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {item.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg bg-slate-50 border border-slate-100 p-3 text-center">
                    <div className="font-display text-lg font-bold text-[#2563EB]">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#0F172A]/60 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}