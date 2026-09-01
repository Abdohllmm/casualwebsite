import { Instagram, Facebook } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.jpg'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  getWhatsAppLink,
} from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()
  const formattedNumber = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 4)} ${WHATSAPP_NUMBER.slice(4, 6)} ${WHATSAPP_NUMBER.slice(6, 8)} ${WHATSAPP_NUMBER.slice(8, 10)} ${WHATSAPP_NUMBER.slice(10)}`

  return (
    <footer id="contact" className="bg-zinc-950 border-t border-gold/15 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <img
          src={logo}
          alt="Casual"
          className="w-16 h-16 rounded-full object-cover ring-2 ring-gold"
        />

        <div>
          <h3 className="text-2xl font-black text-white tracking-widest">
            CASU<span className="text-gold">AL</span>
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Vêtements homme authentiques — livrés partout au Maroc depuis 2013.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/40 text-gray-200 hover:text-gold hover:border-gold px-5 py-2.5 rounded-full transition-all text-sm font-medium"
          >
            <Instagram size={18} />
            {INSTAGRAM_HANDLE}
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-black font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition-all text-sm"
          >
            <FaWhatsapp size={18} />
            {formattedNumber}
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gold/40 text-gray-200 hover:text-gold hover:border-gold transition-all"
            aria-label="Facebook Casual"
          >
            <Facebook size={18} />
          </a>
        </div>

        <div className="w-full border-t border-gold/10 pt-6 mt-4">
          <p className="text-gray-500 text-xs">
            © {year} CASUAL. Tous droits réservés. Produits authentiques,
            depuis 2013.
          </p>
        </div>
      </div>
    </footer>
  )
}
