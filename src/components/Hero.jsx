import { ArrowDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.jpg'
import { getWhatsAppLink } from '../data/siteData'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Logo en fond, flouté et assombri */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm scale-110"
        style={{ backgroundImage: `url(${logo})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

      {/* Halo doré décoratif */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fadeInUp">
        <img
          src={logo}
          alt="Casual"
          className="w-24 h-24 mx-auto rounded-full object-cover ring-4 ring-gold shadow-2xl shadow-gold/30 mb-8"
        />

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-3">
          CASU<span className="text-gold">AL</span>
        </h1>
        <p className="uppercase tracking-[0.4em] text-gold font-semibold text-sm sm:text-base mb-6">
          Authentic Products
        </p>

        <p className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto mb-10">
          Vêtements homme authentiques, livrés partout au Maroc.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#collections"
            className="w-full sm:w-auto bg-gold-gradient text-black font-bold px-8 py-3.5 rounded-full hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-gold/20"
          >
            Voir la collection
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-bold px-8 py-3.5 rounded-full hover:bg-gold hover:text-black transition-all"
          >
            <FaWhatsapp size={19} />
            Commander sur WhatsApp
          </a>
        </div>
      </div>

      <a
        href="#collections"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70 hover:text-gold animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  )
}
