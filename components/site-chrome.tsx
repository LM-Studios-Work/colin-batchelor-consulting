const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sig-2J1XEymLTGNjD9CKHsHTHxgX5UST5S.jpg'

const clients = ['RAND WATER', 'SASOL', 'SANRAL', 'CESA', 'ESKOM']

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="/#top" className="brand" aria-label="Colin Batchelor Consulting home">
        <img src={logoUrl} alt="Colin Batchelor Consulting" />
      </a>
      <nav aria-label="Primary navigation">
        <a href="/about">About</a>
        <details className="nav-menu"><summary>Services</summary><div className="nav-dropdown"><a href="/#services">Project Management</a><a href="/#services">Interim Management</a><a href="/#services">Business Development</a></div></details>
        <a href="/#experience">Experience</a>
        <a href="/#projects">Reference Projects</a>
        <a href="/#faq">Testimonials</a>
      </nav>
      <a className="contact-button" href="/#contact">Contact</a>
    </header>
  )
}

export function ClientsStrip() {
  return (
    <section className="clients" aria-labelledby="clients-heading">
      <p className="eyebrow">SELECTED CLIENTS</p>
      <h2 id="clients-heading">Trusted by teams delivering essential infrastructure.</h2>
      <div className="client-list" role="list">
        {clients.map((client) => <span key={client} role="listitem">{client}</span>)}
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand"><img src={logoUrl} alt="Colin Batchelor Consulting" /><p>Complex infrastructure. Clear leadership.</p></div>
      <div className="footer-links"><strong>Navigate</strong><a href="/about">About</a><a href="/#services">Services</a><a href="/#projects">Reference Projects</a><a href="/#faq">FAQs</a></div>
      <div className="footer-links"><strong>Services</strong><a href="/#services">Project Management</a><a href="/#services">Interim Management</a><a href="/#services">Business Development</a></div>
      <div className="footer-contact"><span>Available for senior assignments</span><a href="mailto:colin@colinbatchelor.com">colin@colinbatchelor.com</a><span>CEng · PMP · FIMWSA</span></div>
    </footer>
  )
}
