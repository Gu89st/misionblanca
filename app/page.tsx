const categories = [
  { 
    title: "Bebidas y Envases Alimentarios", 
    image: "./Docs/Bebidas.png" 
  },
  { 
    title: "Empaques y Papelería", 
    image: "./Docs/Empaques.png" 
  },
  { 
    title: "Ciencia y Laboratorio", 
    image: "./Docs/Ciencia.png" 
  },
  { 
    title: "Mantenimiento y Taller", 
    image: "./Docs/Mantenimiento.png" 
  },
  { 
    title: "Restos de Comida", 
    image: "./Docs/Restos.png" 
  },
  { 
    title: "Higiene y Otros", 
    image: "./Docs/Higene.png" 
  },
];

export default function SegregacionPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mt-20">
      <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
        <span className="w-8 h-0.5 bg-emerald-500"></span>
        Segregación: Explora y Aprende
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div 
            key={index}
            className="aspect-video rounded-3xl overflow-hidden border-2 border-white/40 cursor-pointer hover:border-blue-500 transition-all group relative shadow-lg"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent flex items-end p-6">
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}