"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // Importación necesaria para rutas

const categories = [
  { title: "Bebidas y Envases Alimentarios", image: "./Docs/Bebidas.png", anchor: "material-1" },
  { title: "Empaques y Papelería", image: "./Docs/Empaques.jpeg", anchor: "material-2" },
  { title: "Ciencia y Laboratorio", image: "./Docs/Ciencia.png", anchor: "material-3" },
  { title: "Mantenimiento y Taller", image: "./Docs/Mantenimiento.jpeg", anchor: "material-4" },
  { title: "Restos de Comida", image: "./Docs/Restos.png", anchor: "material-5" },
  { title: "Higiene y Otros", image: "./Docs/Higene.png", anchor: "material-6" },
];
const colorCategories = [
  { title: "Tacho Marrón: Orgánicos", image: "./Docs/Marron.jpeg", anchor: "color-1", colorClass: "bg-amber-700" },
  { title: "Tacho Amarillo: Papel y Cartón", image: "./Docs/Amarillo.jpeg", anchor: "color-2", colorClass: "bg-yellow-400" },
  { title: "Tacho Azul: Metales", image: "./Docs/azul.jpeg", anchor: "color-3", colorClass: "bg-blue-600" },
  { title: "Tacho Blanco: Plástico", image: "./Docs/Blanco.jpeg", anchor: "color-4", colorClass: "bg-white" },
  { title: "Tacho Negro: No Aprovechables", image: "./Docs/Negro.jpeg", anchor: "color-5", colorClass: "bg-slate-950 border border-white/20" },
  { title: "Tacho Rojo: Peligrosos", image: "./Docs/Rojo2.jpeg", anchor: "color-6", colorClass: "bg-red-600" },
  { title: "Tacho Rojo: Biocontaminados (Tópico)", image: "./Docs/Rojo1.jpeg", anchor: "color-7", colorClass: "bg-red-600" },
];

export default function SegregacionPage() {
  const router = useRouter();

  const handleNavigation = (anchorId: string) => {
    // Intenta encontrar el elemento en la página actual
    const element = document.getElementById(anchorId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Redirige a la página de segregación con el anchor
      router.push(`/segregacion#${anchorId}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f18] text-white">
      {/* SECCIÓN HERO */}
      <section className="relative w-full h-screen min-h-175 flex flex-col items-center justify-center text-center overflow-hidden">
  
  {/* 1. IMAGEN DE FONDO (La Base Antártica) */}
  <div className="absolute inset-0 z-0">
    <img 
      src="./Docs/Base.png"  // Asegúrate que la ruta sea correcta
      alt="Base Antártica ECAMP" 
      className="w-full h-full object-cover" // Esto hace que cubra todo el fondo sin deformarse
    />
    {/* Capa oscura superpuesta (Overlay) para que el texto se lea bien */}
    <div className="absolute inset-0 bg-black/40"></div> 
  </div>

  {/* 2. CONTENIDO PRINCIPAL (Logo, Título, Botones) */}
  <div className="relative z-10 flex flex-col items-center px-6 max-w-5xl pt-20">
    
    {/* TÍTULO */}
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-2xl mb-8">
      Segregamos en la <span className="text-emerald-400">ECAMP</span>
    </h1>

    {/* LOGO (El pingüino) */}
    <div className="relative w-48 h-48 md:w-64 md:h-64 mb-12 group">
      {/* Efecto de brillo detrás del logo */}
      <div className="absolute inset-0 bg-blue-500/30 blur-[50px] rounded-full group-hover:bg-blue-500/50 transition-all duration-500"></div>
      <img 
        src="./Docs/Logo.png" 
        alt="Logo ECAMP"
        className="relative w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button 
            onClick={() => router.push("/segregacion#seccion-material")}
            className="flex-1 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold uppercase tracking-wider hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2 group shadow-xl"
          >
            Segregación por material
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => handleNavigation("seccion-color")}
            className="flex-1 bg-slate-800 border border-white/10 px-8 py-4 rounded-2xl font-bold uppercase tracking-wider hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group shadow-xl"
          >
            Segregación por color
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
          <span className="w-8 h-0.5 bg-emerald-500"></span>
          Segregación por material: Explora y Aprende
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleNavigation(item.anchor)}
              className="aspect-video rounded-4xl overflow-hidden border-2 border-white/20 cursor-pointer hover:border-blue-500 transition-all group relative shadow-2xl bg-slate-900"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CATEGORÍAS POR COLOR */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
          <span className="w-8 h-0.5 bg-emerald-500"></span>
          Segregación por Color: Conoce que ingresa en cada tacho
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorCategories.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleNavigation(item.anchor)}
              className="aspect-2/3 rounded-4xl overflow-hidden border-2 border-white/20 cursor-pointer hover:border-blue-500 transition-all group relative shadow-2xl bg-slate-900"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
                <div className="flex items-center gap-3 w-full">
                  {/* Aquí se usa tu 'colorClass' para pintar el círculo */}
                  <div className={`w-4 h-4 rounded-full shadow-lg shrink-0 ${item.colorClass}`}></div>
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

<footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 pb-12">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
    
    {/* LADO IZQUIERDO: CRÉDITOS */}
    <div className="text-center md:text-left space-y-3">
      <p className="text-slate-400 font-medium">
        © 2026 Programa Nacional Antártico - Gestión Ambiental ECAMP 
      </p>
            {/* Agrupamos autores */}
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <p className="text-slate-400 font-medium">
        Autores Delegación Usil
          </p>
          <p>
      
            <a target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-semibold cursor-pointer">
              Miguel Mucha Torre
            </a>
          </p>
          {/* Separador visible solo en desktop */}
          <span className="hidden sm:block text-slate-800">|</span>
          <p>
    
            <a target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-semibold cursor-pointer">
              Melany Deysi Chipana Fernández
            </a>
          </p>
        </div>  
      <div className="sm:gap-4 text-slate-200 font-bold group-hover:text-white transition-colors">
        <p>
          Diseñador y Desarrollador :{" "}
          <a target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-semibold cursor-pointer">
            Alberto Sarapura G.
          </a>
        </p>
      </div>
    </div>

    {/* LADO DERECHO: LOGO USIL */}
    <div className="flex flex-col items-center justify-center shrink-0 gap-2">
  <img 
    src="./Docs/Usil.jpg" 
    alt="Logo USIL" 
    className="h-16 w-auto object-contain rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
  />
  <p className="text-center text-slate-500 font-bold text-[10px] leading-tight max-w-45">
    FACULTAD DE INGENIERÍA
  </p>
  <p className="text-center text-slate-500 font-bold text-[10px] leading-tight max-w-45">
    Carrera de ingeniería ambiental
  </p>
</div>
{/* FACULTAD DE INGENIERÍA E INTELIGENCIA ARTIFICIAL */}
  </div>
</footer>
    </div>
  );
}