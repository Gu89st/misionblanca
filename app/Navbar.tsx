"use client"; // Necesario para manejar el estado del menú

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 px-4 md:px-8 py-3 rounded-2xl flex items-center justify-between shadow-2xl">
        
        {/* Logo y Título */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="bg-blue-500/20 p-2 rounded-lg">
            <span className="text-xl">❄️</span>
          </div>
          <span className="text-lg font-bold tracking-tight bg-linear-to-r from-white bg-clip-text ">
            Misión Blanca
          </span>
        </Link>

        {/* Botón Hamburguesa */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

        {/* Links de Navegación */}
        <div className="hidden md:flex items-center gap-8">
            <NavLink href="/segregacion" label="Segregación" active />
            <NavLink href="/biblioteca" label="Biblioteca" /> 
            <NavLink href="/datos-curiosos" label="Datos" />
        </div>
      </div>

      {/* Menú Desplegable*/}
      <div className={`md:hidden absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
        <div className="flex flex-col gap-6 items-center">
            <Link href="/" onClick={() => setIsOpen(false)}>Segregación</Link>
            <Link href="/biblioteca" onClick={() => setIsOpen(false)}>Biblioteca</Link>
            <Link href="/datos-curiosos" onClick={() => setIsOpen(false)}>Datos Curiosos</Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label, active = false }: { href: string; label: string; active?: boolean }) {
  return (
    <Link href={href} className="group flex flex-col items-center shrink-0">
      <span className={`text-[11px] uppercase tracking-widest font-bold transition-colors ${active ? "text-blue-400" : "text-slate-400 group-hover:text-white"}`}>
        {label}
      </span>
      <div className={`h-0.5 bg-blue-500 mt-1 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}></div>
    </Link>
  );
}