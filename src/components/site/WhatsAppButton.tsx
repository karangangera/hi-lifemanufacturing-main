import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site-data";

export function WhatsAppButton() {
  const num = company.whatsapp.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${num}?text=Hello%20Hi-Life%20team%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumps.`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-industrial hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
    </a>
  );
}