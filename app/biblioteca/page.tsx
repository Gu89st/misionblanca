import React from 'react';

const documentos = [
  {
    titulo: "Flora y Fauna de la base antártica",
    imagen: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&q=80&w=800",
    archivo: "./docs/Flora_y_fauna_de_la_base_antartica.pdf",
  },
  {
    titulo: "Protocolo de Madrid",
    imagen: "./docs/Protocolo_de_madrid.png.jpeg",
    archivo: "./docs/Protocolo_de_madrid.pdf",
  },
  {
    titulo: "Treaty Original",
    imagen: "./Docs/Tratado_Antartico.jpeg",
    archivo: "/docs/treaty_original.pdf",
  },
  // NUEVOS DOCUMENTOS AÑADIDOS
  {
    titulo: "Legado de microplásticos en la nieve antártica",
    imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    archivo: "./docs/MicroplasticsinAntarctica.pdf",
  },
  {
    titulo: "Microplásticos en el aire antártico: hallazgos actuales.",
    imagen: "./docs/AntartidaA.jpg",
    archivo: "./docs/microplasticsair.pdf",
  },
  {
    titulo: "Microfibras textiles en la fauna del mar de Ross.",
    imagen: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
    archivo: "./docs/Microfibrastextiles.pdf",
  }
];

export default function BibliotecaPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20 pt-10 font-sans">
      
      {/* ENCABEZADO */}
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase">
            Biblioteca Virtual
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl">
            Manuales, guías técnicas y protocolos de la misión.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-[13px] font-black text-blue-400 tracking-widest uppercase">
          {documentos.length} DOCUMENTOS DISPONIBLES
        </div>
      </header>

      {/* GRID DE DOCUMENTOS - Configurado en 3 columnas (lg:grid-cols-3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {documentos.map((doc, index) => (
          <a 
            key={index} 
            href={doc.archivo} 
            download 
            className="group cursor-pointer block"
            title={`Descargar ${doc.titulo}`}
          >
            {/* Contenedor tipo "Book Cover" */}
            <div className="aspect-3/4 bg-slate-900 rounded-4xl border-2 border-white/10 overflow-hidden relative shadow-2xl group-hover:border-blue-500 group-hover:-translate-y-3 transition-all duration-500 ease-out">
              
              <img 
                src={doc.imagen} 
                alt={doc.titulo}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              />

              {/* Overlay de degradado */}
              <div className="absolute inset-0 bg-lineaar-to-t from-black/95 via-black/40 to-transparent flex items-end p-8">
                <div className="flex flex-col gap-2">
                  <div className="w-8 h-1 bg-blue-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
                  <span 
                    className="text-[12px] md:text-[14px] font-black uppercase tracking-widest leading-tight text-white drop-shadow-lg"
                    dangerouslySetInnerHTML={{ __html: doc.titulo.replace(" de la ", " de la <br>") }} 
                  />
                  <p className="text-[10px] text-blue-400 font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    CLICK PARA DESCARGAR PDF
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <footer className="mt-20 text-center text-slate-600 text-[11px] uppercase tracking-widest">
        Programa Nacional Antártico - Sistema de Gestión Documental
      </footer>
    </main>
  );
}