import React from 'react';

const documentos = [
  {
    titulo: "Flora y Fauna de la base antártica",
    imagen: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
  },
  {
    titulo: "Protocolo de Madrid",
    imagen: "https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?auto=format&fit=crop&q=80&w=400",
  },
  {
    titulo: "Treaty Original",
    imagen: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400",
  }
];

export default function BibliotecaPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20 pt-10">
      
      {/* ENCABEZADO: IDÉNTICO A TU SEGUNDA IMAGEN */}
      <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Biblioteca Virtual
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl">
            Manuales, guías técnicas y protocolos de la misión.
          </p>
        </div>

        <div className="hidden md:block ">
          <div className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-[15px] font-bold text-blue-400 tracking-widest uppercase">
            {documentos.length} DOCUMENTOS DISPONIBLES
          </div>
        </div>
      </header>

      {/* GRID DE DOCUMENTOS: RESPONSIVE CORREGIDO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {documentos.map((doc, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Contenedor de la Tarjeta */}
            <div className="aspect-3/4 bg-slate-900 rounded-2xl border-2 border-white/10 overflow-hidden relative shadow-2xl group-hover:border-blue-500/50 group-hover:-translate-y-2 transition-all duration-500">
              
              {/* LA IMAGEN: AQUÍ ESTABA EL ERROR (Cambiado de .image a .imagen) */}
              <img 
                src={doc.imagen} 
                alt={doc.titulo}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
              />
              
              {/* Degradado y Texto Inferior */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                <span 
                  className="text-[11px] font-bold uppercase tracking-widest leading-tight text-white"
                  dangerouslySetInnerHTML={{ __html: doc.titulo.replace(" de la ", " de la <br>") }} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}