import useReveal from '../hooks/useReveal'

// Wrapper réutilisable qui applique un fade-in au scroll à ses enfants.
// delay en ms permet d'échelonner les animations (effet de cascade sur les grilles).
export default function Reveal({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
