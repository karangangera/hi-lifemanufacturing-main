import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { products } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({ meta: [{ title: "Industrial Pump Products | Hi-Life Manufacturing" }, { name: "description", content: "Explore Hi-Life's full range of AODD, barrel, chemical process and fluid handling pumps." }] }),
});

function ProductsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Products" title="Industrial pumps engineered for the toughest media." subtitle="From metallic AODD pumps to turnkey transfer skids — a complete catalog built on 44 years of process engineering." breadcrumb="Products" />
      <section className="py-20">
        <div className="container-pro grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link to="/products/$slug" params={{ slug: p.slug }} key={p.slug} className="group overflow-hidden rounded-2xl bg-white border border-slate-200 hover:shadow-industrial hover:-translate-y-1 transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0F172A]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <Badge className="absolute top-3 left-3 bg-[#F59E0B] text-[#0F172A]">{p.category}</Badge>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[#0F172A]">{p.name}</h3>
                <p className="text-sm text-[#0F172A]/65 mt-2 line-clamp-3 leading-relaxed">{p.tagline}</p>
                <div className="mt-5 inline-flex items-center text-[#2563EB] font-semibold text-sm">View details <ArrowRight className="h-4 w-4 ml-1" /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}