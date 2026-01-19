"use client";

import { ArrowLeft, CheckCircle2, Lightbulb } from "lucide-react";
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

// --- CONSTANTES DE DATOS ---

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
  {
    id: "hdpe-2",
    title: "Yogurt, Lácteos y Shampoo",
    image: "./Segregacion/Lacteos.png",
    description: "Plásticos densos que requieren eliminación total de residuos orgánicos.",
    steps: ["Enjuague obligatorio", "Quitar etiquetas", "Aplastar", "Sin tapa"],
    destiny: "TACHO BLANCO",
    colorClass: "bg-white text-slate-900",
    advice: "Lave inmediatamente después del uso para evitar fermentación y olores."
  },
  {
    id: "aluminio",
    title: "Latas de Bebidas",
    image: "./Segregacion/Latas.png",
    description: "Aluminio ligero. Su reciclaje ahorra un 95% de energía en producción.",
    steps: ["Vaciar contenido", "Enjuagar ligero", "Aplastar", "Sin etiquetas"],
    destiny: "TACHO AZUL",
    colorClass: "bg-blue-600 text-white",
    advice: "El aluminio limpio mantiene el valor más alto de recuperación en el mercado."
  },
  {
    id: "hojalata",
    title: "Latas de Conservas",
    image: "./Segregacion/conservas.png",
    description: "Hojalata (atún, duraznos). Cuidado con los bordes cortantes.",
    steps: ["Retirar restos de comida", "Enjuagar bien", "Secar", "No deformar peligrosamente"],
    destiny: "TACHO AZUL",
    colorClass: "bg-blue-600 text-white",
    advice: "La limpieza evita vectores (insectos) y mejora la calidad del metal reciclado."
  },
  {
    id: "tetra",
    title: "Envases Tetra Pak",
    image: "./Segregacion/Tetra_pak.png",
    description: "Multicapa (cartón, aluminio, plástico). Se gestiona junto al papel y cartón.",
    steps: ["Enjuagar bien", "Desplegar esquinas", "Aplastar", "Secar"],
    destiny: "TACHO AMARILLO",
    colorClass: "bg-yellow-400 text-black",
    advice: "Desplegar las pestañas permite un aplastado total, ahorrando 70% de espacio."
  },
  {
    id: "vidrio",
    title: "Botellas de Vidrio",
    image: "./Segregacion/Vidrio.png", 
    description: "Envases de salsas o bebidas. 100% reciclable infinitas veces.",
    steps: ["Eliminar líquidos", "Enjuague obligatorio", "Quitar tapa o corcho", "Depositar sin romper"],
    destiny: "TACHO VERDE",
    colorClass: "bg-emerald-500 text-white",
    advice: "Evite romper el vidrio; los fragmentos pequeños son difíciles de segregar."
  }
];

const empaques: MaterialInfo[] = [
  {
    id: "carton-1",
    title: "Cajas de Cartón",
    image: "./Segregacion/Carton.png",
    description: "Contenedores de fibras de celulosa. Alta reciclabilidad siempre que estén limpias.",
    steps: ["Desarmar completamente", "Aplastar y apilar planas", "Retirar cintas o etiquetas", "Mantener secas"],
    destiny: "TACHO AMARILLO",
    colorClass: "bg-yellow-400 text-black",
    advice: "La humedad degrada las fibras celulósicas; asegure que el cartón se mantenga seco."
  },
  {
    id: "papel-1",
    title: "Papel de Oficina/Documentos",
    image: "./Segregacion/Papel.png",
    description: "Hojas bond, informes y documentos administrativos. Fibras reciclables.",
    steps: ["Separar hojas limpias", "Retirar grapas o clips", "Apilar ordenadamente", "Proteger de humedad"],
    destiny: "TACHO AMARILLO",
    colorClass: "bg-yellow-400 text-black",
    advice: "Retirar metales mejora la calidad del insumo y reduce costos en las plantas de fibra."
  },
  {
    id: "snacks-1",
    title: "Envoltorios de comida",
    image: "./Segregacion/Snacks.png",
    description: "Empaques flexibles multicapa de baja reciclabilidad.",
    steps: ["Vaciar totalmente", "Sacudir restos", "Doblar para reducir volumen", "No mezclar con plásticos rígidos"],
    destiny: "TACHO NEGRO",
    colorClass: "bg-slate-700 text-white",
    advice: "Mantenerlos separados preserva la calidad de los materiales recuperables puros."
  }
];

const ciencia: MaterialInfo[] = [
  {
    id: "vidrio-roto",
    title: "Material de Vidrio Roto",
    image: "./Segregacion/Vidrio_roto.png",
    description: "Tubos de ensayo, placas de Petri. Residuos cortopunzantes de laboratorio.",
    steps: ["Usar herramientas (no manos)", "Contenedor rígido rotulado", "Sellar correctamente", "Entrega especial"],
    destiny: "TACHO ROJO",
    colorClass: "bg-red-600 text-white",
    advice: "Utilice contenedores certificados para reducir accidentes y riesgos biológicos."
  }
];

const mantenimiento: MaterialInfo[] = [
  {
    id: "pilas-1",
    title: "Pilas y Baterías",
    image: "./Segregacion/Pilas.png",
    description: "Dispositivos con metales pesados. Residuos peligrosos por toxicidad.",
    steps: ["Separar todas las usadas", "No abrir ni perforar", "Depositar en envase rígido", "Entregar al encargado"],
    destiny: "BOTELLA PLÁSTICA",
    colorClass: "bg-orange-500 text-white",
    advice: "Mantener fuera de fuentes de calor para evitar fugas de electrolitos tóxicos."
  }
];

const comida: MaterialInfo[] = [
  {
    id: "vegetal-1",
    title: "Frutas y Verduras",
    image: "./Segregacion/Organicos.png",
    description: "Residuos biodegradables. Pueden atraer fauna si no se manejan bien.",
    steps: ["Separar cáscaras y semillas", "Evitar exceso de humedad", "Depositar sin bolsas", "Tapar contenedor"],
    destiny: "TACHO MARRÓN",
    colorClass: "bg-amber-800 text-white",
    advice: "Su manejo evita la atracción de fauna silvestre hacia la base científica."
  }
];

const higiene: MaterialInfo[] = [
  {
    id: "sanitarios-1",
    title: "Residuos de Baño",
    image: "./Segregacion/Bano.png",
    description: "Papel higiénico y toallitas. Carga biológica no aprovechable.",
    steps: ["Depósito directo", "No mezclar con reciclables", "Bolsa resistente", "Sellar al llenar"],
    destiny: "TACHO NEGRO",
    colorClass: "bg-slate-700 text-white",
    advice: "Pequeñas cantidades pueden inutilizar materiales reciclables por contaminación."
  }
];

// --- DATOS POR COLOR ---

const colorNegro: MaterialInfo[] = [
  {
    id: "negro-gen",
    title: "Residuos No Aprovechables",
    image: "./Segregacion/Negro.png",
    description: "Materiales que no pueden ser reciclados o valorizados.",
    steps: ["Envolver restos comida procesada", "Depositar servilletas sucias", "Cerrar bolsa herméticamente"],
    destiny: "TACHO NEGRO",
    colorClass: "bg-slate-900 text-white border border-white/20",
    advice: "Asegure el sellado para evitar olores en áreas comunes."
  }
];

const colorMarron: MaterialInfo[] = [
  {
    id: "marron-gen",
    title: "Residuos Orgánicos",
    image: "./Segregacion/Organicos_color.png",
    description: "Restos de alimentos crudos y desechos vegetales.",
    steps: ["Eliminar exceso de líquidos", "No incluir bolsas de plástico", "Depositar restos de poda"],
    destiny: "TACHO MARRÓN",
    colorClass: "bg-amber-800 text-white",
    advice: "La segregación pura permite el compostaje eficiente."
  }
];

export default function ManualSegregacionPage() {
  const router = useRouter();

  const renderGrid = (data: MaterialInfo[]) => (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {data.map((item) => (
        <div key={item.id} className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col shadow-xl">
          <div className="w-full h-80 relative overflow-hidden bg-white/5">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
            />
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
        <p className="text-slate-400 max-w-2xl">
          Guía técnica detallada para la gestión responsable de residuos en el Programa Nacional Antártico.
        </p>
      </div>

      {/* SECCIÓN I: POR MATERIAL */}
      <div id="seccion-material" className="max-w-7xl mx-auto mb-14 p-8 bg-emerald-500/10 rounded-[3rem] border border-emerald-500/20 scroll-mt-24 shadow-2xl">
        <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-400">I. Segregación por Material</h2>
      </div>

      <div id="material-1" className="max-w-7xl mx-auto mb-8 ml-4 scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase tracking-tight">1. Bebidas y Envases Alimentarios</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 rounded-full"></div>
      </div>
      {renderGrid(bebidas)}

      <div id="material-2" className="max-w-7xl mx-auto mb-8 ml-4 scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase tracking-tight">2. Empaques y Papelería</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 rounded-full"></div>
      </div>
      {renderGrid(empaques)}

      <div id="material-3" className="max-w-7xl mx-auto mb-8 ml-4 scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase tracking-tight">3. Ciencia y Laboratorio</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 rounded-full"></div>
      </div>
      {renderGrid(ciencia)}

      <div id="material-4" className="max-w-7xl mx-auto mb-8 ml-4 scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase tracking-tight">4. Mantenimiento y Taller</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 rounded-full"></div>
      </div>
      {renderGrid(mantenimiento)}

      <div id="material-5" className="max-w-7xl mx-auto mb-8 ml-4 scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase tracking-tight">5. Restos de Comida</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 rounded-full"></div>
      </div>
      {renderGrid(comida)}

      <div id="material-6" className="max-w-7xl mx-auto mb-8 ml-4 scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase tracking-tight">6. Higiene y Otros</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 rounded-full"></div>
      </div>
      {renderGrid(higiene)}

      {/* SECCIÓN II: POR COLOR */}
      <div id="seccion-color" className="max-w-7xl mx-auto mb-14 mt-32 p-8 bg-blue-500/10 rounded-[3rem] border border-blue-500/20 scroll-mt-24">
        <h2 className="text-3xl font-black uppercase tracking-widest text-blue-400">II. Segregación por Color</h2>
      </div>

      <div className="max-w-7xl mx-auto mb-8 ml-4">
        <h3 className="text-2xl font-bold text-slate-300 uppercase">1. Negro (No Aprovechables)</h3>
      </div>
      {renderGrid(colorNegro)}

      <div className="max-w-7xl mx-auto mb-8 ml-4">
        <h3 className="text-2xl font-bold text-amber-600 uppercase">2. Orgánicos (Marrón)</h3>
      </div>
      {renderGrid(colorMarron)}

      <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© 2026 Programa Nacional Antártico - Gestión Ambiental ECAMP</p>
      </footer>
    </div>
  );
}