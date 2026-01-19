"use client";

import { 
  ArrowLeft, 
  CheckCircle2, 
  Lightbulb, 
  XCircle, 
  Apple, 
  Coffee, 
  Leaf, 
  Drumstick,
  Ban,
  Trash2,
  Cigarette
} from "lucide-react";
import { useRouter } from "next/navigation";

interface MaterialInfo {
  id: string;
  title: string;
  image: string;
  description: string;
  steps: string[];
  destiny: string;
  colorClass: string;
  advice: string;
}

// --- DATOS SECCIÓN 1: POR MATERIAL (Conserva tus constantes de datos) ---
const bebidas: MaterialInfo[] = [
  {
    id: "pet-1",
    title: "Botellas de Agua/Gaseosa",
    image: "./Segregacion/Botellas.png", 
    description: "Plástico PET altamente reciclable. Debe entregarse limpio y compactado.",
    steps: ["Enjuagar bien", "Secar o escurrir", "Aplastar verticalmente", "Tapa por separado"],
    destiny: "TACHO BLANCO",
    colorClass: "bg-white text-slate-900",
    advice: "La compactación vertical maximiza la eficiencia del almacenamiento en la base."
  },
  // ... (Agrega aquí el resto de tus materiales: empaques, ciencia, mantenimiento, comida, higiene)
];

// --- DATOS SECCIÓN 2: POR COLOR (ESTRUCTURA NUEVA) ---

export default function ManualSegregacionPage() {
  const router = useRouter();

  // Función para renderizar el grid de la Sección I
  const renderGrid = (data: MaterialInfo[]) => (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {data.map((item) => (
        <div key={item.id} className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col shadow-xl">
          <div className="w-full h-80 relative overflow-hidden bg-white/5">
            <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl ${item.colorClass}`}>
              {item.destiny}
            </div>
          </div>
          <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors uppercase">{item.title}</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">{item.description}</p>
            <div className="space-y-2 mb-6 grow">
              {item.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span className="text-[13px] font-medium">{step}</span>
                </div>
              ))}
            </div>
            <div className="relative group/advice">
              <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 p-3 rounded-2xl cursor-help transition-all">
                <Lightbulb size={16} className="text-yellow-400" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Ver Consejo Técnico</span>
              </div>
              <div className="absolute bottom-full left-0 mb-2 w-full p-4 bg-slate-800 border border-emerald-500/30 rounded-2xl opacity-0 invisible group-hover/advice:opacity-100 group-hover/advice:visible transition-all z-10 shadow-2xl">
                <p className="text-[11px] text-emerald-100 leading-snug">{item.advice}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0f18] text-white p-6 md:p-12 font-sans selection:bg-emerald-500/30">
      
      {/* HEADER PRINCIPAL */}
      <div className="max-w-7xl mx-auto mb-16">
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-all mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-sm">Volver al inicio</span>
        </button>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-emerald-500 uppercase">
          Manual de Segregación ECAMP
        </h1>
      </div>

      {/* ==========================================
          SECCIÓN I: SEGREGACIÓN POR MATERIAL
          ========================================== */}
      <div id="seccion-material" className="max-w-7xl mx-auto mb-14 p-8 bg-emerald-500/10 rounded-[3rem] border border-emerald-500/20 scroll-mt-24">
        <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-400">I. Segregación por Material</h2>
      </div>

      <div id="material-1" className="scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase max-w-7xl mx-auto mb-8 ml-4">1. Bebidas y Envases Alimentarios</h3>
        {renderGrid(bebidas)}
      </div>

      {/* ... (Repetir para material-2 al material-6) */}


      {/* ==========================================
          SECCIÓN II: SEGREGACIÓN POR COLOR
          ========================================== */}
      <div id="seccion-color" className="max-w-7xl mx-auto mb-14 mt-32 p-8 bg-blue-500/10 rounded-[3rem] border border-blue-500/20 scroll-mt-24 shadow-2xl">
        <h2 className="text-3xl font-black uppercase tracking-widest text-blue-400">II. Segregación por Color</h2>
      </div>

      {/* --- DISEÑO NUEVO TACHO MARRÓN --- */}
      <div className="max-w-7xl mx-auto mb-24 bg-amber-900/5 border border-amber-800/20 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-amber-600 uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-12 bg-amber-600 rounded-full"></span>
            Tacho MARRÓN: Residuos Orgánicos
          </h3>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-5xl">
            En este contenedor se depositan todos los desechos de origen biológico que pueden degradarse naturalmente. 
            Su correcta segregación es vital para evitar contaminación por patógenos en la base.
          </p>
        </div>

        {/* Bloques Informativos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* ¿Qué ingresa? */}
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-widest mb-8 text-xl">
              <CheckCircle2 size={28} />
              ¿Qué ingresa?
            </h4>
            <div className="space-y-6">
              <div>
                <span className="text-emerald-400/80 font-bold text-xs uppercase tracking-tighter block mb-1">Desechos de cocina</span>
                <p className="text-slate-300 text-sm">Todo tipo de sobrantes de comida procesada, restos de carnes rojas, aves, huesos y cáscaras de huevo <span className="text-emerald-400 font-bold">(sin líquidos)</span>.</p>
              </div>
              <div>
                <span className="text-emerald-400/80 font-bold text-xs uppercase tracking-tighter block mb-1">Frutas y vegetales</span>
                <p className="text-slate-300 text-sm">Cáscaras, semillas y restos de verduras crudas o cocidas.</p>
              </div>
              <div>
                <span className="text-emerald-400/80 font-bold text-xs uppercase tracking-tighter block mb-1">Residuos de jardín</span>
                <p className="text-slate-300 text-sm">Hojas secas, flores marchitas y restos de podas pequeñas.</p>
              </div>
              <div>
                <span className="text-emerald-400/80 font-bold text-xs uppercase tracking-tighter block mb-1">Insumos de cafetería</span>
                <p className="text-slate-300 text-sm">Granos y posos de café usados <span className="text-emerald-400 font-bold">(sin líquidos)</span>.</p>
              </div>
            </div>
          </div>

          {/* ¿Qué NO ingresa? */}
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-red-400 font-black uppercase tracking-widest mb-8 text-xl">
              <XCircle size={28} />
              ¿Qué NO ingresa?
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <span className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl text-xs font-bold text-red-300 uppercase text-center">Plásticos</span>
                <span className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl text-xs font-bold text-red-300 uppercase text-center">Vidrios</span>
                <span className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl text-xs font-bold text-red-300 uppercase text-center">Metales</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl text-xs font-bold text-red-300 uppercase text-center">Servilletas</span>
                <span className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl text-xs font-bold text-red-300 uppercase text-center">Colillas</span>
                <span className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl text-xs font-bold text-red-300 uppercase text-center">Compostables</span>
              </div>
            </div>
            <p className="mt-8 text-slate-500 text-xs italic leading-tight">
              Nota: La presencia de materiales no biológicos invalida el proceso de tratamiento de residuos orgánicos en la Antártida.
            </p>
          </div>
        </div>

        {/* Fila de Iconos representativos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-6 bg-amber-600/10 rounded-3xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
              <Apple size={40} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Frutas</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-6 bg-amber-600/10 rounded-3xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
              <Drumstick size={40} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Cárnicos</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-6 bg-amber-600/10 rounded-3xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
              <Coffee size={40} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Restos de Café</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-6 bg-amber-600/10 rounded-3xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
              <Leaf size={40} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Poda</span>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© 2026 Programa Nacional Antártico - Gestión Ambiental ECAMP</p>
      </footer>
    </div>
  );
}