import { MapPin, Clock } from 'lucide-react'
import Reveal from './Reveal'
import { DELIVERY_CITIES } from '../data/siteData'

export default function Delivery() {
  return (
    <section id="livraison" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-6">
          <p className="uppercase tracking-[0.3em] text-gold text-sm font-semibold mb-3">
            Partout au Maroc
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Livraison
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            On livre dans toutes les villes du Maroc. Vous payez seulement à la
            réception, en toute confiance. Les délais varient selon votre
            localisation.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {DELIVERY_CITIES.map((item, index) => (
            <Reveal key={item.city} delay={index * 60}>
              <div className="h-full bg-zinc-950 border border-gold/15 rounded-xl p-5 hover:border-gold/50 transition-all duration-300 flex flex-col items-center text-center gap-2">
                <MapPin size={22} className="text-gold" strokeWidth={1.75} />
                <span className="font-semibold text-white">{item.city}</span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock size={14} />
                  {item.delay}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center text-gray-500 text-sm mt-10">
            Frais de livraison calculés selon votre ville — communiqués par nos
            équipes au moment de la commande.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
