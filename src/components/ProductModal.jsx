import { useEffect, useState } from 'react'
import { X, Shirt } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { DEFAULT_WHATSAPP_MESSAGE, getWhatsAppLink } from '../data/siteData'

// Fiche détail produit affichée en modal au clic sur une ProductCard.
// Permet de choisir une taille avant d'envoyer la commande sur WhatsApp.
export default function ProductModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? null)

  // Réinitialise la taille sélectionnée à chaque nouveau produit ouvert.
  useEffect(() => {
    setSelectedSize(product?.sizes?.[0] ?? null)
  }, [product])

  // Ferme au clavier (Échap) et bloque le scroll du body pendant l'affichage.
  useEffect(() => {
    if (!product) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [product, onClose])

  if (!product) return null

  const message = selectedSize
    ? `${DEFAULT_WHATSAPP_MESSAGE} : ${product.name} (taille ${selectedSize})`
    : `${DEFAULT_WHATSAPP_MESSAGE} : ${product.name}`

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative bg-zinc-950 border border-gold/25 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/60 animate-fadeInUp">
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] sm:aspect-auto bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
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
          </div>

          {/* Détails */}
          <div className="p-6 sm:p-8 flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-black text-white leading-snug pr-8">
                {product.name}
              </h3>
              <p className="text-gold font-extrabold text-2xl mt-2">
                {product.price} DH
              </p>
            </div>

            {product.description && (
              <p className="text-gray-400 text-sm leading-relaxed">
                {product.description}
              </p>
            )}

            {product.sizes?.length > 0 && (
              <div>
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Choisissez votre taille
                </span>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 rounded-lg text-sm font-semibold border transition-all ${
                        selectedSize === size
                          ? 'bg-gold-gradient text-black border-gold'
                          : 'border-gray-600 text-gray-300 hover:border-gold hover:text-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <a
              href={getWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 bg-gold-gradient text-black font-semibold py-3 rounded-full hover:brightness-110 transition-all"
            >
              <FaWhatsapp size={19} />
              Commander via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
