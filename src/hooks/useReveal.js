import { useEffect, useRef, useState } from 'react'

// Hook simple pour déclencher une animation fade-in dès qu'un élément
// entre dans le viewport. Pas de dépendance externe, juste l'API native
// IntersectionObserver.
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, isVisible }
}
