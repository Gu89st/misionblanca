import type { Metadata } from "next";
import Navbar from "./Navbar";
import "./globals.css"; // Esto es lo que aplica el fondo y Tailwind

export const metadata: Metadata = {
  title: "Misión Blanca",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* Aplicamos las clases de Tailwind directamente aquí en lugar de usar @apply */}
      <body className="antialiased text-white selection:bg-blue-500/30">
        <Navbar />
        <main className="pt-24 md:pt-32 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </body>
    </html>
  );
}