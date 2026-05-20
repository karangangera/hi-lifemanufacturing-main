import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { products, type Product } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetail,
  loader: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { product: p as Product };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.product.name} | Hi-Life Manufacturing` }, { name: "description", content: loaderData?.product.tagline }] }),
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData() as { product: Product };
  return (
    <SiteShell>
      <PageHero eyebrow={p.category} title={p.name} subtitle={p.tagline} breadcrumb={`Products / ${p.name}`} />
      <section className="py-20">
        <div className="container-pro grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-[#0F172A] shadow-industrial">
              <img src={p.image} alt={p.name} className="w-full h-[460px] object-cover" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {p.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-[#0F172A]/80"><CheckCircle2 className="h-4 w-4 text-[#2563EB] mt-0.5" />{f}</div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-display text-2xl font-bold text-[#0F172A]">Description</h2>
            <p className="mt-3 text-[#0F172A]/75 leading-[1.8]">{p.description}</p>
            <h2 className="mt-10 font-display text-2xl font-bold text-[#0F172A]">Technical Specifications</h2>
            <div className="mt-4 rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {p.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-5 py-3 font-semibold text-[#0F172A] w-1/2">{s.label}</td>
                      <td className="px-5 py-3 text-[#0F172A]/75">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="mt-10 font-display text-2xl font-bold text-[#0F172A]">Applications</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {p.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-[#0F172A]/80"><span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] mt-2" />{a}</li>
              ))}
            </ul>
            <Button asChild className="mt-10 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-semibold">
              <Link to="/contact">Request Quote <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}