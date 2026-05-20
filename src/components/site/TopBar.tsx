import { Mail, Phone, ShieldCheck, Truck, Globe2, Linkedin, Facebook, Youtube, Instagram } from "lucide-react";
import { company } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="hidden md:block bg-[#0F172A] text-white/80 text-[12.5px]">
      <div className="container-pro flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#F59E0B]" /> ISO 9001:2015 Certified</span>
          <span className="inline-flex items-center gap-1.5"><Globe2 className="h-3.5 w-3.5 text-[#F59E0B]" /> Export to 32 Countries</span>
          <span className="inline-flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-[#F59E0B]" /> Fast Delivery</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:text-white"><Mail className="h-3.5 w-3.5" />{company.email}</a>
          <a href={`tel:${company.phone.replace(/\s/g,"")}`} className="inline-flex items-center gap-1.5 hover:text-white"><Phone className="h-3.5 w-3.5" />{company.phone}</a>
          <span className="flex items-center gap-2 pl-3 border-l border-white/15">
            <a href={company.social.linkedin} aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-3.5 w-3.5" /></a>
            <a href={company.social.facebook} aria-label="Facebook" className="hover:text-white"><Facebook className="h-3.5 w-3.5" /></a>
            <a href={company.social.youtube} aria-label="YouTube" className="hover:text-white"><Youtube className="h-3.5 w-3.5" /></a>
            <a href={company.social.instagram} aria-label="Instagram" className="hover:text-white"><Instagram className="h-3.5 w-3.5" /></a>
          </span>
        </div>
      </div>
    </div>
  );
}