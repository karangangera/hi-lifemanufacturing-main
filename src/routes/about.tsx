import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { stats, company } from "@/lib/site-data";
import { Award, Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-factory.jpg";
import assembly from "@/assets/factory-assembly.jpg";
import cnc from "@/assets/factory-cnc.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About Hi-Life Manufacturing | Industrial Pump Manufacturer Since 1981" }, { name: "description", content: "Hi-Life Manufacturing is an ISO 9001:2015 certified Indian pump manufacturer based in Ahmedabad, exporting to 32 countries since 1981." }] }),
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About Us" title="Engineering trust in fluid handling since 1981." subtitle="Hi-Life Manufacturing is an Indian-owned precision pump manufacturer combining vertically integrated production, deep application know-how, and a global aftermarket footprint." image={hero} breadcrumb="About" />

      <section className="py-20 md:py-28">
        <div className="container-pro grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-[#0F172A]/80 text-[15px] leading-[1.8]">
            <SectionHeading eyebrow="Our Story" title="From a single lathe to a global engineering brand." />
            <p>
              Founded in 1981 in Ahmedabad's Vatva industrial estate, Hi-Life Manufacturing began as a five-person
              machine shop building rugged centrifugal pumps for the surrounding chemical industry. Four decades on,
              we operate one of India's most respected pump manufacturing facilities — vertically integrated across
              casting, machining, welding, assembly and hydraulic testing.
            </p>
            <p>
              Today, Hi-Life pumps move chemicals, pharmaceutical APIs, dyes, paints, slurries and treated effluent
              in more than 4,200 plants across India and exports to 32 countries. Every pump that leaves our facility
              carries forward a four-decade legacy of precision engineering, accountable workmanship and on-time delivery.
            </p>
            <p>
              Our team of 120+ engineers and technicians — including 18 designers running SolidWorks, ANSYS CFD and
              Inventor — partners with customers to engineer pumps that match the chemistry, viscosity, NPSH and
              lifecycle-cost realities of their process, not just a catalog data sheet.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img src={assembly} alt="Assembly hall" className="rounded-2xl h-64 w-full object-cover shadow-industrial" loading="lazy" />
            <img src={cnc} alt="CNC machining" className="rounded-2xl h-64 w-full object-cover shadow-industrial mt-10" loading="lazy" />
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-[#0F172A] text-white p-5 text-center">
                  <div className="font-display text-2xl font-bold text-[#F59E0B]">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider mt-1 text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container-pro grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To engineer dependable fluid-handling solutions that improve process efficiency, plant safety and operating cost for our customers worldwide." },
            { icon: Eye, title: "Our Vision", desc: "To be the most trusted Indian-origin pump brand for the global chemical, pharma and process industries by 2030." },
            { icon: Heart, title: "Our Values", desc: "Engineering integrity, customer-first thinking, accountability for quality, and continuous improvement through Kaizen." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-slate-50/60 border border-slate-200 p-7">
              <div className="h-12 w-12 rounded-xl bg-[#2563EB] text-white grid place-items-center"><Icon className="h-5 w-5" /></div>
              <h3 className="font-display font-bold text-xl text-[#0F172A] mt-5">{title}</h3>
              <p className="text-sm text-[#0F172A]/65 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-pro">
          <SectionHeading align="center" eyebrow="Milestones" title="A 44-year journey of engineering firsts." />
          <div className="mt-14 relative border-l-2 border-[#2563EB]/30 ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:flex md:gap-6">
            {[
              { y: "1981", t: "Founded in Ahmedabad", d: "Started as a 5-person machine shop in Vatva GIDC." },
              { y: "1992", t: "First AODD pump", d: "Designed India's first locally produced metallic AODD pump." },
              { y: "2004", t: "ISO 9001 Certified", d: "Quality Management System certified to international standards." },
              { y: "2011", t: "Export Milestone", d: "Crossed exports to 15 countries across Middle East & Africa." },
              { y: "2018", t: "8,400 m² Facility", d: "Inaugurated vertically integrated manufacturing campus." },
              { y: "2024", t: "CFD Lab Established", d: "Launched in-house ANSYS CFD and FEA design center." },
            ].map((m, i) => (
              <div key={m.y} className="pl-6 md:pl-0 md:pt-6 pb-10 md:pb-0 relative flex-1">
                <div className="absolute -left-[7px] md:left-auto md:-top-[7px] h-3 w-3 rounded-full bg-[#F59E0B] ring-4 ring-[#F59E0B]/20" />
                <div className="font-display text-3xl font-bold text-[#2563EB]">{m.y}</div>
                <div className="font-display font-semibold text-[#0F172A] mt-1">{m.t}</div>
                <div className="text-sm text-[#0F172A]/65 mt-2 max-w-xs">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F172A] text-white">
        <div className="container-pro text-center">
          <Award className="h-10 w-10 mx-auto text-[#F59E0B]" />
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-4">Certified, Audited & Trusted Globally</h3>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {company.certifications.map((c) => (
              <span key={c} className="px-4 py-2 rounded-md border border-white/15 text-sm text-white/85">{c}</span>
            ))}
          </div>
          <Button asChild className="mt-10 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-semibold">
            <Link to="/contact">Partner with Hi-Life <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}