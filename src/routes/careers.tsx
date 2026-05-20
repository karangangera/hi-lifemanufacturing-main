import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

const openings = [
  { title: "Senior Application Engineer", dept: "Engineering", loc: "Ahmedabad", type: "Full-time", desc: "Lead pump sizing, selection and customer engineering reviews for chemical and pharma accounts." },
  { title: "CFD Design Engineer", dept: "R&D", loc: "Ahmedabad", type: "Full-time", desc: "Hydraulic and FEA simulation of new pump designs in ANSYS Fluent and Mechanical." },
  { title: "Quality Control Inspector", dept: "QA", loc: "Ahmedabad", type: "Full-time", desc: "CMM, NDT and hydraulic test verification on production pumps." },
  { title: "Export Sales Manager – MENA", dept: "Sales", loc: "Dubai / Ahmedabad", type: "Full-time", desc: "Develop channel partners and key accounts across Middle East and North Africa." },
  { title: "Service Engineer", dept: "Aftermarket", loc: "Mumbai / Chennai", type: "Full-time", desc: "On-site commissioning, training and AMC execution for industrial customers." },
];

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({ meta: [{ title: "Careers at Hi-Life Manufacturing" }] }),
});

function CareersPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Careers" title="Build a career in precision industrial engineering." subtitle="Hi-Life is hiring engineers, technicians and sales talent across India and overseas. Help us engineer the next generation of fluid handling solutions." breadcrumb="Careers" />
      <section className="py-20 container-pro">
        <h2 className="font-display text-3xl font-bold text-[#0F172A]">Current Openings</h2>
        <div className="mt-8 space-y-4">
          {openings.map((o) => (
            <div key={o.title} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-industrial transition-shadow">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-[#0F172A]/60">
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{o.dept}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{o.loc}</span>
                  <span className="px-2 py-0.5 rounded bg-[#F59E0B]/15 text-[#92400E] font-semibold">{o.type}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mt-2">{o.title}</h3>
                <p className="text-sm text-[#0F172A]/65 mt-1">{o.desc}</p>
              </div>
              <Button asChild className="bg-[#0F172A] hover:bg-[#1E293B] text-white"><Link to="/contact">Apply Now <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}