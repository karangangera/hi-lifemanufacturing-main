import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, company } from "@/lib/site-data";
import logo from "@/assets/logo.png";

export function Navbar() {
  const { location } = useRouterState();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)]" : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container-pro flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="h-11 w-11 rounded-xl bg-[#0F172A] grid place-items-center shadow-industrial">
            <img src={logo} alt="Hi-Life" className="h-7 w-7 object-contain invert brightness-0" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px] text-[#0F172A]">HI-LIFE</div>
            <div className="text-[10px] tracking-[0.2em] text-[#2563EB] font-semibold">MANUFACTURING</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const active = location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 text-[13.5px] font-medium transition-colors ${
                  active ? "text-[#2563EB]" : "text-[#0F172A]/80 hover:text-[#0F172A]"
                }`}
              >
                {l.label}
                {active && <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[#F59E0B] rounded-full" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex h-10 px-5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-semibold rounded-md shadow-industrial">
            <Link to="/contact">Request Quote <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#0F172A]/10 text-[#0F172A]">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] sm:w-[400px] bg-white p-0">
              <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-[#0F172A] grid place-items-center">
                    <img src={logo} alt="" className="h-5 invert brightness-0" />
                  </div>
                  <span className="font-display font-bold text-[#0F172A]">HI-LIFE</span>
                </div>
                <button onClick={() => setOpen(false)} className="text-slate-500"><X className="h-5 w-5" /></button>
              </div>
              <nav className="p-4 flex flex-col">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-[15px] font-medium text-[#0F172A] hover:bg-slate-50 rounded-md border-b border-slate-100"
                  >
                    {l.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-semibold">
                  <Link to="/contact" onClick={() => setOpen(false)}>Request Quote</Link>
                </Button>
                <div className="mt-6 text-xs text-slate-500 px-3">
                  <div>{company.phone}</div>
                  <div>{company.email}</div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}