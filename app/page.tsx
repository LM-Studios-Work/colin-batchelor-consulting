const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sig-2J1XEymLTGNjD9CKHsHTHxgX5UST5S.jpg'
const heroImage = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85'

const services = [
  { title: 'Project Management', items: ['Water and Sanitation', 'Power Generation and Distribution', 'Expert Witness'] },
  { title: 'Interim Management', items: ['Short Term Assignments', 'Business Rescue', 'Non-Executive Director'] },
  { title: 'Business Development', items: ['Strategy', 'Marketing and Sales', 'Executive Mentorship'] },
]

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Colin Batchelor Consulting home">
          <img src={logoUrl} alt="Colin Batchelor Consulting" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/about">About</a>
          <details className="nav-menu"><summary>Services</summary><div className="nav-dropdown"><a href="#services">Project Management</a><a href="#services">Interim Management</a><a href="#services">Business Development</a></div></details>
          <a href="#experience">Experience</a>
          <a href="#experience">Reference Projects</a>
          <a href="#faq">Testimonials</a>
        </nav>
        <a className="contact-button" href="#contact">Contact</a>
      </header>

      <section id="top" className="hero" aria-label="Introduction">
        <div className="hero-copy">
          <div className="red-rule" />
          <p className="eyebrow light">EXECUTIVE PROJECT DIRECTOR · CENG · PMP</p>
          <h1>Complex infrastructure.<br />Clear leadership.</h1>
          <p className="hero-detail">EPC · PMC · EPCM<br />Water, power, process, mining and urban infrastructure</p>
        </div>
        <div className="hero-image" role="img" aria-label="Aerial view of infrastructure works" />
      </section>

      <section id="profile" className="profile section-grid">
        <div className="profile-photo"><img src="/images/colin-batchelor-headshot.png" alt="Colin Batchelor" /></div>
        <div className="profile-text"><h2>Leadership for the work that matters.</h2><p>With more than 25 years leading complex EPC, PMC and EPCM programmes, Colin brings the judgement needed when capital projects become technically demanding, commercially exposed, or operationally critical.</p><p>His work spans water, power, process, mining and urban infrastructure across international markets.</p><a className="text-link" href="/about">More about Colin <span>↗</span></a><div className="credential">Chartered Mechanical Engineer · PMP-certified · Imperial College London · Fellow, Water Institute of Southern Africa</div></div>
      </section>

      <section id="services" className="services section-grid">
        <div><h2>Practical support for critical delivery moments.</h2></div>
        <div className="service-cards">{services.map((service, index) => <article className={`service-card service-card-${index + 1}`} key={service.title}><div className="service-image" aria-label={`${service.title} image placeholder`} /><div className="service-content"><h3>{service.title}</h3><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div>
      </section>

      <section id="projects" className="projects"><div className="projects-heading"><h2>Reference projects.</h2><a className="project-button" href="/projects">View all projects <span>›</span></a></div><div className="project-grid"><article><div className="project-image project-image-one" /><div className="project-meta"><h3>Water infrastructure delivery</h3><p>Water & sanitation</p></div></article><article className="featured-project"><div className="project-image project-image-two" /><div className="project-meta"><h3>Programme leadership</h3><p>Complex infrastructure</p></div></article><article><div className="project-image project-image-three" /><div className="project-meta"><h3>Power and process systems</h3><p>Energy & industrial</p></div></article></div></section>

      <section id="faq" className="faq"><div className="faq-heading"><h2>Questions, answered.</h2></div><div className="faq-list"><details><summary className="faq-summary">What kind of assignments does Colin take on?</summary><p>Senior project direction, interim management, recovery mandates and strategic delivery support.</p></details><details><summary>Where is Colin available to work?</summary><p>Open to selected international assignments, with a focus on complex infrastructure and delivery leadership.</p></details><details><summary>How can we start a conversation?</summary><p>Send a short outline of your programme, challenge or requirement and Colin will respond directly.</p></details></div></section>

      <section id="contact" className="contact"><p className="eyebrow">OPEN TO FULL-TIME, PART-TIME & INTERIM ASSIGNMENTS</p><h2>Bring experienced leadership to the programme that cannot afford to drift.</h2><div className="contact-bottom"><p>Open to roles with project houses, EPC/EPCM organisations, consulting firms and owners’ teams — particularly where organisational development, design leadership or delivery recovery is required.</p><a className="contact-link" href="mailto:colin@colinbatchelor.com">Start a conversation <span>↗</span></a></div></section>

      <footer><div className="footer-brand"><img src={logoUrl} alt="Colin Batchelor Consulting" /><p>Complex infrastructure. Clear leadership.</p></div><div className="footer-links"><strong>Navigate</strong><a href="/about">About</a><a href="#services">Services</a><a href="#projects">Reference Projects</a><a href="#faq">FAQs</a></div><div className="footer-links"><strong>Services</strong><a href="#services">Project Management</a><a href="#services">Interim Management</a><a href="#services">Business Development</a></div><div className="footer-contact"><span>Available for senior assignments</span><a href="mailto:colin@colinbatchelor.com">colin@colinbatchelor.com</a><span>CEng · PMP · FIMWSA</span></div></footer>
    </main>
  )
}
