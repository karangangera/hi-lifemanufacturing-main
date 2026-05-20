import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import cnc from "@/assets/factory-cnc.jpg";
import assembly from "@/assets/factory-assembly.jpg";
import testing from "@/assets/factory-testing.jpg";
import warehouse from "@/assets/factory-warehouse.jpg";
import hero from "@/assets/hero-factory.jpg";
import a from "@/assets/product-metallic-aodd.jpg";
import b from "@/assets/product-nonmetallic.jpg";
import c from "@/assets/product-barrel.jpg";
import d from "@/assets/product-chemical.jpg";
import e from "@/assets/product-transfer.jpg";
import f from "@/assets/industry-chemical.jpg";
import g from "@/assets/industry-pharma.jpg";

const imgs = [hero, cnc, a, assembly, b, testing, c, warehouse, d, f, e, g];

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({ meta: [{ title: "Gallery | Hi-Life Manufacturing" }] }),
});

function GalleryPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Gallery" title="Inside the Hi-Life manufacturing campus." subtitle="A visual tour of our products, plant infrastructure and industrial installations across India and overseas." breadcrumb="Gallery" />
      <section className="py-20 container-pro">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {imgs.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden bg-[#0F172A] shadow-sm hover:shadow-industrial transition-shadow group">
              <img src={src} alt="" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}