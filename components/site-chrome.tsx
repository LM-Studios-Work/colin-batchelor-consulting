'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sig-2J1XEymLTGNjD9CKHsHTHxgX5UST5S.jpg'

const clients = ['RAND WATER', 'SASOL', 'SANRAL', 'CESA', 'ESKOM']

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isServices = pathname.startsWith('/services')

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }
      if (event.key !== 'Tab' || !menuRef.current) return
      const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    menuRef.current?.querySelector<HTMLElement>('button, a')?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      triggerRef.current?.focus()
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)
  const linkClass = (active: boolean) => `mobile-nav-link${active ? ' nav-active' : ''}`

  return (
    <header className="site-header">
      <a href="/#top" className="brand" aria-label="Colin Batchelor Consulting home">
        <img src={logoUrl} alt="Colin Batchelor Consulting" />
      </a>
      <nav aria-label="Primary navigation">
        <a href="/about" className={isAbout ? 'nav-active' : ''}>About</a>
        <details className="nav-menu"><summary className={isServices ? 'nav-active' : ''}><a href="/services">Services</a></summary><div className="nav-dropdown"><a href="/services/project-management">Project Management</a><a href="/services#interim-management">Interim Management</a><a href="/services#business-development">Business Development</a></div></details>
        <a href="/#experience" className={isHome ? 'nav-active-home' : ''}>Experience</a>
        <a href="/#projects" className={isHome ? 'nav-active-home' : ''}>Reference Projects</a>
        <a href="/#faq" className={isHome ? 'nav-active-home' : ''}>Testimonials</a>
      </nav>
      <a className="contact-button desktop-contact" href="/#contact">Contact</a>
      <button ref={triggerRef} className="mobile-menu-trigger" type="button" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      {isOpen && <div className="mobile-nav-backdrop" aria-hidden="true" onClick={closeMenu} />}
      <aside ref={menuRef} id="mobile-navigation" className={`mobile-nav-panel${isOpen ? ' is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!isOpen}>
        <div className="mobile-nav-header"><span className="mobile-nav-label">Menu</span><button type="button" className="mobile-nav-close" onClick={closeMenu} aria-label="Close navigation menu">×</button></div>
        <nav className="mobile-nav-links" aria-label="Mobile primary navigation">
          <a href="/about" className={linkClass(isAbout)} onClick={closeMenu}>About</a>
          <a href="/services" className={linkClass(isServices)} onClick={closeMenu}>Services</a>
          <a href="/services/project-management" onClick={closeMenu}>Project Management</a>
          <a href="/services#interim-management" onClick={closeMenu}>Interim Management</a>
          <a href="/services#business-development" onClick={closeMenu}>Business Development</a>
          <a href="/#experience" className={linkClass(isHome)} onClick={closeMenu}>Experience</a>
          <a href="/#projects" className={linkClass(isHome)} onClick={closeMenu}>Reference Projects</a>
          <a href="/#faq" className={linkClass(isHome)} onClick={closeMenu}>Testimonials</a>
        </nav>
        <a className="contact-button mobile-contact" href="/#contact" onClick={closeMenu}>Contact</a>
      </aside>
    </header>
  )
}

export function ClientsStrip() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir === 'right' ? 220 : -220, behavior: 'smooth' })
  }

  return (
    <section className="clients" aria-labelledby="clients-heading">
      <p className="eyebrow">SELECTED CLIENTS</p>
      <h2 id="clients-heading">Trusted by teams delivering essential infrastructure.</h2>
      <div className="logo-carousel">
        <button className="carousel-arrow" aria-label="Scroll left" onClick={() => scroll('left')}>&#8249;</button>
        <div className="logo-track" ref={trackRef} role="list">
          {clients.map((client) => (
            <span key={client} className="client-logo" role="listitem">{client}</span>
          ))}
        </div>
        <button className="carousel-arrow" aria-label="Scroll right" onClick={() => scroll('right')}>&#8250;</button>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand"><img src={logoUrl} alt="Colin Batchelor Consulting" /><p>Complex infrastructure. Clear leadership.</p></div>
      <div className="footer-links"><strong>Navigate</strong><a href="/about">About</a><a href="/#services">Services</a><a href="/#projects">Reference Projects</a><a href="/#faq">FAQs</a></div>
      <div className="footer-links"><strong>Services</strong><a href="/services">All services</a><a href="/services/project-management">Project Management</a><a href="/services#interim-management">Interim Management</a><a href="/services#business-development">Business Development</a></div>
      <div className="footer-contact"><span>Available for senior assignments</span><a href="mailto:colin@colinbatchelor.com">colin@colinbatchelor.com</a><span>CEng · PMP · FIMWSA</span></div>
    </footer>
  )
}
