import { useState } from 'react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import Reveal from './Reveal'
import { PRODUCTS } from '../data/siteData'

export default function Collections() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section id="collections" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-gold text-sm font-semibold mb-3">
            Boutique
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Nos Collections
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Des pièces sélectionnées avec soin pour un style casual et affirmé.
            Stocks limités, commande directe via WhatsApp.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={index * 80}>
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                sizes={product.sizes}
                onViewDetails={() => setSelectedProduct(product)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
