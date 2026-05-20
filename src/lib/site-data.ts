import metallic from "@/assets/product-metallic-aodd.jpg";
import nonmetallic from "@/assets/product-nonmetallic.jpg";
import barrel from "@/assets/product-barrel.jpg";
import chemical from "@/assets/product-chemical.jpg";
import transfer from "@/assets/product-transfer.jpg";
import indChemical from "@/assets/industry-chemical.jpg";
import indPharma from "@/assets/industry-pharma.jpg";
import indTextile from "@/assets/industry-textile.jpg";
import indPaint from "@/assets/industry-paint.jpg";
import indWater from "@/assets/industry-water.jpg";
import indCeramics from "@/assets/industry-ceramics.jpg";
import facCnc from "@/assets/factory-cnc.jpg";
import facAssembly from "@/assets/factory-assembly.jpg";
import facTesting from "@/assets/factory-testing.jpg";
import facWarehouse from "@/assets/factory-warehouse.jpg";

export const company = {
  name: "Hi-Life Manufacturing Co. Pvt. Ltd.",
  short: "Hi-Life Manufacturing",
  tagline: "Precision Industrial Pump Manufacturing Solutions",
  established: 1981,
  address: {
    line1: "Plot 412, GIDC Phase IV, Vatva Industrial Estate",
    line2: "Ahmedabad, Gujarat 382445, India",
  },
  phone: "+91 79 2583 4567",
  whatsapp: "+91 98250 12345",
  email: "sales@hilifemanufacturing.in",
  hours: "Mon – Sat, 9:00 AM – 6:30 PM IST",
  social: {
    linkedin: "#",
    facebook: "#",
    youtube: "#",
    instagram: "#",
  },
  certifications: ["ISO 9001:2015", "CE Marked", "ATEX Compliant", "REACH"],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/gallery", label: "Gallery" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  tagline: string;
  description: string;
  applications: string[];
  specs: { label: string; value: string }[];
  features: string[];
};

export const products: Product[] = [
  {
    slug: "metallic-aodd-pumps",
    name: "Metallic AODD Pumps",
    category: "Air Operated Double Diaphragm",
    image: metallic,
    tagline: "Heavy-duty stainless steel & aluminium AODD pumps engineered for abrasive, viscous and shear-sensitive media.",
    description:
      "Hi-Life Metallic AODD Pumps are precision-engineered using investment-cast SS-316, SS-304 and aluminium bodies for demanding chemical, hydrocarbon and food-grade transfer applications. Equipped with a balanced lubrication-free air distribution valve, the pumps deliver dry-run, deadhead and self-priming capability with flow rates up to 1050 LPM and discharge pressures up to 8.6 bar.",
    applications: [
      "Chemical and solvent transfer",
      "Resin and adhesive handling",
      "Hydrocarbon and lube oil dispensing",
      "Mining slurry and tailings",
      "Food-grade syrup and viscous fluids",
    ],
    specs: [
      { label: "Port Sizes", value: '1/4" to 3" (BSP / ANSI / DIN)' },
      { label: "Max Flow", value: "1050 LPM" },
      { label: "Max Discharge", value: "8.6 bar (125 psi)" },
      { label: "Max Solids", value: "9.5 mm" },
      { label: "Wetted Materials", value: "SS-316, SS-304, Aluminium, Cast Iron" },
      { label: "Diaphragm", value: "PTFE / Santoprene / Neoprene / Buna-N / EPDM / Viton" },
    ],
    features: [
      "Lubrication-free, stall-free air valve",
      "Bolted construction — no leakage",
      "Self-priming up to 6.5 m",
      "Dry-run and deadhead capability",
      "ATEX-compliant grounding lugs",
    ],
  },
  {
    slug: "non-metallic-aodd-pumps",
    name: "Non-Metallic AODD Pumps",
    category: "Engineered Polymer Bodies",
    image: nonmetallic,
    tagline: "PP, PVDF and conductive polymer AODD pumps for aggressive acids, alkalies and ultra-pure chemistries.",
    description:
      "Solid-block machined polypropylene and PVDF construction ensures unmatched chemical resistance for the handling of concentrated mineral acids, caustics and ultra-pure DI water. Conductive PP variants meet ATEX Zone 1 grounding requirements for solvent-laden environments in pharma and electronics manufacturing.",
    applications: [
      "Concentrated H2SO4, HCl, HF, NaOH transfer",
      "Electroplating bath circulation",
      "Ultra-pure DI / RO water handling",
      "Photoresist and semiconductor chemistries",
      "Effluent and ETP dosing",
    ],
    specs: [
      { label: "Port Sizes", value: '1/2" to 3"' },
      { label: "Max Flow", value: "880 LPM" },
      { label: "Max Discharge", value: "8.4 bar" },
      { label: "Wetted Materials", value: "PP, PVDF, Conductive PP" },
      { label: "Diaphragm", value: "PTFE-backed Santoprene, FFKM, EPDM" },
    ],
    features: [
      "Solid-block CNC machined wet end",
      "Bolted (non-glued) construction",
      "Static-dissipative (ATEX) option",
      "Integrated check ball seats",
      "ANSI flange compatible",
    ],
  },
  {
    slug: "barrel-pumps",
    name: "Barrel & Drum Pumps",
    category: "Container Emptying Systems",
    image: barrel,
    tagline: "Pneumatic and electric drum-emptying solutions for 200 L barrels, IBC totes and bulk containers.",
    description:
      "Hi-Life Barrel Pumps are engineered for clean, fast and contamination-free transfer from 60–220 L drums and 1000 L IBC totes. Modular pump tubes in SS-316, PP and PVDF support a vast range of chemistries from food syrups to concentrated acids, with pneumatic or 1-phase electric drive options.",
    applications: [
      "Drum-to-tank chemical transfer",
      "Solvent dispensing in paint shops",
      "Edible oil and food syrup filling",
      "Lab and pilot-plant decanting",
      "IBC tote emptying",
    ],
    specs: [
      { label: "Tube Length", value: "700 / 1000 / 1200 mm" },
      { label: "Max Flow", value: "180 LPM" },
      { label: "Max Head", value: "22 m" },
      { label: "Drive", value: "Pneumatic 0.6 HP / Electric 1 HP" },
    ],
    features: [
      "Tool-less tube changeover",
      "Sealed mechanical seal option",
      "Explosion-proof motor option",
      "Suction strainer included",
    ],
  },
  {
    slug: "chemical-process-pumps",
    name: "Chemical Process Pumps",
    category: "Centrifugal Process",
    image: chemical,
    tagline: "ANSI / DIN back-pull-out horizontal centrifugal process pumps for continuous chemical service.",
    description:
      "Hi-Life Chemical Process Pumps follow ANSI B73.1 and DIN 24256 dimensional standards with a heavy-duty power-end and replaceable wear rings. Hydraulic optimisation through CFD analysis ensures high efficiency and low NPSHr across a wide flow band, making them ideal for chemical, petrochemical and refinery duties.",
    applications: [
      "Process water and dilute acid circulation",
      "Cooling tower booster duty",
      "Reactor feed and product transfer",
      "Caustic and brine handling",
    ],
    specs: [
      { label: "Capacity", value: "Up to 1200 m³/h" },
      { label: "Head", value: "Up to 160 m" },
      { label: "Temperature", value: "-40°C to +260°C" },
      { label: "MOC", value: "CD4MCu, SS-316, Alloy 20, Hastelloy C" },
      { label: "Seal", value: "Single / Double mechanical seal API 682 Plan 11/52/53" },
    ],
    features: [
      "Back pull-out maintenance",
      "Replaceable case wear rings",
      "Heavy-duty oil-bath bearing frame",
      "API 610 seal flush plans optional",
    ],
  },
  {
    slug: "industrial-transfer-pumps",
    name: "Industrial Transfer Pumps",
    category: "Fluid Handling Systems",
    image: transfer,
    tagline: "Skid-mounted transfer systems with controls, instrumentation and turnkey commissioning.",
    description:
      "Hi-Life Industrial Transfer Skids integrate AODD or centrifugal pumps with VFD drives, mass flow meters, pressure and level instrumentation, and PLC-based control panels. Pre-fabricated, fully tested skids reduce site installation time by up to 70% and deliver consistent performance across batch and continuous processes.",
    applications: [
      "Solvent recovery loops",
      "Tank farm loading / unloading",
      "Inline blending and dosing",
      "Effluent treatment plant integration",
    ],
    specs: [
      { label: "Capacity", value: "Custom, up to 600 m³/h" },
      { label: "Control", value: "Siemens / Allen-Bradley PLC + HMI" },
      { label: "Instrumentation", value: "Coriolis / Mag flow, RTD, Pressure" },
      { label: "Certification", value: "ATEX / IECEx zone-rated options" },
    ],
    features: [
      "Plug-and-play factory tested skid",
      "SCADA-ready Modbus / Profinet",
      "Stainless steel manifold piping",
      "Custom enclosure for hazardous areas",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  image: string;
  short: string;
  description: string;
  fluids: string[];
  recommended: string[];
};

export const industries: Industry[] = [
  {
    slug: "chemical",
    name: "Chemical Industry",
    image: indChemical,
    short: "Aggressive acid, solvent and reactor-feed transfer with zero-leak guarantee.",
    description:
      "From bulk acid offloading to inline reactor dosing, our metallic and non-metallic AODD pumps deliver leak-free, ATEX-compliant performance in some of India's most demanding chemical complexes — including specialty chemicals, agrochemicals, dyes and intermediates.",
    fluids: ["Sulphuric acid", "Caustic soda", "Solvents (MEK, toluene)", "Resins and adhesives"],
    recommended: ["Metallic AODD Pumps", "Non-Metallic AODD Pumps", "Chemical Process Pumps"],
  },
  {
    slug: "pharma",
    name: "Pharmaceutical Industry",
    image: indPharma,
    short: "cGMP-compliant transfer of APIs, intermediates and ultra-pure water.",
    description:
      "Hi-Life supplies cGMP-grade SS-316L pumps with surface roughness Ra ≤ 0.4 µm, full material traceability and EHEDG-style hygienic clamps. Validated for API transfer, solvent dispensing and DI / WFI loop service across more than 180 pharma facilities in India and abroad.",
    fluids: ["APIs and intermediates", "Solvents", "WFI / DI water", "Buffer solutions"],
    recommended: ["Metallic AODD (Sanitary)", "Barrel Pumps", "Chemical Process Pumps"],
  },
  {
    slug: "textile",
    name: "Textile & Dyeing",
    image: indTextile,
    short: "Reliable dye, pigment paste and finishing chemical transfer at any viscosity.",
    description:
      "Hi-Life pumps move pigment pastes, reactive dyes and finishing chemicals through jet dyeing machines, soft-flow units and stenter padders. Diaphragm options handle shear-sensitive pastes without breakdown, while corrosion-resistant wet ends extend service life in sour-acid environments.",
    fluids: ["Reactive and disperse dyes", "Pigment pastes", "Sodium hydrosulphite", "Softeners"],
    recommended: ["Non-Metallic AODD", "Metallic AODD", "Industrial Transfer Pumps"],
  },
  {
    slug: "paint",
    name: "Paint, Inks & Coatings",
    image: indPaint,
    short: "Color-stable transfer of resins, pigments and high-solid coatings.",
    description:
      "Solvent-borne and water-borne coatings demand pumps that deliver low-shear, color-stable transfer. Our diaphragm pumps handle high-viscosity alkyds, polyurethanes and pigment dispersions while bonded conductive bodies meet ATEX requirements in spray booths and tinting rooms.",
    fluids: ["Alkyd & PU resins", "Pigment dispersions", "Solvent thinners", "Inks"],
    recommended: ["Metallic AODD Pumps", "Barrel Pumps"],
  },
  {
    slug: "water-treatment",
    name: "Water & Effluent Treatment",
    image: indWater,
    short: "Polymer dosing, sludge transfer and reuse-loop circulation systems.",
    description:
      "Hi-Life ETP / STP pumps are workhorses in municipal and industrial water treatment. From PAC and alum dosing to thickened sludge transfer at 4% solids, our pumps maintain uptime in the harshest, grit-laden waters of CETPs across Gujarat, Maharashtra and Tamil Nadu.",
    fluids: ["Polyaluminium chloride", "Lime slurry", "Activated sludge", "Treated effluent"],
    recommended: ["Non-Metallic AODD", "Industrial Transfer Pumps"],
  },
  {
    slug: "ceramics",
    name: "Ceramics & Tiles",
    image: indCeramics,
    short: "Abrasion-resistant slurry, glaze and ink-jet decoration line pumps.",
    description:
      "Hi-Life ceramic-duty pumps tackle 1.6 SG silica slurries and abrasive glazes with hardened wear parts and tungsten carbide check balls. We supply Morbi's tile capital and ceramic clusters in Gujarat, Andhra and abroad with proven 18+ month MTBF on slurry duty.",
    fluids: ["Body slip", "Glaze suspensions", "Digital decoration inks"],
    recommended: ["Metallic AODD", "Chemical Process Pumps"],
  },
];

export const infrastructure = [
  {
    title: "Precision Machining Bay",
    image: facCnc,
    description:
      "12 CNC turning and machining centers from Mazak and DMG Mori run three shifts to deliver pump castings, shafts and impellers to micron-level tolerances.",
    metrics: [
      { label: "CNC Machines", value: "12" },
      { label: "Tolerance", value: "±5 µm" },
      { label: "Shifts", value: "3 / day" },
    ],
  },
  {
    title: "Assembly & Integration Hall",
    image: facAssembly,
    description:
      "Cell-based assembly lines with 5S workstations, torque-controlled fasteners and digital travelers ensure every pump is built to specification and traceable by serial number.",
    metrics: [
      { label: "Floor Area", value: "8,400 m²" },
      { label: "Output", value: "1,200 pumps / mo" },
      { label: "Lines", value: "6 cells" },
    ],
  },
  {
    title: "Performance Test Lab",
    image: facTesting,
    description:
      "Closed-loop hydraulic test rigs verify Q-H curves to ISO 9906 Grade 2B. Every pump undergoes an air-leak and hydro-test before shipment with a digital test certificate.",
    metrics: [
      { label: "Max Flow Rig", value: "1500 LPM" },
      { label: "Test Pressure", value: "16 bar" },
      { label: "Std", value: "ISO 9906" },
    ],
  },
  {
    title: "Export Warehouse",
    image: facWarehouse,
    description:
      "An 11-meter-clearance warehouse with two 5-ton EOT cranes handles export packing, fumigated wooden crates and container stuffing for shipments to 32 countries.",
    metrics: [
      { label: "Storage", value: "4,000 m²" },
      { label: "Countries", value: "32" },
      { label: "On-time Ship", value: "98.4%" },
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Precision Engineering",
    desc: "Investment-cast bodies machined on Mazak and DMG Mori centers to ±5 µm tolerances, validated by CMM inspection on every critical dimension.",
  },
  {
    title: "ISO 9001:2015 Quality",
    desc: "A documented QMS, full material traceability and digital test certificates accompany every pump leaving our Ahmedabad facility.",
  },
  {
    title: "Advanced Machinery",
    desc: "CNC turning, 5-axis milling, robotic welding cells and a fully instrumented hydraulic test lab — vertically integrated for control and speed.",
  },
  {
    title: "Quality Assurance",
    desc: "Three-stage QA gates: incoming raw material, in-process dimensional, and final hydraulic + air-leak testing to ISO 9906 Grade 2B.",
  },
  {
    title: "Global Export Reach",
    desc: "Exporting to 32 countries across the Middle East, Africa, South-East Asia, Europe and Latin America with bonded export packing.",
  },
  {
    title: "Expert Engineering Team",
    desc: "120+ engineers and technicians, including 18 designers using SolidWorks, ANSYS CFD and Inventor for application-specific pump selection.",
  },
];

export const processSteps = [
  { step: "01", title: "Application Engineering", desc: "Our team analyzes fluid properties, duty point, NPSH, viscosity and chemistry to specify the optimum pump configuration." },
  { step: "02", title: "Design & Simulation", desc: "SolidWorks 3D modelling and ANSYS CFD/FEA simulation validate hydraulic and structural performance before a single chip is cut." },
  { step: "03", title: "Precision Manufacturing", desc: "Investment casting, CNC machining and robotic welding in our vertically integrated Ahmedabad plant." },
  { step: "04", title: "Assembly", desc: "Cell-based assembly with torque-controlled tooling, digital travelers and 100% serial-number traceability." },
  { step: "05", title: "Performance Testing", desc: "Closed-loop hydraulic, air-leak and dye-penetration tests certified to ISO 9906 Grade 2B." },
  { step: "06", title: "Packing & Dispatch", desc: "Fumigated wooden export crates, plug-and-play documentation and on-time delivery to 32 countries." },
];

export const stats = [
  { value: "44+", label: "Years of Engineering" },
  { value: "32", label: "Export Countries" },
  { value: "8,400", label: "m² Manufacturing Floor" },
  { value: "12,000+", label: "Pumps Shipped / Year" },
];

export const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Plant Head, Aarti Industries",
    rating: 5,
    text: "Hi-Life AODD pumps have been running on our chlorinated solvent unloading bay for over three years with zero diaphragm failure. The build quality is on par with European OEMs at a fraction of the cost.",
  },
  {
    name: "Dr. Anil Verma",
    role: "Director Engineering, Cipla",
    rating: 5,
    text: "Cleanability, material traceability and on-time delivery — Hi-Life delivers on all three. Their sanitary AODD pumps are now our standard for API transfer in two of our manufacturing sites.",
  },
  {
    name: "Mohammed Al-Rashid",
    role: "Procurement Manager, GulfChem UAE",
    rating: 5,
    text: "We have imported over 240 Hi-Life pumps for our chemical distribution business. The service support and spare-part availability is unmatched in this segment.",
  },
  {
    name: "Vikram Patel",
    role: "GM Operations, Asian Paints",
    rating: 5,
    text: "From resin transfer to tinting bases, Hi-Life pumps have replaced legacy diaphragm pumps and reduced our maintenance downtime by nearly 40%.",
  },
];

export const blog = [
  {
    slug: "complete-guide-to-aodd-pumps",
    title: "A Complete Engineering Guide to AODD Pumps",
    excerpt: "Understand the working principle, application envelope, materials selection and sizing methodology for air-operated double diaphragm pumps.",
    date: "March 18, 2026",
    category: "Engineering",
    image: metallic,
    read: "8 min read",
  },
  {
    slug: "chemical-transfer-best-practices",
    title: "Best Practices for Aggressive Chemical Transfer Systems",
    excerpt: "From material compatibility tables to ATEX zoning, learn how to design a safe and reliable chemical transfer skid for Indian process plants.",
    date: "March 04, 2026",
    category: "Process Safety",
    image: nonmetallic,
    read: "10 min read",
  },
  {
    slug: "pump-maintenance-schedule",
    title: "Preventive Maintenance Schedule for Industrial Diaphragm Pumps",
    excerpt: "A practical 30/90/180-day PM schedule that has extended MTBF for our customers in chemical and pharma plants by 2.4x.",
    date: "February 22, 2026",
    category: "Maintenance",
    image: barrel,
    read: "6 min read",
  },
  {
    slug: "industrial-automation-pumping",
    title: "Industrial Automation in Modern Pumping Systems",
    excerpt: "VFDs, Industry 4.0 sensors and SCADA integration — how Hi-Life builds smart, connected pumping skids for the digital factory.",
    date: "February 10, 2026",
    category: "Automation",
    image: transfer,
    read: "7 min read",
  },
  {
    slug: "fluid-handling-technology-2026",
    title: "Fluid Handling Technology Trends for 2026",
    excerpt: "From magnetic-drive sealless pumps to AI-driven predictive maintenance — the trends reshaping fluid handling in India.",
    date: "January 28, 2026",
    category: "Trends",
    image: chemical,
    read: "9 min read",
  },
];

export const faqs = [
  {
    q: "What is the maximum viscosity Hi-Life AODD pumps can handle?",
    a: "Our metallic AODD range comfortably handles fluids up to 15,000 cP with appropriate ball/seat configuration. For higher viscosities, our application engineering team can recommend a derated size or a positive displacement alternative.",
  },
  {
    q: "Are Hi-Life pumps ATEX certified for hazardous areas?",
    a: "Yes. We offer ATEX Zone 1 and Zone 2 compliant configurations with grounded conductive bodies, certified air valves and statically dissipative diaphragms. IECEx documentation is provided for export orders.",
  },
  {
    q: "What is the standard delivery lead time?",
    a: "Stock items ship within 3–5 working days from Ahmedabad. Engineered-to-order skids and special MOC pumps typically ship within 6–10 weeks after PO confirmation.",
  },
  {
    q: "Do you provide on-site commissioning and training?",
    a: "Yes. Our service network covers all 28 Indian states and provides on-site commissioning, operator training and annual maintenance contracts across major industrial clusters.",
  },
  {
    q: "What warranty do you offer on Hi-Life pumps?",
    a: "All Hi-Life pumps carry a standard 18-month-from-dispatch or 12-month-from-commissioning warranty (whichever expires first) on materials and workmanship.",
  },
  {
    q: "Can you customize the wetted materials for our chemistry?",
    a: "Absolutely. We routinely supply pumps in CD4MCu, Alloy 20, Hastelloy C-276, PVDF, conductive PP and FFKM diaphragms based on the specific media, temperature and pressure profile.",
  },
];