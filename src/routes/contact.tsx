import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products, company } from "@/lib/site-data";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact Hi-Life Manufacturing | Request Pump Quote" }, { name: "description", content: "Talk to Hi-Life's pump engineers. Get a quote within one business day." }] }),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title="Talk to a Hi-Life pump engineer." subtitle="Share your fluid properties, duty point and application — we'll respond with a sized, priced solution within one business day." breadcrumb="Contact" />
      <section className="py-20 container-pro grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4">
          {[
            { icon: MapPin, t: "Factory & HQ", s: `${company.address.line1}, ${company.address.line2}` },
            { icon: Phone, t: "Phone", s: company.phone },
            { icon: Mail, t: "Email", s: company.email },
            { icon: Clock, t: "Working Hours", s: company.hours },
          ].map(({ icon: I, t, s }) => (
            <div key={t} className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200">
              <div className="h-11 w-11 rounded-lg bg-[#2563EB]/10 grid place-items-center text-[#2563EB]"><I className="h-5 w-5" /></div>
              <div><div className="font-display font-semibold text-[#0F172A]">{t}</div><div className="text-sm text-[#0F172A]/65 mt-0.5">{s}</div></div>
            </div>
          ))}
          <div className="rounded-xl overflow-hidden h-72 border border-slate-200">
            <iframe title="map" className="w-full h-full" src="https://www.google.com/maps?q=Vatva+GIDC+Ahmedabad&output=embed" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <form onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
              setTimeout(() => { setSubmitting(false); (e.target as HTMLFormElement).reset(); toast.success("Inquiry received. Our engineering team will respond within 1 business day."); }, 800);
            }} className="rounded-2xl bg-white border border-slate-200 p-7 grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-sm">
            <div className="sm:col-span-2"><h2 className="font-display text-2xl font-bold text-[#0F172A]">Inquiry Form</h2><p className="text-sm text-[#0F172A]/65 mt-1">All fields marked * are required.</p></div>
            <Input name="name" placeholder="Full Name *" required className="h-11" />
            <Input name="company" placeholder="Company *" required className="h-11" />
            <Input name="email" type="email" placeholder="Email *" required className="h-11" />
            <Input name="phone" type="tel" placeholder="Phone *" required className="h-11" />
            <select name="product" className="sm:col-span-2 h-11 rounded-md border border-slate-200 px-3 text-sm bg-white">
              <option value="">Product Interest</option>
              {products.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
            </select>
            <Textarea name="message" rows={6} placeholder="Describe your application: fluid, viscosity, flow rate, head, temperature, materials..." required className="sm:col-span-2" />
            <Button disabled={submitting} type="submit" size="lg" className="sm:col-span-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-semibold">
              {submitting ? "Sending..." : <>Send Inquiry <Send className="h-4 w-4 ml-1.5" /></>}
            </Button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}