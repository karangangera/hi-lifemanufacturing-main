import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube, Instagram, Send } from "lucide-react";
import { company, navLinks, products, industries } from "@/lib/site-data";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white/80">
      <div className="industrial-grid">
        <div className="container-pro py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white grid place-items-center">
                <img src={logo} alt="Hi-Life" className="h-7" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">HI-LIFE</div>
                <div className="text-[10px] tracking-[0.25em] text-[#F59E0B] font-semibold">MANUFACTURING CO.</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              Since 1981, Hi-Life Manufacturing has been India's trusted partner for precision industrial pump
              solutions — engineered in Ahmedabad and exported to 32 countries across the chemical, pharma,
              textile, paint, water-treatment and ceramics industries.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5"><MapPin className="h-4 w-4 text-[#F59E0B] mt-0.5" /><span>{company.address.line1}, {company.address.line2}</span></div>
              <div className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-[#F59E0B]" /><a href={`tel:${company.phone}`} className="hover:text-white">{company.phone}</a></div>
              <div className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-[#F59E0B]" /><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-white text-sm tracking-wide">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-[#F59E0B] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-white text-sm tracking-wide">Products</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}><Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-[#F59E0B] transition-colors">{p.name}</Link></li>
              ))}
            </ul>
            <h4 className="mt-7 font-display font-semibold text-white text-sm tracking-wide">Industries</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industries.slice(0,4).map((i) => (
                <li key={i.slug}><Link to="/industries" className="hover:text-[#F59E0B] transition-colors">{i.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-white text-sm tracking-wide">Newsletter</h4>
            <p className="mt-4 text-sm">Subscribe for engineering insights, product launches and case studies.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="you@company.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
              <Button type="submit" className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A]"><Send className="h-4 w-4" /></Button>
            </form>
            <div className="mt-6 flex items-center gap-3">
              <a href={company.social.linkedin} className="h-9 w-9 grid place-items-center rounded-md bg-white/5 hover:bg-[#F59E0B] hover:text-[#0F172A]"><Linkedin className="h-4 w-4" /></a>
              <a href={company.social.facebook} className="h-9 w-9 grid place-items-center rounded-md bg-white/5 hover:bg-[#F59E0B] hover:text-[#0F172A]"><Facebook className="h-4 w-4" /></a>
              <a href={company.social.youtube} className="h-9 w-9 grid place-items-center rounded-md bg-white/5 hover:bg-[#F59E0B] hover:text-[#0F172A]"><Youtube className="h-4 w-4" /></a>
              <a href={company.social.instagram} className="h-9 w-9 grid place-items-center rounded-md bg-white/5 hover:bg-[#F59E0B] hover:text-[#0F172A]"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pro py-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/55 gap-2">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div>
            Developed by <a href="mailto:codequilltech0130@gmail.com" className="text-[#F59E0B] font-semibold hover:underline">CodeQuill Tech</a>
            <span className="mx-2 text-white/30">•</span>
            <a href="mailto:codequilltech0130@gmail.com" className="hover:text-white">codequilltech0130@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}