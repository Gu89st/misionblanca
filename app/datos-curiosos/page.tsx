import { ArrowRight, FileText, Youtube } from "lucide-react";

interface DatoCurioso {
  id: number;
  pregunta: string;
  descripcion: string;
  imagen: string;
}

interface VideoAntartico {
  id: number;
  titulo: string;
  url: string;
}

const datos: DatoCurioso[] = [
  {
    id: 1,
    pregunta: "¿Sabías que un plástico tarda 500 años en degradarse?",
    descripcion: "Cada residuo mal gestionado en la base puede afectar el ecosistema por siglos.",
    imagen: "./Docs/BOLETIN_GLACIARES.png",
  },
  {
    id: 2,
    pregunta: "El pingüino emperador es único de la Antártida",
    descripcion: "Su ciclo de vida depende estrictamente de la estabilidad del hielo marino.",
    imagen: "./Docs/Compromiso.jpg",
  },
];

const videos: VideoAntartico[] = [
  { id: 1, titulo: "Video Principal: Expedición Antártida", url: "https://www.youtube.com/embed/g1eh5W0CQC8" },
  { id: 2, titulo: "Antártida: Un continente para la ciencia", url: "https://www.youtube.com/watch?v=wlqCkeeVzXg" },
  { id: 3, titulo: "Lo que esconde la Antártida | Importancia", url: "https://www.youtube.com/embed/VukULE056Mc" },
  { id: 4, titulo: "Residuos plásticos en la Antártida", url: "https://www.youtube.com/embed/zftEPo2kJ-I" },
  { id: 5, titulo: "Antarctica: End of the Earth | ITV News", url: "https://www.youtube.com/embed/2KbPRSnJfhQ" },
  { id: 6, titulo: "Our Planet | Frozen Worlds | Netflix", url: "https://www.youtube.com/embed/cTQ3Ko9ZKg8" },
  { id: 7, titulo: "Antártida: Cuentos del fin del mundo", url: "https://www.youtube.com/embed/KPehrNUREIU" },
  { id: 8, titulo: "Cambio Climático", url: "https://www.youtube.com/embed/z4vHLa36Wsg" },
  { id: 9, titulo: "Lemon (Plásticos)", url: "https://www.youtube.com/embed/c8c0sYQ87m8" }
];

export default function DatosCuriososPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-30 pt-5 font-sans">
      
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white uppercase">
          Datos Curiosos y Ciencia
        </h1>
        <p className="text-slate-400 text-base max-w-2xl">
          Recursos audiovisuales y documentos técnicos sobre el impacto ambiental y la vida en el continente blanco.
        </p>
      </header>

      {/* 1. SECCIÓN DE TARJETAS */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
          Sabías que...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {datos.map((item) => (
            <article key={item.id} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 hover:border-blue-500/40 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src={item.imagen} alt={item.pregunta} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">{item.pregunta}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
{/* --- NUEVO: VIDEO DESTACADO CENTRADO --- */}
  <div className="w-full max-w-4xl mx-auto mt-20 flex flex-col items-center"> {/* 1. Centrado General */}
      
      {/* TÍTULO */}
      <div className="flex items-center gap-1 mb-6"> {/* 2. Quitamos md:justify-start */}
          {/* Si quieres el icono de Youtube, impórtalo y úsalo aquí */}
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Video Destacado del Mes</span>
      </div>
      
      {/* VIDEO (Formato Celular) */}
      {/* Nota: Asegúrate de usar aspect-[3/4] con corchetes para Tailwind arbitrario */}
      <div className="relative aspect-3/4 w-full max-w-xs rounded-3xl overflow-hidden border-4 border-white/10 shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] bg-black ring-1 ring-white/20">
          <video 
            className="w-full h-full object-cover" 
            controls 
            preload="metadata"
          >
            <source src="/Docs/Video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
      </div>
      
      {/* TEXTO DESCRIPTIVO */}
      <p className="text-center text-slate-500 text-sm mt-6 italic max-w-xs">
          Descubre cómo es el día a día en una expedición científica antártica.
      </p>
</div>
      {/* 2. GALERÍA DE VIDEOS - FILAS DE 3 */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-red-500 rounded-full"></span>
          Documentales y Expediciones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-3">
              <div className="relative w-full aspect-video rounded-[1.8rem] overflow-hidden border border-white/10 shadow-2xl group">
                <iframe
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                  src={video.url}
                  title={video.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-start gap-2 px-2">
                <Youtube className="text-red-500 shrink-0 mt-0.5" size={16} />
                <p className="text-[11px] font-bold text-slate-200 uppercase tracking-wide leading-tight line-clamp-2">
                  {video.titulo}
                </p>
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