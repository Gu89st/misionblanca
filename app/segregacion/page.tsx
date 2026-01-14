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

// 1. BEBIDAS Y ENVASES
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

// 2. EMPAQUES Y PAPELERÍA
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
    title: "Envoltorios de Snacks / Film",
    image: "./Segregacion/Snacks.png",
    description: "Empaques flexibles multicapa y film estirable. Baja reciclabilidad.",
    steps: ["Vaciar totalmente", "Sacudir restos", "Doblar para reducir volumen", "No mezclar con plásticos rígidos"],
    destiny: "TACHO NEGRO",
    colorClass: "bg-slate-700 text-white",
    advice: "Mantenerlos separados preserva la calidad de los materiales recuperables puros."
  },
  {
    id: "sopas-1",
    title: "Sobres de Comida Instantánea",
    image: "./Segregacion/Sopas.png",
    description: "Empaques laminados multicapa con barrera térmica. No aprovechables.",
    steps: ["Vaciar contenido", "Sacudir residuos sólidos", "Doblar para compactar", "Depositar sin mezclar"],
    destiny: "TACHO NEGRO",
    colorClass: "bg-slate-700 text-white",
    advice: "Su estructura plástico-aluminio impide su valorización en procesos convencionales."
  }
];

// 3. CIENCIA Y LABORATORIO
const ciencia: MaterialInfo[] = [
  {
    id: "vidrio-roto",
    title: "Material de Vidrio Roto",
    image: "./Segregacion/Vidrio_roto.png",
    description: "Tubos de ensayo, placas de Petri. Residuos cortopunzantes de laboratorio.",
    steps: ["Usar herramientas (no manos)", "Contenedor rígido rotulado", "Sellar correctamente", "Entrega especial"],
    destiny: "TACHO ROJO",
    colorClass: "bg-red-600 text-white",
    advice: "Utilice contenedores certificados para reducir accidentes laborales y riesgos biológicos."
  },
  {
    id: "epp-lab",
    title: "Guantes y EPP",
    image: "./Segregacion/Guantes.png",
    description: "Guantes de nitrilo o látex usados. Pueden contener trazas de reactivos.",
    steps: ["Retirar sin tocar exterior", "Doblar y envolver", "Bolsa biocontaminados", "Sellar y rotular"],
    destiny: "TACHO ROJO",
    colorClass: "bg-red-600 text-white",
    advice: "Los EPP contaminados comprometen la bioseguridad; nunca intente su reutilización."
  },
  {
    id: "quimicos-lab",
    title: "Sustancias Químicas",
    image: "./Segregacion/Reactivos.png",
    description: "Reactivos líquidos o sólidos. Riesgo de corrosividad, toxicidad o inflamabilidad.",
    steps: ["Envase original con etiqueta", "Verificar cierre hermético", "Separar por compatibilidad", "Entrega a gestión especial"],
    destiny: "TACHO ROJO",
    colorClass: "bg-red-600 text-white",
    advice: "Mantener el reactivo en su envase original evita reacciones peligrosas por mezclas."
  },
  {
    id: "biologicos-lab",
    title: "Muestras Biológicas",
    image: "./Segregacion/Muestras.png",
    description: "Sedimentos, aguas o material procesado que requiere disposición controlada.",
    steps: ["Contenedor hermético", "Rotular como biológico", "Depositar en rígido sellado", "Entrega a gestor"],
    destiny: "TACHO ROJO",
    colorClass: "bg-red-600 text-white",
    advice: "Registrar origen y fecha fortalece la trazabilidad en instalaciones de alta sensibilidad."
  }
];

// 4. MANTENIMIENTO Y TALLER
const mantenimiento: MaterialInfo[] = [
  {
    id: "pilas-1",
    title: "Pilas y Baterías",
    image: "./Segregacion/Pilas.png",
    description: "Dispositivos con metales pesados. Residuos peligrosos por toxicidad.",
    steps: ["Separar todas las usadas", "No abrir ni perforar", "Depositar en envase rígido", "Entregar al encargado"],
    destiny: "BOTELLA PLÁSTICA",
    colorClass: "bg-orange-500 text-white",
    advice: "Deben mantenerse fuera de fuentes de calor para evitar fugas de electrolitos tóxicos."
  },
  {
    id: "aceites-1",
    title: "Aceites y Lubricantes",
    image: "./Segregacion/Aceites.png",
    description: "Residuos oleosos de generadores eléctricos. Altamente contaminantes.",
    steps: ["Recipiente original hermético", "Rotular 'Aceite Usado'", "No mezclar con agua", "Bandejas de contención"],
    destiny: "TACHO ROJO",
    colorClass: "bg-red-600 text-white",
    advice: "Su disposición en campo está prohibida; el retorno al centro de acopio es obligatorio."
  },
  {
    id: "trapos-1",
    title: "Trapos contaminados",
    image: "./Segregacion/Trapos.png",
    description: "Textiles con grasa, combustible o solventes. Inflamables y tóxicos.",
    steps: ["Bolsa resistente", "No exprimir", "Contenedor cerrado", "Rotulación visible"],
    destiny: "TACHO ROJO",
    colorClass: "bg-red-600 text-white",
    advice: "Se prohíbe su quema; deben ser trasladados fuera de la base por operador autorizado."
  },
  {
    id: "chatarra-1",
    title: "Piezas Metálicas",
    image: "./Segregacion/Chatarra.png",
    description: "Pernos, cables y repuestos. Aprovechables si están libres de químicos.",
    steps: ["Separar piezas limpias", "Agrupar por metal", "Evitar bordes sueltos", "Compactar para transporte"],
    destiny: "TACHO AZUL",
    colorClass: "bg-blue-600 text-white",
    advice: "Priorice la valorización mediante reciclaje asegurando que no tengan aceites."
  }
];

// 5. RESTOS DE COMIDA
const comida: MaterialInfo[] = [
  {
    id: "vegetal-1",
    title: "Frutas y Verduras",
    image: "./Segregacion/Organicos.png",
    description: "Residuos biodegradables. Pueden atraer fauna si no se manejan bien.",
    steps: ["Separar cáscaras y semillas", "Evitar exceso de humedad", "Depositar sin bolsas", "Tapar contenedor"],
    destiny: "TACHO MARRÓN",
    colorClass: "bg-amber-800 text-white",
    advice: "Su manejo adecuado evita la atracción de fauna silvestre hacia la base científica."
  },
  {
    id: "carnicos-1",
    title: "Restos de Carne/Huesos",
    image: "./Segregacion/Carnicos.png",
    description: "Huesos y restos de origen animal. Manejo estricto para evitar patógenos.",
    steps: ["Control de olores", "Contenedor sellado", "No mezclar con vegetales", "Gestión biosegura"],
    destiny: "TACHO MARRÓN",
    colorClass: "bg-amber-800 text-white",
    advice: "En la Antártida, esto es vital para no introducir enfermedades en especies locales."
  },
  {
    id: "cafe-1",
    title: "Borra de Café y Té",
    image: "./Segregacion/Cafe.png",
    description: "Filtros de papel y saquitos de té. Altamente biodegradables.",
    steps: ["Retirar exceso de líquido", "Saquitos completos", "No mezclar con plásticos", "Bolsa cerrada"],
    destiny: "TACHO MARRÓN",
    colorClass: "bg-amber-800 text-white",
    advice: "Mantenerlos separados mejora la eficiencia del tratamiento biológico de residuos."
  }
];

// 6. HIGIENE Y OTROS
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
  },
  {
    id: "limpieza-1",
    title: "Mascarillas y Limpieza",
    image: "./Segregacion/Limpieza.png",
    description: "Mascarillas descartables y trapos de higiene personal.",
    steps: ["Envolver tras uso", "Bolsa cerrada", "No tocar filtros", "Evitar dispersión"],
    destiny: "TACHO NEGRO",
    colorClass: "bg-slate-700 text-white",
    advice: "El embolsado inmediato reduce riesgos sanitarios en ambientes cerrados."
  },
  {
    id: "vajilla-1",
    title: "Cerámicos o Vajilla Rota",
    image: "./Segregacion/Loza.png",
    description: "Tazas o platos de loza. Materiales inertes con bordes cortantes.",
    steps: ["Recolectar con cuidado", "Envolver en cartón", "Bolsa resistente", "Sellar para transporte"],
    destiny: "TACHO NEGRO",
    colorClass: "bg-slate-700 text-white",
    advice: "El embalaje previo disminuye el riesgo operacional para el personal de transporte."
  }
];

export default function BebidasEnvasesPage() {
  return (
    <div className="min-h-screen bg-[#0a0f18] text-white p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto mb-12">
        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-all mb-6 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al inicio</span>
        </button>
        
        {/* TITULO 1 */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">1. Bebidas y Envases Alimentarios</h1>
        <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-3xl leading-relaxed mb-10">Siga los protocolos de limpieza y compactación técnica para asegurar el reciclaje.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {bebidas.map((item) => (
          <div key={item.id} className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-full h-90 md:h-96 relative overflow-hidden bg-white/5">
              <img src={item.image} alt={item.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl ${item.colorClass}`}>
                {item.destiny}
              </div>
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
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

      {/* TITULO 2 */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">2. Empaques y Papelería</h1>
        <div className="w-20 h-1.5 bg-yellow-400 rounded-full mb-4"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {empaques.map((item) => (
          <div key={item.id} className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-full h-90 md:h-96 relative overflow-hidden bg-white/5">
              <img src={item.image} alt={item.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl ${item.colorClass}`}>
                {item.destiny}
              </div>
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
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

      {/* TITULO 3 */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">3. Ciencia y Laboratorio</h1>
        <div className="w-20 h-1.5 bg-red-600 rounded-full mb-4"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {ciencia.map((item) => (
          <div key={item.id} className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-full h-90 md:h-96 relative overflow-hidden bg-white/5">
              <img src={item.image} alt={item.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl ${item.colorClass}`}>
                {item.destiny}
              </div>
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
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

      {/* TITULO 4 */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">4. Mantenimiento y Taller</h1>
        <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-4"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {mantenimiento.map((item) => (
          <div key={item.id} className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-full h-90 md:h-96 relative overflow-hidden bg-white/5">
              <img src={item.image} alt={item.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl ${item.colorClass}`}>
                {item.destiny}
              </div>
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
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

      {/* TITULO 5 */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">5. Restos de Comida (Orgánicos)</h1>
        <div className="w-20 h-1.5 bg-amber-800 rounded-full mb-4"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {comida.map((item) => (
          <div key={item.id} className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-full h-90 md:h-96 relative overflow-hidden bg-white/5">
              <img src={item.image} alt={item.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl ${item.colorClass}`}>
                {item.destiny}
              </div>
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
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

      {/* TITULO 6 */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">6. Higiene y Otros (No Aprovechables)</h1>
        <div className="w-20 h-1.5 bg-slate-700 rounded-full mb-4"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {higiene.map((item) => (
          <div key={item.id} className="group bg-slate-900/40 border border-white/25 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col">
            <div className="w-full h-90 md:h-96 relative overflow-hidden bg-white/5">
              <img src={item.image} alt={item.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl ${item.colorClass}`}>
                {item.destiny}
              </div>
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
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
    </div>
  );
}