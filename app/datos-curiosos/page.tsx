
interface DatoCurioso {
  id: number;
  pregunta: string;
  descripcion: string;
  imagen: string;
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

export default function DatosCuriososPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-30 pt-5">
      
      {/* Encabezado */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">
          Datos Curiosos
        </h1>
        <p className="text-slate-400 text-sm">
          Información vital sobre el impacto ambiental y la vida silvestre.
        </p>
      </header>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {datos.map((item) => (
          <article 
            key={item.id} 
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 hover:border-blue-500/40 transition-all duration-500"
          >
            {/* Contenedor de Imagen */}
            <div className="h-80 overflow-hidden relative">
              <img 
                src={item.imagen} 
                alt={item.pregunta}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-linear-to-t "></div>
            </div>

            {/* Contenido  */}
            <div className="p-8">
              <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-blue-400 transition-colors">
                {item.pregunta}
              </h3>
              <p className=" ">
                {item.descripcion}
              </p>
            </div>
          </article>
        ))}
        {/*Video YouTube */}
      
      </div>
      <section className="mt-20">
        <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/g1eh5W0CQC8"
            title="Video Antártida"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}