# CASUAL — Site vitrine

Site vitrine pour la boutique de vêtements homme **CASUAL** (Instagram [@casual__2mars](https://instagram.com/casual__2mars)), fondée en 2013.

## Stack

- React 18 + Vite
- Tailwind CSS
- lucide-react (icônes UI) + react-icons (icône WhatsApp)

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrez l'URL affichée (par défaut http://localhost:5173).

## Build de production

```bash
npm run build
npm run preview
```

## À personnaliser avant mise en ligne

- **Numéro WhatsApp** : dans [src/data/siteData.js](src/data/siteData.js), remplacez `WHATSAPP_NUMBER` (actuellement un placeholder `212600000000`) par le vrai numéro au format `212XXXXXXXXX`.
- **Photos produits** : dans le même fichier, ajoutez une clé `image` à chaque objet de `PRODUCTS` (import depuis `src/assets/`) pour remplacer les placeholders.
- **Lien Facebook** : dans [src/components/Footer.jsx](src/components/Footer.jsx), l'icône Facebook pointe vers `#` — à mettre à jour si vous avez une page.

## Structure

```
src/
  assets/         → logo.jpg
  components/     → Header, Hero, ProductCard, Collections, WhyChooseUs,
                     Delivery, Footer, WhatsAppButton, Reveal
  data/           → siteData.js (contenu centralisé : produits, villes, liens)
  hooks/          → useReveal.js (animation fade-in au scroll)
```
