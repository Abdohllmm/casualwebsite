import { ShieldCheck, Truck, Wallet, CalendarCheck } from 'lucide-react'
import Reveal from './Reveal'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Produits authentiques',
    description: '100% originaux, sélectionnés et vérifiés avant chaque envoi.',
  },
  {
    icon: Truck,
    title: 'Livraison rapide',
    description: 'Partout au Maroc, de 24h à 4 jours selon votre ville.',
  },
  {
    icon: Wallet,
    title: 'Paiement à la livraison',
    description: 'Vous payez seulement à la réception de votre commande.',
  },
  {
    icon: CalendarCheck,
    title: 'Depuis 2013',
    description: 'Plus de 10 ans de confiance auprès de nos clients.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 py-24 px-6 border-y border-gold/10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-gold text-sm font-semibold mb-3">
            Confiance
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Pourquoi nous choisir
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.title} delay={index * 100}>
                <div className="h-full bg-black border border-gold/15 rounded-2xl p-7 text-center hover:border-gold/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold-gradient/10 border border-gold/30 flex items-center justify-center">
                    <Icon size={28} className="text-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
