// Centralise les infos de la boutique pour éviter de dupliquer les mêmes
// valeurs dans plusieurs composants.

import product1 from '../assets/products/product1.png'
import product2 from '../assets/products/product2.png'
import product3 from '../assets/products/product3.png'
import product4 from '../assets/products/product4.png'
import product5 from '../assets/products/product5.png'
import product6 from '../assets/products/product6.png'

export const WHATSAPP_NUMBER = '212600000000' // TODO: remplacer par le vrai numéro
export const INSTAGRAM_HANDLE = '@casual__2mars'
export const INSTAGRAM_URL = 'https://instagram.com/casual__2mars'

export const DEFAULT_WHATSAPP_MESSAGE =
  'Bonjour, je suis intéressé par un produit Casual'

export function getWhatsAppLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Collections', href: '#collections' },
  { label: 'Livraison', href: '#livraison' },
  { label: 'Contact', href: '#contact' },
]

export const PRODUCTS = [
  {
    id: 1,
    image: product1,
    name: 'Cardigan Zippé Gris',
    price: 429,
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Cardigan zippé en maille fine chinée, coupe droite et col chemise. Parfait pour un look casual chic à porter sur une chemise ou seul.',
  },
  {
    id: 2,
    image: product2,
    name: 'T-shirt Signature Marine',
    price: 219,
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'T-shirt 100% coton bleu marine avec broderie logo sur la poitrine. Coupe droite, matière respirante, idéal pour un usage quotidien.',
  },
  {
    id: 3,
    image: product3,
    name: 'T-shirt Signature Ciel',
    price: 219,
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Même coupe que notre best-seller, en bleu ciel. T-shirt 100% coton avec broderie logo, doux et confortable toute la journée.',
  },
  {
    id: 4,
    image: product4,
    name: 'Chemise Lin Blanche',
    price: 289,
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Chemise en lin léger, coupe droite et col italien. Une pièce intemporelle, fraîche et élégante pour toutes les occasions.',
  },
  {
    id: 5,
    image: product5,
    name: 'T-shirt Oversize Noir',
    price: 199,
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'T-shirt oversize noir en coton épais, col rond renforcé. La base parfaite pour un style streetwear décontracté.',
  },
  {
    id: 6,
    image: product6,
    name: 'Pantalon Chino Gris',
    price: 299,
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Pantalon chino gris coupe droite, taille cordon ajustable et matière légère infroissable. Confort et style pour toute la journée.',
  },
]

export const DELIVERY_CITIES = [
  { city: 'Casablanca', delay: '24h' },
  { city: 'Rabat', delay: '24h' },
  { city: 'Marrakech', delay: '24-48h' },
  { city: 'Fès', delay: '48h' },
  { city: 'Tanger', delay: '48h' },
  { city: 'Agadir', delay: '48-72h' },
  { city: 'Oujda', delay: '48-72h' },
  { city: 'Autres villes', delay: '2-4 jours' },
]
