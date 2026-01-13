import React from 'react';

// Definimos la estructura de los datos para TypeScript
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
    imagen: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    pregunta: "El pingüino emperador es único de la Antártida",
    descripcion: "Su ciclo de vida depende estrictamente de la estabilidad del hielo marino.",
    imagen: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    pregunta: "El turismo deja una huella en el continente blanco",
    descripcion: "Las normas internacionales buscan reducir el impacto humano directo.",
    imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
];

export default function DatosCuriososPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      
      {/* Encabezado Principal */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">
          Datos Curiosos
        </h1>
        <p className="text-slate-400 text-sm">
          Información vital sobre el impacto ambiental y la vida silvestre.
        </p>
      </header>

      {/* Grid de Tarjetas Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {datos.map((item) => (
          <article 
            key={item.id} 
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 hover:border-blue-500/40 transition-all duration-500"
          >
            {/* Contenedor de Imagen */}
            <div className="h-52 overflow-hidden relative">
              <img 
                src={item.imagen} 
                alt={item.pregunta}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
            </div>

            {/* Contenido de Texto */}
            <div className="p-8">
              <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-blue-400 transition-colors">
                {item.pregunta}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Footer de la Sección */}
      <footer className="mt-20 text-center text-[10px] text-slate-500 uppercase tracking-[0.3em]">
        Versión 1.0.4 • Estación Polar Científica
      </footer>
    </div>
  );
}