import { ArrowLeft, CheckCircle2, Lightbulb } from "lucide-react";

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

const materials: MaterialInfo[] = [
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

export default function BebidasEnvasesPage() {
  return (
    <div className="min-h-screen bg-[#0a0f18] text-white p-6 md:p-12 font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-all mb-6 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al inicio</span>
        </button>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Bebidas y Envases Alimentarios
        </h1>
        <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-3xl leading-relaxed">
          Siga los protocolos de limpieza y compactación técnica para asegurar la trazabilidad del reciclaje en la base.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((item) => (
          <div 
            key={item.id} 
            className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col"
          >
            {/* Imagen */}
            <div className="h-48 relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-lg h-50 object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
              />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl ${item.colorClass}`}>
                {item.destiny}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">
                {item.description}
              </p>

              {/* Pasos*/}
              <div className="space-y-2 mb-6 grow">
                {item.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span className="text-[13px] font-medium">{step}</span>
                  </div>
                ))}
              </div>

              {/* Boton*/}
              <div className="relative group/advice">
                <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 p-3 rounded-2xl cursor-help transition-all">
                  <Lightbulb size={16} className="text-yellow-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Ver Consejo Técnico</span>
                </div>
                
                {/* Tooltip*/}
                <div className="absolute bottom-full left-0 mb-2 w-full p-4 bg-slate-800 border border-emerald-500/30 rounded-2xl opacity-0 invisible group-hover/advice:opacity-100 group-hover/advice:visible transition-all z-10 shadow-2xl">
                  <p className="text-[11px] text-emerald-100 leading-snug">
                    {item.advice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}