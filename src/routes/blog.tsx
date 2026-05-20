import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { blog } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({ meta: [{ title: "Engineering Blog | Hi-Life Manufacturing" }] }),
});

function BlogPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Blog" title="Engineering insights from the Hi-Life team." subtitle="Application notes, maintenance guides and industry trends." breadcrumb="Blog" />
      <section className="py-20 container-pro grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((b) => (
          <Link to="/blog/$slug" params={{ slug: b.slug }} key={b.slug} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-industrial transition-shadow">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A]">
              <img src={b.image} alt={b.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <Badge className="absolute top-3 left-3 bg-[#F59E0B] text-[#0F172A]">{b.category}</Badge>
            </div>
            <div className="p-6">
              <div className="text-xs text-[#0F172A]/55">{b.date} • {b.read}</div>
              <h3 className="mt-2 font-display text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{b.title}</h3>
              <p className="mt-2 text-sm text-[#0F172A]/65 line-clamp-3">{b.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}