import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cog, Factory, FlaskConical, ShieldCheck, Star, Wrench, Award, Cpu, Globe2, Users, ChevronRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { products, industries, whyChooseUs, processSteps, stats, testimonials, blog, faqs, company } from "@/lib/site-data";
import hero from "@/assets/hero-factory.jpg";
import facCnc from "@/assets/factory-cnc.jpg";
import facAssembly from "@/assets/factory-assembly.jpg";
import facTesting from "@/assets/factory-testing.jpg";
import facWarehouse from "@/assets/factory-warehouse.jpg";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hi-Life Manufacturing | Industrial AODD & Chemical Process Pumps in India" },
      { name: "description", content: "ISO 9001:2015 manufacturer of Air Operated Double Diaphragm (AODD), barrel, chemical process and fluid handling pumps. Engineered in Ahmedabad since 1981, exporting to 32 countries." },
      { property: "og:title", content: "Hi-Life Manufacturing | Industrial Pumps Since 1981" },
      { property: "og:description", content: "Precision industrial pump manufacturing — AODD, barrel, chemical process and turnkey fluid handling systems." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <Overview />
      <ProductsSection />
      <WhyUs />
      <IndustriesSection />
      <Process />
      <Infrastructure />
      <Quality />
      <Testimonials />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </SiteShell>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white">
      <img src={hero} alt="Hi-Life AODD pump manufacturing line" width={1920} height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0B1220]/85 to-transparent" />
      <div className="absolute inset-0 industrial-grid opacity-50" />

      <div className="container-pro relative pt-20 pb-28 md:pt-28 md:pb-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-rise">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark text-[11px] tracking-[0.22em] uppercase font-semibold text-[#F59E0B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            Engineered in India • Trusted Globally Since 1981
          </div>
          <h1 className="mt-6 font-display text-[40px] leading-[1.05] sm:text-5xl md:text-[64px] md:leading-[1.02] font-bold tracking-tight">
            Precision Industrial Pump <span className="text-gradient-amber">Manufacturing</span> Solutions
          </h1>
          <p className="mt-6 text-white/75 text-[15.5px] md:text-lg leading-relaxed max-w-2xl">
            For more than four decades, Hi-Life Manufacturing has designed, machined and tested air-operated
            double diaphragm pumps, barrel pumps, chemical process pumps and turnkey fluid handling skids for the
            world's most demanding chemical, pharmaceutical, textile, paint and water-treatment industries.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 px-6 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-semibold rounded-md shadow-industrial">
              <Link to="/products">Explore Products <ArrowRight className="h-4 w-4 ml-1.5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium rounded-md">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-[#F59E0B]/60 pl-3">
                <div className="font-display text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/55 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating glass info cards */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative h-[520px]">
            <FloatCard
              className="top-2 left-0 w-[280px]"
              icon={<ShieldCheck className="h-5 w-5 text-[#F59E0B]" />}
              title="ISO 9001:2015"
              sub="Documented QMS • Material Traceability"
            />
            <FloatCard
              className="top-44 right-0 w-[280px] animate-float"
              icon={<Globe2 className="h-5 w-5 text-[#F59E0B]" />}
              title="Export to 32 Countries"
              sub="Middle East • Africa • SE Asia • Europe"
            />
            <FloatCard
              className="bottom-12 left-6 w-[290px]"
              icon={<Cpu className="h-5 w-5 text-[#F59E0B]" />}
              title="ANSYS CFD Validated"
              sub="Hydraulic & FEA simulation on every model"
            />
            <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-[#2563EB]/30 blur-3xl" />
            <div className="absolute -left-10 top-20 h-32 w-32 rounded-full bg-[#F59E0B]/30 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-t border-white/10 bg-[#070C18]">
        <div className="container-pro flex flex-wrap gap-x-10 gap-y-3 items-center justify-between py-5 text-[11px] uppercase tracking-[0.25em] text-white/55 font-semibold">
          {company.certifications.map((c) => (
            <span key={c} className="inline-flex items-center gap-2"><Award className="h-3.5 w-3.5 text-[#F59E0B]" />{c}</span>
          ))}
          <span className="inline-flex items-center gap-2"><Factory className="h-3.5 w-3.5 text-[#F59E0B]" />Vatva GIDC, Ahmedabad</span>
          <span className="inline-flex items-center gap-2"><Users className="h-3.5 w-3.5 text-[#F59E0B]" />120+ Engineers</span>
        </div>
      </div>
    </section>
  );
}

function FloatCard({ className, icon, title, sub }: { className?: string; icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className={`absolute glass-dark rounded-xl p-5 shadow-industrial ${className}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-white/5 grid place-items-center">{icon}</div>
        <div>
          <div className="font-display font-semibold text-white">{title}</div>
          <div className="text-xs text-white/60 mt-0.5">{sub}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- OVERVIEW ---------------- */
function Overview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-pro grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-industrial">
            <img src={facAssembly} alt="Hi-Life assembly hall" width={1280} height={800} loading="lazy" className="w-full h-[460px] object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:right-4 bg-white rounded-2xl shadow-industrial p-6 max-w-xs border border-slate-100">
            <div className="font-display text-5xl font-bold text-[#2563EB]">44+</div>
            <div className="mt-1 text-sm text-[#0F172A] font-medium">Years of Industrial Engineering Excellence</div>
            <div className="mt-3 text-xs text-slate-500">Established 1981 • Ahmedabad, Gujarat</div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About Hi-Life Manufacturing"
            title="Four decades of engineering trust in fluid handling."
            subtitle="From a small machine shop in Ahmedabad in 1981 to one of India's most respected pump manufacturers — Hi-Life has built its reputation on uncompromising precision, deep application engineering and on-time delivery."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Factory, title: "Vertically Integrated", desc: "Casting, machining, welding, assembly and testing under one roof in Ahmedabad." },
              { icon: Globe2, title: "Global Footprint", desc: "Active installations across 32 countries with a 12-language documentation library." },
              { icon: FlaskConical, title: "Application Engineering", desc: "Pump selection backed by chemistry, viscosity, NPSH and lifecycle-cost analysis." },
              { icon: Cog, title: "Aftermarket Support", desc: "98.4% on-time spares dispatch and 24-state service coverage." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3.5">
                <div className="h-11 w-11 shrink-0 rounded-lg bg-[#2563EB]/10 grid place-items-center text-[#2563EB]"><Icon className="h-5 w-5" /></div>
                <div>
                  <div className="font-display font-semibold text-[#0F172A]">{title}</div>
                  <p className="text-sm text-[#0F172A]/65 mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild className="bg-[#0F172A] hover:bg-[#1E293B] text-white">
              <Link to="/about">Read Our Story <ArrowUpRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCTS ---------------- */
function ProductsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="container-pro">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Industrial pumps engineered for the toughest media."
            subtitle="Our portfolio spans metallic and non-metallic AODD pumps, barrel pumps, chemical process pumps and turnkey transfer systems — built on a unified platform of investment-cast wet ends and precision-machined power ends."
          />
          <Button asChild variant="outline" className="border-[#0F172A]/15 text-[#0F172A] hover:bg-[#0F172A] hover:text-white">
            <Link to="/products">View All Products <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card key={p.slug} className="group overflow-hidden border-slate-200 bg-white p-0 hover:-translate-y-1 transition-transform duration-300 hover:shadow-industrial">
              <div className="relative overflow-hidden bg-[#0F172A] aspect-[4/3]">
                <img src={p.image} alt={p.name} width={1024} height={768} loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <Badge className="absolute top-3 left-3 bg-[#F59E0B] text-[#0F172A] font-semibold">{p.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-[#0F172A]">{p.name}</h3>
                <p className="text-sm text-[#0F172A]/65 mt-2 leading-relaxed line-clamp-3">{p.tagline}</p>
                <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-[#0F172A]/70">
                  {p.specs.slice(0, 4).map((s) => (
                    <li key={s.label} className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-[#F59E0B]" />{s.label}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="text-sm font-semibold text-[#2563EB] inline-flex items-center gap-1 group/link">
                    View Details <ChevronRight className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                  <Button asChild size="sm" className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs h-9">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const icons = [Wrench, ShieldCheck, Cpu, FlaskConical, Globe2, Users];
  return (
    <section className="py-20 md:py-28">
      <div className="container-pro">
        <SectionHeading
          align="center"
          eyebrow="Why Hi-Life"
          title="Industrial-grade engineering at every step of the supply chain."
          subtitle="What separates us from off-the-shelf imports is the combination of an integrated manufacturing facility, deep application know-how and a 200-strong service network across India and overseas."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={w.title} className="group relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#2563EB] transition-colors shadow-sm hover:shadow-industrial">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#0F172A] grid place-items-center text-white"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 font-display text-lg font-bold text-[#0F172A]">{w.title}</h3>
                <p className="mt-2 text-sm text-[#0F172A]/65 leading-relaxed">{w.desc}</p>
                <div className="absolute top-7 right-7 font-display text-3xl font-bold text-slate-100 group-hover:text-[#F59E0B]/30 transition-colors">0{i+1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="container-pro relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading light eyebrow="Industries We Serve" title="Trusted across India's process industries." subtitle="Hi-Life pumps run 24/7 in the harshest chemical, pharma, textile, paint, water and ceramics environments — engineered for application-specific reliability." />
          <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white hover:text-[#0F172A]">
            <Link to="/industries">All Industries <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((i) => (
            <Link to="/industries" key={i.slug} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={i.image} alt={i.name} width={1024} height={700} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#F59E0B] font-semibold">Industry</div>
                  <h3 className="font-display text-xl font-bold text-white mt-1">{i.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-white/65 leading-relaxed">{i.short}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-[#F59E0B] text-sm font-semibold">Explore <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-pro">
        <SectionHeading align="center" eyebrow="Manufacturing Process" title="From application brief to global dispatch in six gated stages." subtitle="Every Hi-Life pump passes through six engineering gates, each documented and traceable from raw material to serial number." />
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {processSteps.map((s, idx) => (
              <div key={s.step} className="relative">
                <div className="h-18 w-18 mx-auto mb-5 relative">
                  <div className="h-18 w-18 rounded-2xl bg-white border-2 border-[#2563EB] grid place-items-center font-display font-bold text-[#2563EB] text-xl shadow-industrial">{s.step}</div>
                  {idx < processSteps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 h-2 w-2 rounded-full bg-[#F59E0B]" />}
                </div>
                <h3 className="font-display font-bold text-center text-[#0F172A]">{s.title}</h3>
                <p className="text-xs text-[#0F172A]/65 text-center mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INFRASTRUCTURE ---------------- */
function Infrastructure() {
  const items = [
    { img: facCnc, title: "Precision CNC Machining", desc: "Mazak and DMG Mori turning + 5-axis machining centers" },
    { img: facAssembly, title: "Assembly & Integration", desc: "Cell-based torque-controlled assembly lines" },
    { img: facTesting, title: "Performance Test Lab", desc: "ISO 9906 Grade 2B hydraulic & air-leak rigs" },
    { img: facWarehouse, title: "Export Warehouse", desc: "Bonded export packing for shipments to 32 countries" },
  ];
  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="container-pro">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow="Factory Infrastructure" title="8,400 m² of vertically integrated manufacturing." subtitle="Everything from raw casting to final hydraulic test happens under one roof at our Vatva GIDC plant in Ahmedabad." />
          <Button asChild variant="outline" className="border-[#0F172A]/15 text-[#0F172A] hover:bg-[#0F172A] hover:text-white">
            <Link to="/infrastructure">Tour the Plant <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-2xl overflow-hidden bg-[#0F172A]">
              <img src={it.img} alt={it.title} width={1280} height={800} loading="lazy" className="w-full h-72 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="font-display font-bold text-lg">{it.title}</h3>
                <p className="text-xs text-white/70 mt-1">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUALITY ---------------- */
function Quality() {
  const points = [
    { title: "Material Traceability", desc: "Heat numbers and mill test certificates linked to each pump serial number." },
    { title: "Dimensional Inspection", desc: "CMM verification on impellers, shafts and casing critical dimensions." },
    { title: "Hydraulic Performance", desc: "Closed-loop Q-H, NPSH and efficiency testing to ISO 9906 Grade 2B." },
    { title: "Pressure & Leak Test", desc: "Air-leak and hydrostatic tests at 1.5× design pressure." },
    { title: "Dye Penetrant & NDT", desc: "Surface NDT on critical pressure-containing components." },
    { title: "Safety Standards", desc: "ATEX, IECEx and CE compliance documented at dispatch." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-pro grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Quality Control" title="Six tests. Three gates. Zero compromise." subtitle="Quality is built in, not inspected in. Hi-Life's three-stage QA gate framework ensures every pump leaves our plant ready to deliver lifetime value in service." />
          <Button asChild className="mt-8 bg-[#2563EB] hover:bg-[#1E40AF] text-white">
            <Link to="/about">Quality Policy <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#2563EB] mt-0.5" />
                <div>
                  <div className="font-display font-semibold text-[#0F172A]">{p.title}</div>
                  <p className="text-xs text-[#0F172A]/65 mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F1F5F9]">
      <div className="container-pro">
        <SectionHeading align="center" eyebrow="Client Voices" title="What plant engineers say about Hi-Life pumps." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-industrial transition-shadow">
              <div className="flex gap-0.5 text-[#F59E0B]">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm text-[#0F172A]/80 leading-relaxed">“{t.text}”</p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-display font-semibold text-[#0F172A]">{t.name}</div>
                <div className="text-xs text-[#0F172A]/60 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BLOG ---------------- */
function BlogSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-pro">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow="Engineering Insights" title="From our engineering desk." subtitle="Application notes, maintenance guides and technology trends from Hi-Life's senior engineering team." />
          <Button asChild variant="outline" className="border-[#0F172A]/15 hover:bg-[#0F172A] hover:text-white">
            <Link to="/blog">All Articles <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.slice(0, 3).map((b) => (
            <Link to="/blog/$slug" params={{ slug: b.slug }} key={b.slug} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-industrial transition-shadow">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A]">
                <img src={b.image} alt={b.title} width={1024} height={640} loading="lazy" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <Badge className="absolute top-3 left-3 bg-[#F59E0B] text-[#0F172A]">{b.category}</Badge>
              </div>
              <div className="p-6">
                <div className="text-xs text-[#0F172A]/55 flex items-center gap-3"><span>{b.date}</span><span>•</span><span>{b.read}</span></div>
                <h3 className="mt-3 font-display text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors">{b.title}</h3>
                <p className="mt-2 text-sm text-[#0F172A]/65 line-clamp-3 leading-relaxed">{b.excerpt}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#2563EB]">Read article <ChevronRight className="h-4 w-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="container-pro grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQs" title="Engineering answers, no jargon." subtitle="Quick answers to the questions our application engineers hear most often. Need something more specific? Talk to our team." />
          <Button asChild className="mt-8 bg-[#0F172A] hover:bg-[#1E293B] text-white">
            <Link to="/contact">Talk to an Engineer</Link>
          </Button>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="border border-slate-200 rounded-xl px-5 bg-slate-50/40">
                <AccordionTrigger className="font-display font-semibold text-left text-[#0F172A] hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-[#0F172A]/70 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Inquiry sent. Our engineering team will respond within 1 business day.");
    }, 900);
  };
  return (
    <section className="py-20 md:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="container-pro relative grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeading light eyebrow="Request a Quote" title="Tell us your fluid. We will engineer the pump." subtitle="Share your fluid properties, flow rate and duty point — our application engineers will respond with a sized, priced solution within one business day." />
          <div className="mt-10 space-y-4">
            <ContactRow icon={<MapPin className="h-5 w-5 text-[#F59E0B]" />} title="Factory & Headquarters" sub={`${company.address.line1}, ${company.address.line2}`} />
            <ContactRow icon={<Phone className="h-5 w-5 text-[#F59E0B]" />} title="Call Sales" sub={company.phone} />
            <ContactRow icon={<Mail className="h-5 w-5 text-[#F59E0B]" />} title="Email" sub={company.email} />
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 h-56">
            <iframe title="Hi-Life Map" className="w-full h-full"
              src="https://www.google.com/maps?q=Vatva+GIDC+Ahmedabad&output=embed" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="glass-dark rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <div className="sm:col-span-2">
              <Label>Product Interest</Label>
              <select name="product" className="w-full mt-1.5 h-11 rounded-md bg-white/5 border border-white/15 text-white px-3 text-sm">
                {products.map((p) => <option key={p.slug} value={p.slug} className="text-[#0F172A]">{p.name}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <Label>Application Details</Label>
              <Textarea name="message" rows={5} required className="mt-1.5 bg-white/5 border-white/15 text-white placeholder:text-white/40" placeholder="Fluid, viscosity, flow rate, discharge head, temperature, materials of construction..." />
            </div>
            <div className="sm:col-span-2 flex flex-wrap gap-3 items-center justify-between mt-2">
              <div className="text-xs text-white/55">By submitting, you agree to be contacted by Hi-Life's engineering team.</div>
              <Button disabled={submitting} type="submit" size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-semibold">
                {submitting ? "Sending..." : <>Send Inquiry <Send className="h-4 w-4 ml-1.5" /></>}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex gap-3.5 items-start">
      <div className="h-11 w-11 rounded-lg bg-white/5 grid place-items-center shrink-0 border border-white/10">{icon}</div>
      <div><div className="font-display font-semibold text-white">{title}</div><div className="text-sm text-white/65 mt-0.5">{sub}</div></div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-wider text-white/60 font-semibold">{children}</label>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}</Label>
      <Input name={name} type={type} required={required} className="mt-1.5 bg-white/5 border-white/15 text-white placeholder:text-white/40 h-11" />
    </div>
  );
}
