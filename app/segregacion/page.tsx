"use client";

import { 
  ArrowLeft, CheckCircle2, Lightbulb, XCircle, 
  Apple, Coffee, Leaf, Drumstick, 
  FileText, Box, Newspaper, Milk,
  Container, Wrench, Component, ZapOff,
  Droplets, Dna, FlaskConical,
  Trash2, Cigarette, Ghost, Wind,
  FlaskRound, TestTube2, AlertTriangle, Syringe,
  Stethoscope, Thermometer, HeartPulse, Activity
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

// --- CONSTANTES DE DATOS SECCIÓN I (ACTUALIZADAS CON TUS PEDIDOS) ---

const bebidas: MaterialInfo[] = [
  { id: "pet-1", title: "Botellas de Agua/Gaseosa", image: "./Segregacion/Botellas.png", description: "Plástico PET altamente reciclable. Debe entregarse limpio y compactado.", steps: ["Enjuagar bien", "Secar o escurrir", "Aplastar verticalmente"], destiny: "TACHO BLANCO", colorClass: "bg-white text-slate-900", advice: "La compactación vertical maximiza la eficiencia del almacenamiento en la base." },
  { id: "hdpe-2", title: "Yogurt, Lácteos y Shampoo", image: "./Segregacion/Lacteos.png", description: "Plásticos densos que requieren eliminación total de residuos orgánicos.", steps: ["Enjuague obligatorio", "Quitar etiquetas", "Aplastar"], destiny: "TACHO BLANCO", colorClass: "bg-white text-slate-900", advice: "Lave inmediatamente después del uso para evitar fermentación y olores." },
  { id: "aluminio", title: "Latas de Bebidas", image: "./Segregacion/Latas.png", description: "Aluminio ligero. Su reciclaje ahorra un 95% de energía en producción.", steps: ["Vaciar contenido", "Enjuagar ligero", "Aplastar", "Sin etiquetas"], destiny: "TACHO AZUL", colorClass: "bg-blue-600 text-white", advice: "El aluminio limpio mantiene el valor más alto de recuperación en el mercado." },
  { id: "hojalata", title: "Latas de Conservas", image: "./Segregacion/conservas.png", description: "Hojalata (atún, duraznos). Cuidado con los bordes cortantes.", steps: ["Retirar restos de comida", "Enjuagar bien", "Secar", "No deformar peligrosamente"], destiny: "TACHO AZUL", colorClass: "bg-blue-600 text-white", advice: "La limpieza evita vectores (insectos) y mejora la calidad del metal reciclado." },
  { id: "tetra", title: "Envases Tetra Pak", image: "./Segregacion/Tetra_pak.png", description: "Multicapa (cartón, aluminio, plástico). Se gestiona junto al papel y cartón.", steps: ["Enjuagar bien", "Desplegar esquinas", "Aplastar"], destiny: "TACHO AMARILLO", colorClass: "bg-yellow-400 text-black", advice: "Desplegar las pestañas permite un aplastado total, ahorrando 70% de espacio." },
  { id: "vidrio", title: "Botellas de Vidrio", image: "./Segregacion/Vidrio_Roto.png", description: "Envases de salsas o bebidas. 100% reciclable infinitas veces.", steps: ["Eliminar líquidos", "Enjuague obligatorio", "Quitar tapa o corcho", "Depositar sin romper"], destiny: "COMUNICARSE CON ENCARGADO DE RESIDUOS SÓLIDOS", colorClass: "bg-purple-600 text-white", advice: "Evite romper el vidrio; los fragmentos pequeños son difíciles de segregar." }
];

const empaques: MaterialInfo[] = [
  { id: "carton-1", title: "Cajas de Cartón", image: "./Segregacion/Cajas.png", description: "Contenedores de fibras de celulosa. Alta reciclabilidad siempre que estén limpias.", steps: ["Desarmar completamente", "Aplastar y apilar planas", "Retirar cintas o etiquetas", "Mantener secas"], destiny: "TACHO AMARILLO", colorClass: "bg-yellow-400 text-black", advice: "La humedad degrada las fibras celulósicas; asegure que el cartón se mantenga seco." },
  { id: "papel-1", title: "Papel de Oficina/Documentos", image: "./Segregacion/Hojas.png", description: "Hojas bond, informes y documentos administrativos. Fibras reciclables.", steps: ["Separar hojas limpias", "Retirar grapas o clips", "Apilar ordenadamente", "Proteger de humedad"], destiny: "TACHO AMARILLO", colorClass: "bg-yellow-400 text-black", advice: "Retirar metales mejora la calidad del insumo y reduce costos en las plantas de fibra." },
  { id: "snacks-1", title: "Envoltorios de comida", image: "./Segregacion/Envoltorios.png", description: "Empaques flexibles multicapa de baja reciclabilidad.", steps: ["Vaciar totalmente", "Sacudir restos", "Doblar para reducir volumen", "No mezclar con plásticos rígidos"], destiny: "TACHO NEGRO", colorClass: "bg-slate-700 text-white", advice: "Mantenerlos separados preserva la calidad de los materiales recuperables puros." },
  // NUEVO 1
 // { id: "sobres-comida", title: "Sobres de Comida Instantánea", image: "./Segregacion/Instantaneo.png", description: "Empaques laminados multicapa con barrera térmica diseñados para contener alimentos deshidratados.", steps: ["Vaciar completamente", "Sacudir residuos sólidos", "Doblar para compactar", "Depositar sin mezclar"], destiny: "TACHO NEGRO", colorClass: "bg-slate-700 text-white", advice: "Su estructura multicapa (plástico–aluminio) impide su valorización en procesos convencionales." }
];

const ciencia: MaterialInfo[] = [
  { id: "vidrio-roto", title: "Material de Vidrio Roto", image: "./Segregacion/Vidrio_roto.png", description: "Tubos de ensayo, placas de Petri. Residuos cortopunzantes de laboratorio.", steps: ["Usar herramientas (no manos)", "Contenedor rígido rotulado", "Sellar correctamente", "Entrega especial"], destiny: "TACHO ROJO", colorClass: "bg-red-600 text-white", advice: "Utilice contenedores certificados para reducir accidentes y riesgos biológicos." },
  // NUEVO 2
  { id: "guantes-epp", title: "Guantes y EPP", image: "./Segregacion/Guantes.png", description: "Guantes de nitrilo o látex usados en experimentos. Contienen trazas de reactivos.", steps: ["Retirar sin tocar exterior", "Doblar y envolver", "Colocar en bolsa roja", "Sellar y rotular"], destiny: "TACHO NEGRO", colorClass: "bg-slate-700 text-white", advice: "EPP contaminados pueden contener trazas de reactivos o microorganismos que comprometen la bioseguridad." },
  // NUEVO 3
  { id: "quimicos", title: "Sustancias Químicas", image: "./Segregacion/Quimicos.png", description: "Reactivos sólidos o líquidos. Riesgos por corrosividad o toxicidad.", steps: ["Mantener envase original", "Etiqueta visible", "Verificar cierre", "Separar por compatibilidad"], destiny: "TACHO ROJO", colorClass: "bg-red-600 text-white", advice: "Mantener el envase original evita reacciones peligrosas por mezclas inadvertidas." },
  // NUEVO 4
  { id: "muestras", title: "Muestras Biológicas", image: "./Segregacion/Bio.png", description: "Restos de sedimentos, aguas o material biológico procesado.", steps: ["Contenedor hermético", "Rotular 'Residuo biológico'", "Depositar en rígido", "Entrega controlada"], destiny: "TACHO ROJO", colorClass: "bg-red-600 text-white", advice: "La trazabilidad reduce la probabilidad de errores en el manejo de residuos científicos." }
];

const mantenimiento: MaterialInfo[] = [
  { id: "pilas-1", title: "Pilas y Baterías", image: "./Segregacion/Pilas.png", description: "Dispositivos con metales pesados. Residuos peligrosos por toxicidad.", steps: ["Separar todas las usadas", "No abrir ni perforar", "Depositar en envase rígido", "Entregar al encargado"], destiny: "BOTELLA PLÁSTICA", colorClass: "bg-orange-500 text-white", advice: "Mantener fuera de fuentes de calor para evitar fugas de electrolitos tóxicos." },
  // NUEVO 5
  { id: "aceites", title: "Aceites y Lubricantes", image: "./Segregacion/Aceites.png", description: "Residuos de generadores eléctricos. Hidrocarburos tóxicos.", steps: ["Envase hermético", "Rotular 'Aceite usado'", "Evitar mezcla con agua", "Retorno obligatorio"], destiny: "CONTACTAR CON ENVARGADO DE RESIDUOS SOLIDOS", colorClass: "bg-purple-600 text-white", advice: "Su disposición está estrictamente prohibida en campo; retorno obligatorio." },
  // NUEVO 6
  { id: "trapos", title: "Trapos contaminados", image: "./Segregacion/Trapos.png", description: "Textiles con grasa, combustible o solventes. Inflamables.", steps: [], destiny: "TACHO NEGRO", colorClass: "bg-slate-700 text-white", advice: "Deben segregarse en contenedores metálicos con tapa hermética." },
  // NUEVO 7
  { id: "chatarra", title: "Piezas Metálicas", image: "./Segregacion/Chatarra.png", description: "Pernos, cables, repuestos y componentes metálicos.", steps: [], destiny: "TACHO AZUL", colorClass: "bg-blue-600 text-white", advice: "Priorice la valorización mediante reciclaje trasladándolo hacia un operador autorizado." }
];

const comida: MaterialInfo[] = [
  { id: "vegetal-1", title: "Frutas y Verduras", image: "./Segregacion/Organicos.png", description: "Residuos biodegradables.", steps: ["Evitar exceso de humedad", "Depositar sin bolsas", "Tapar contenedor"], destiny: "TACHO MARRÓN", colorClass: "bg-amber-800 text-white", advice: "Su manejo evita la atracción de fauna silvestre hacia la base científica." },
  // NUEVO 8
  { id: "carnes", title: "Restos de Carne/Huesos", image: "./Segregacion/Carnes.png", description: "Residuos orgánicos de origen animal. Manejo estricto en la Antártida.", steps: ["Eliminar líquidos", "Depositar en tacho marrón", "Bolsa bien cerrada"], destiny: "TACHO MARRÓN", colorClass: "bg-amber-800 text-white", advice: "Vital para evitar introducir patógenos foráneos al ecosistema antártico." },
  // NUEVO 9
  { id: "borra", title: "Granos de Filtrante", image: "./Segregacion/Borra.png", description: "Filtros de café y saquitos de té usados (sin líquidos).", steps: ["Empaque de papel externo a papel", "Envoltorio interior a no reciclables", "Granos a organicos"], destiny: "TACHO MARRÓN (ORGÁNICOS)", colorClass: "bg-amber-800 text-white", advice: "Son sustratos orgánicos de alta degradabilidad." }
];

const higiene: MaterialInfo[] = [
  { id: "sanitarios-1", title: "Residuos de Baño", image: "./Segregacion/Bano.png", description: "Papel higiénico y toallitas. Carga biológica no aprovechable.", steps: ["Depósito directo", "Bolsa resistente", "Sellar al llenar"], destiny: "TACHO NEGRO", colorClass: "bg-slate-700 text-white", advice: "Pequeñas cantidades pueden inutilizar materiales reciclables por contaminación." },
  // NUEVO 10
  { id: "mascarillas", title: "Mascarillas y Limpieza", image: "./Segregacion/Mascarillas.png", description: "Trapos domésticos y mascarillas descartables. Riesgo sanitario.", steps: ["Doblar o envolver", "Depositar en negro"], destiny: "TACHO NEGRO", colorClass: "bg-slate-700 text-white", advice: "El embolsado inmediato reduce riesgos de exposición." },
  // NUEVO 11
  { id: "vajilla", title: "Cerámicos o Vajilla Rota", image: "./Segregacion/Vajilla.png", description: "Fragmentos de platos o tazas. Bordes cortantes.", steps: ["Recolectar con cuidado", "Envolver en papel grueso", "Bolsa resistente"], destiny: "TACHO NEGRO", colorClass: "bg-slate-700 text-white", advice: "El embalaje seguro disminuye el riesgo operacional para el personal." }
];

export default function ManualSegregacionPage() {
  const router = useRouter();

  // Componente Reutilizable para los Iconos de los Tachos (Sección II)
  const IconItem = ({ icon: Icon, label, color }: { icon: any, label: string, color: string }) => (
    <div className="flex flex-col items-center gap-3 group">
      <div className={`p-6 bg-${color}/10 rounded-3xl text-${color} group-hover:bg-${color} group-hover:text-white transition-all duration-500 group-hover:-translate-y-2`}>
        <Icon size={40} />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-center">{label}</span>
    </div>
  );

  const renderGrid = (data: MaterialInfo[]) => (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4">
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
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0f18] text-white p-6 md:p-12 font-sans selection:bg-emerald-500/30">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16 px-4">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-400 hover:text-white transition-all mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-sm">Volver al inicio</span>
        </button>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-emerald-500 uppercase">Manual de Segregación ECAMP</h1>
      </div>

      {/* SECCIÓN I: POR MATERIAL */}
      <div id="seccion-material" className="max-w-7xl mx-auto mb-14 p-8 bg-emerald-500/10 rounded-[3rem] border border-emerald-500/20 scroll-mt-24 shadow-2xl">
        <h2 className="text-3xl font-black uppercase tracking-widest text-emerald-400">I. Segregación por Material</h2>
      </div>

      <div id="material-1" className="scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase max-w-7xl mx-auto mb-8 ml-4 px-4">1. Bebidas y Envases Alimentarios</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 mb-8 ml-4 rounded-full"></div>
        {renderGrid(bebidas)}
      </div>

      <div id="material-2" className="scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase max-w-7xl mx-auto mb-8 ml-4 px-4">2. Empaques y Papelería</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 mb-8 ml-4 rounded-full"></div>
        {renderGrid(empaques)}
      </div>

      <div id="material-3" className="scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase max-w-7xl mx-auto mb-8 ml-4 px-4">3. Ciencia y Laboratorio</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 mb-8 ml-4 rounded-full"></div>
        {renderGrid(ciencia)}
      </div>

      <div id="material-4" className="scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase max-w-7xl mx-auto mb-8 ml-4 px-4">4. Mantenimiento y Taller</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 mb-8 ml-4 rounded-full"></div>
        {renderGrid(mantenimiento)}
      </div>

      <div id="material-5" className="scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase max-w-7xl mx-auto mb-8 ml-4 px-4">5. Restos de Comida</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 mb-8 ml-4 rounded-full"></div>
        {renderGrid(comida)}
      </div>

      <div id="material-6" className="scroll-mt-24">
        <h3 className="text-2xl font-bold uppercase max-w-7xl mx-auto mb-8 ml-4 px-4">6. Higiene y Otros</h3>
        <div className="w-20 h-1.5 bg-emerald-500 mt-2 mb-8 ml-4 rounded-full"></div>
        {renderGrid(higiene)}

      {/* ==========================================
          SECCIÓN II: SEGREGACIÓN POR COLOR
          (ESTA SECCIÓN CONSTA DE 7 TÍTULOS Y SE MANTIENE INTACTA)
          ========================================== */}
      <div id="seccion-color" className="max-w-7xl mx-auto mb-14 mt-32 p-8 bg-blue-500/10 rounded-[3rem] border border-blue-500/20 scroll-mt-24 shadow-2xl">
        <h2 className="text-3xl font-black uppercase tracking-widest text-blue-400">II. Segregación por Color</h2>
      </div>

      {/* 1. TACHO MARRÓN */}
      <div className="max-w-7xl mx-auto mb-20 bg-amber-900/5 border border-amber-800/20 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-amber-600 uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-12 bg-amber-600 rounded-full"></span>
            1. TACHO DE ORGÁNICOS (MARRÓN)
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            En este contenedor se depositan todos los desechos de origen biológico que pueden degradarse naturalmente.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-emerald-400 font-black uppercase mb-8 text-xl"><CheckCircle2 /> ¿Qué ingresa?</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><strong>Desechos de cocina:</strong> Sobrantes de comida procesada, carnes, huesos y cáscaras (sin líquidos).</li>
              <li><strong>Hojas</strong> </li>
              <li><strong>Granos:</strong>.</li>
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-red-400 font-black uppercase mb-8 text-xl"><XCircle /> ¿Qué NO ingresa?</h4>
            <p className="text-slate-300 text-sm">Líquidos (al desague por el caño), Servilletas usadas, Aceite de cocina usado (es un líquido contaminante), Excrementos, Madera trada con barniz</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
          <IconItem icon={Apple} label="Vegetales" color="amber-600" />
          <IconItem icon={Drumstick} label="Carnes" color="amber-600" />
          <IconItem icon={Coffee} label="Cafetería" color="amber-600" />
          <IconItem icon={Leaf} label="Hojas" color="amber-600" />
        </div>
      </div>

      {/* 2. TACHO AMARILLO */}
      <div className="max-w-7xl mx-auto mb-20 bg-yellow-900/5 border border-yellow-500/20 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-yellow-400 uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-12 bg-yellow-400 rounded-full"></span>
            2. TACHO DE PAPEL (AMARILLO)
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">Materiales celulósicos y envases compuestos limpios y secos.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-emerald-400 font-black uppercase mb-8 text-xl"><CheckCircle2 /> ¿Qué ingresa?</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><strong>Papelería:</strong> Hojas bond, cuadernos, agendas, revistas y periódicos.</li>
              <li><strong>Empaques:</strong> Cajas de cartón, cereales, tubos de papel y javas de huevo.</li>
              <li><strong>Bebidas:</strong> Cajas de leche, jugos y néctares (Tetra Pak).</li>
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-red-400 font-black uppercase mb-8 text-xl"><XCircle /> ¿Qué NO ingresa?</h4>
            <p className="text-slate-300 text-sm">Papel plastificados, servilletas sucias o cartones con restos de comida pegada, Papel térmico de boletas</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
          <IconItem icon={FileText} label="Hojas" color="yellow-400" />
          <IconItem icon={Box} label="Cajas" color="yellow-400" />
          <IconItem icon={Newspaper} label="Revistas" color="yellow-400" />
          <IconItem icon={Milk} label="Tetra Pak" color="yellow-400" />
        </div>
      </div>

      {/* 3. TACHO AZUL */}
      <div className="max-w-7xl mx-auto mb-20 bg-blue-900/5 border border-blue-500/20 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-blue-500 uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-12 bg-blue-500 rounded-full"></span>
            3. Tacho AZUL: Metales y Aluminio
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">Elementos metálicos que pueden fundirse y reutilizarse infinitamente.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-emerald-400 font-black uppercase mb-8 text-xl"><CheckCircle2 /> ¿Qué ingresa?</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><strong>Conserva y Bebida:</strong> Latas de atún, leche, frutas, refrescos y cervezas.</li>
              <li><strong>Hogar:</strong> Ollas viejas, herramientas rotas, tuercas, tornillos y resortes.</li>
              <li><strong>Industriales:</strong> Tuberías, perfiles, barriles y aerosoles.</li>
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-red-400 font-black uppercase mb-8 text-xl"><XCircle /> ¿Qué NO ingresa?</h4>
            <p className="text-slate-300 text-sm">Pilas o baterías (residuos peligrosos) ni latas de pintura tóxica.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
          <IconItem icon={Container} label="Latas" color="blue-500" />
          <IconItem icon={Wrench} label="Ferretería" color="blue-500" />
          <IconItem icon={Component} label="Piezas" color="blue-500" />
          <IconItem icon={ZapOff} label="No Pilas" color="blue-500" />
        </div>
      </div>

      {/* 4. TACHO BLANCO */}
      <div className="max-w-7xl mx-auto mb-20 bg-slate-100/5 border border-white/20 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-12 bg-white rounded-full"></span>
            4. Tacho BLANCO: Plásticos
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">Plásticos rígidos específicos (PET, HDPE, PP).</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-emerald-400 font-black uppercase mb-8 text-xl"><CheckCircle2 /> ¿Qué ingresa?</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><strong>Botellas:</strong> Agua, gaseosas, aceites, lavavajillas y detergentes.</li>
              <li><strong>Higiene:</strong> Envases de shampoo, cremas y medicamentos plásticos.</li>
              <li><strong>Alimentos:</strong> Botellas de yogurt y potes de mantequilla.</li>
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-red-400 font-black uppercase mb-8 text-xl"><XCircle /> ¿Qué NO ingresa?</h4>
            <p className="text-slate-300 text-sm">Bolsas de plástico o plásticos con restos, Envoltorios de galletas o golosinas y Envases de productos tóxicos.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
          <IconItem icon={Droplets} label="Líquidos" color="white" />
          <IconItem icon={Dna} label="Cuidado" color="white" />
          <IconItem icon={Milk} label="Lácteos" color="white" />
          <IconItem icon={FlaskConical} label="Limpieza" color="white" />
        </div>
      </div>

      {/* 5. TACHO NEGRO */}
      <div className="max-w-7xl mx-auto mb-20 bg-slate-900 border border-white/10 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-slate-400 uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-12 bg-slate-600 rounded-full"></span>
            5. TACHO DE NO RECICLAblES (NEGRO)
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">Residuos que por su composición o suciedad no pueden ser reciclados.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-emerald-400 font-black uppercase mb-8 text-xl"><CheckCircle2 /> ¿Qué ingresa?</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><strong>Higiene:</strong> Papel higiénico usado, toallitas y servilletas sucias.</li>
              <li><strong>Snacks:</strong> Envoltorios de dulces, snacks, bolsas comunes y chicles.</li>
              <li><strong>Otros:</strong> Tecnopor, colillas de cigarro y cartones.</li>
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-red-400 font-black uppercase mb-8 text-xl"><XCircle /> ¿Qué NO ingresa?</h4>
            <p className="text-slate-400 text-sm">Vasos de papel o cartón (papel, cartón y tetra), Plásticos con comida, Líquidos</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
          <IconItem icon={Trash2} label="Aseo" color="slate-400" />
          <IconItem icon={Cigarette} label="Cigarro" color="slate-400" />
          <IconItem icon={Ghost} label="Tecnopor" color="slate-400" />
          <IconItem icon={Wind} label="Limpieza" color="slate-400" />
        </div>
      </div>

      {/* 6. TACHO ROJO - LABORATORIO */}
      <div className="max-w-7xl mx-auto mb-20 bg-red-900/5 border border-red-500/20 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-black text-red-500 uppercase mb-12 flex items-center gap-4">
          <span className="w-4 h-12 bg-red-500 rounded-full"></span>
          Tacho ROJO: Peligrosos de Laboratorio
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-emerald-400 font-black uppercase mb-8 text-xl"><CheckCircle2 /> ¿Qué ingresa?</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><strong>Cristalería:</strong> Frascos, matraces y tubos rotos.</li>
              <li><strong>Químicos:</strong> Reactivos vencidos y envases tóxicos/corrosivos.</li>
              <li><strong>Bio/Insumos:</strong> Placas Petri, bisturís, jeringas, guantes de nitrilo y mascarillas.</li>
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-red-400 font-black uppercase mb-8 text-xl"><XCircle /> ¿Qué NO ingresa?</h4>
            <p className="text-slate-300 text-sm">Residuos de oficina, papel limpio o envases de comida de analistas.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
          <IconItem icon={FlaskRound} label="Vidrio" color="red-500" />
          <IconItem icon={TestTube2} label="Reactivos" color="red-500" />
          <IconItem icon={AlertTriangle} label="Tóxicos" color="red-500" />
          <IconItem icon={Syringe} label="Insumos" color="red-500" />
        </div>
      </div>

      {/* 7. TACHO ROJO - TÓPICO */}
      <div className="max-w-7xl mx-auto mb-24 bg-red-900/5 border border-red-600/20 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-black text-red-600 uppercase mb-12 flex items-center gap-4">
          <span className="w-4 h-12 bg-red-600 rounded-full"></span>
          Tacho ROJO: Biocontaminados (Tópico)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-emerald-400 font-black uppercase mb-8 text-xl"><CheckCircle2 /> ¿Qué ingresa?</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><strong>Material de Curación:</strong> Gasas, vendas, apósitos e hisopos con sangre/fluidos.</li>
              <li><strong>EPP Sanitario:</strong> Mascarillas, guantes de látex, cofias y mandiles usados.</li>
              <li><strong>Primeros Auxilios:</strong> Curitas, parches y bajalenguas usados.</li>
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
            <h4 className="flex items-center gap-3 text-red-400 font-black uppercase mb-8 text-xl"><XCircle /> ¿Qué NO ingresa?</h4>
            <p className="text-slate-300 text-sm">Cajas de cartón (Amarillo) o envoltorios de jeringas nuevas.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
          <IconItem icon={Stethoscope} label="Sanitario" color="red-600" />
          <IconItem icon={Thermometer} label="Médico" color="red-600" />
          <IconItem icon={HeartPulse} label="Fluidos" color="red-600" />
          <IconItem icon={Activity} label="Atención" color="red-600" />
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© 2026 Programa Nacional Antártico - Gestión Ambiental ECAMP</p>
        <p className="text-xs text-slate-600">
          Diseño y Desarrollo: <a target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-semibold">Alberto Sarapura G.</a>
        </p>
      </footer>
    </div>
    </div>
  );
}