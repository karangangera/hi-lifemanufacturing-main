import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { blog } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetail,
  loader: ({ params }) => {
    const post = blog.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.post.title} | Hi-Life Blog` }, { name: "description", content: loaderData?.post.excerpt }] }),
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  return (
    <SiteShell>
      <PageHero eyebrow={post.category} title={post.title} subtitle={post.excerpt} image={post.image} breadcrumb={`Blog / ${post.title}`} />
      <article className="py-16 container-pro max-w-3xl prose prose-slate">
        <p className="text-[#0F172A]/75 leading-[1.9]">{post.excerpt}</p>
        <p className="text-[#0F172A]/75 leading-[1.9] mt-6">
          Industrial pump engineering is the discipline of matching a piece of rotating or reciprocating machinery
          to the chemistry, viscosity and operating envelope of a process fluid. At Hi-Life, this discipline begins
          with a customer's process flow diagram and ends with a serial-numbered, hydraulically tested pump packed
          for export.
        </p>
        <h2 className="font-display text-2xl font-bold text-[#0F172A] mt-10">Selection Methodology</h2>
        <p className="text-[#0F172A]/75 leading-[1.9] mt-3">
          The first step is to characterise the fluid — specific gravity, viscosity at operating temperature, solids
          content, abrasiveness, vapour pressure and chemical compatibility. These properties drive material of
          construction selection, seal arrangement, and pump architecture.
        </p>
        <h2 className="font-display text-2xl font-bold text-[#0F172A] mt-10">Lifecycle Cost Thinking</h2>
        <p className="text-[#0F172A]/75 leading-[1.9] mt-3">
          The capital cost of a pump is a small fraction of its lifetime cost. Energy, maintenance, downtime and
          spares dominate the total cost of ownership. A correctly sized pump operating near its Best Efficiency
          Point can save 15–30% in energy alone over a 10-year service life.
        </p>
        <p className="text-sm text-[#0F172A]/55 mt-12">
          Want to discuss this topic for your plant? <Link to="/contact" className="text-[#2563EB] font-semibold">Talk to a Hi-Life engineer →</Link>
        </p>
      </article>
    </SiteShell>
  );
}