import type { Metadata } from "next";
import Navbar from "./Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Misión Blanca",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">

      <body className="antialiased text-white selection:bg-blue-500/30">
        <Navbar />
        <main className="pt-24 md:pt-32 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </body>
    </html>
  );
}