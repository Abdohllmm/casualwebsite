import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.jpg'
import { NAV_LINKS, getWhatsAppLink } from '../data/siteData'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-black/50 py-3'
          : 'bg-black/70 backdrop-blur-sm py-5'
      } border-b border-gold/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Logo Casual"
            className="w-11 h-11 rounded-full object-cover ring-2 ring-gold group-hover:ring-gold-light transition-all"
          />
          <span className="text-xl font-extrabold tracking-widest text-white">
            CASUAL
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-gray-200 hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gold-gradient text-black font-semibold text-sm px-4 py-2 rounded-full hover:brightness-110 hover:scale-105 transition-all shadow-md shadow-gold/20"
          >
            <FaWhatsapp size={17} />
            WhatsApp
          </a>

          <button
            className="md:hidden text-gold p-1"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-5 px-4 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-base font-medium uppercase tracking-wider text-gray-200 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2 bg-gold-gradient text-black font-semibold text-sm px-5 py-2.5 rounded-full"
          >
            <FaWhatsapp size={17} />
            Commander sur WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
