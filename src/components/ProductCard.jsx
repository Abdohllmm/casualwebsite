import { Shirt, Eye } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { DEFAULT_WHATSAPP_MESSAGE, getWhatsAppLink } from '../data/siteData'

// Carte produit réutilisable.
// image est optionnelle : tant que les vraies photos ne sont pas fournies,
// on affiche un placeholder élégant noir/doré avec une icône.
// onViewDetails ouvre la fiche détail (ProductModal) avec le produit complet.
export default function ProductCard({ image, name, price, sizes = [], onViewDetails }) {
  const message = `${DEFAULT_WHATSAPP_MESSAGE} : ${name}`

  return (
    <div className="group bg-zinc-950 border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 flex flex-col">
      {/* Image ou placeholder, cliquable pour voir le détail */}
      <button
        type="button"
        onClick={onViewDetails}
        className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900 w-full text-left"
        aria-label={`Voir le détail de ${name}`}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gold-gradient/20 border border-gold/30 flex items-center justify-center">
              <Shirt size={36} className="text-gold" strokeWidth={1.5} />
            </div>
            <span className="text-gold/40 text-xs uppercase tracking-widest">
              Photo à venir
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <span className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm font-semibold uppercase tracking-wider">
          <Eye size={18} />
          Voir le détail
        </span>
      </button>

      {/* Infos produit */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-bold text-white text-lg leading-snug">{name}</h3>

        <div className="flex items-center justify-between">
          <span className="text-gold font-extrabold text-xl">{price} DH</span>
          <div className="flex gap-1.5">
            {sizes.map((size) => (
              <span
                key={size}
                className="text-xs font-semibold text-gray-300 border border-gray-600 rounded-md w-7 h-7 flex items-center justify-center"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <a
          href={getWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-gold-gradient text-black font-semibold text-sm py-2.5 rounded-full hover:brightness-110 transition-all"
        >
          <FaWhatsapp size={17} />
          Commander via WhatsApp
        </a>
      </div>
    </div>
  )
}
