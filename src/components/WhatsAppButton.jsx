import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppLink } from '../data/siteData'

// Bouton flottant fixe, visible sur toute la page.
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 hover:scale-110 active:scale-95 transition-transform animate-pulse hover:animate-none"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}
