"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // Importación necesaria para rutas

const categories = [
  { title: "Bebidas y Envases Alimentarios", image: "./Docs/Bebidas.png", anchor: "material-1" },
  { title: "Empaques y Papelería", image: "./Docs/Empaques.png", anchor: "material-2" },
  { title: "Ciencia y Laboratorio", image: "./Docs/Ciencia.png", anchor: "material-3" },
  { title: "Mantenimiento y Taller", image: "./Docs/Mantenimiento.png", anchor: "material-4" },
  { title: "Restos de Comida", image: "./Docs/Restos.png", anchor: "material-5" },
  { title: "Higiene y Otros", image: "./Docs/Higene.png", anchor: "material-6" },
];
const colorCategories = [
  { title: "Tacho Marrón: Orgánicos", image: "./Docs/Marron.jpeg", anchor: "color-1", colorClass: "bg-amber-700" },
  { title: "Tacho Amarillo: Papel y Cartón", image: "./Docs/Amarillo.jpeg", anchor: "color-2", colorClass: "bg-yellow-400" },
  { title: "Tacho Azul: Metales", image: "./Docs/Azul.jpeg", anchor: "color-3", colorClass: "bg-blue-600" },
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
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-12 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 uppercase">
          Segregamos en la ECAMP
        </h1>

        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-10 group">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-all"></div>
          <img 
            src="./Docs/Logo.png" 
            alt="Logo"
            className="relative w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
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




       <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© 2026 Programa Nacional Antártico - Gestión Ambiental ECAMP</p>
        <p className="text-xs text-slate-600">
          Diseño y Desarrollo: <a target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-semibold">Alberto Sarapura G.</a>
        </p>
        <p className="text-xs text-slate-600">
          Autor 1: <a target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-semibold">Miguel Mucha Torre</a>
        </p>
        <p className="text-xs text-slate-600">
          Autor 2: <a target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-semibold">Melany Deysi Chipana Fernández</a>
        </p>
      </footer>
    </div>
  );
}