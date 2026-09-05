const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sig-2J1XEymLTGNjD9CKHsHTHxgX5UST5S.jpg'
const heroImage = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85'

const services = [
  { title: 'Project Management', items: ['Water and Sanitation', 'Power Generation and Distribution', 'Expert Witness'], image: '/project%20management.jpg', link: '/services/project-management' },
  { title: 'Interim Management', items: ['Short Term Assignments', 'Business Rescue', 'Non-Executive Director'], image: '/interim%20management.webp', link: '/services/interim-management' },
  { title: 'Business Development', items: ['Strategy', 'Marketing and Sales', 'Executive Mentorship'], image: '/business%20rescue.jpeg', link: '/services/business-development' },
]

export default function Page() {
  return (
    <main>
      <section id="top" className="hero" aria-label="Introduction">
        <div className="hero-copy">
          <div className="red-rule" />
          <h1>Strategic Consulting for<br />Complex Infrastructure.</h1>
          <p className="hero-detail">Independent Advisory, EPCM, PMC & EPC Leadership<br />Leveraging 45+ years of global experience to deliver critical projects in Water, Power, and Infrastructure.</p>
          <a href="/contact" className="contact-button" style={{ marginTop: '32px' }}>Contact Me</a>
        </div>
      </section>

      <section id="profile" className="profile section-grid">
        <div className="profile-photo"><img src="/images/colin-batchelor-headshot.png" alt="Colin Batchelor" /></div>
        <div className="profile-text"><h2>Expert consulting built on proven delivery.</h2><p>I provide independent consulting and advisory services, drawing on over 45 years of hands-on experience leading complex EPCM, PMC and EPC programmes. I partner with clients to provide the strategic judgement required when capital projects become technically demanding, commercially exposed, or operationally critical.</p><p>My consulting practice spans Water & Sanitation, Power Generation & Distribution, Petrochemical & Mineral Processing, and Utilities & Urban Infrastructure across international markets. I am currently available for new advisory mandates and project leadership roles.</p><a className="text-link" href="/about">Read my full profile <span>&#x2197;&#xFE0E;</span></a><div className="credential" style={{ textTransform: 'none' }}>C.Eng., MIMechE. BSc. Eng. Hons. ACGI., PMP, FWISA.</div></div>
      </section>

      <section id="services" className="services section-grid">
        <div><h2>Consulting Services & Advisory Offerings.</h2></div>
        <div className="service-cards">{services.map((service, index) => <article className={`service-card service-card-${index + 1}`} key={service.title}><a href={service.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}><div className="service-image" aria-label={`${service.title} image placeholder`} style={service.image ? { backgroundImage: `url('${service.image}')`, backgroundSize: 'cover', backgroundPosition: 'center 35%' } : {}} /><div className="service-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}><h3>{service.title}</h3><ul style={{ flexGrow: 1 }}>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><div style={{ color: '#b5122b', fontWeight: 'bold', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '16px', display: 'inline-flex', alignItems: 'center' }}>Learn more <span style={{ fontSize: '15px', marginLeft: '4px', fontWeight: 'normal', transform: 'translateY(-1px)' }}>&#x2197;&#xFE0E;</span></div></div></a></article>)}</div>
      </section>

      <section id="projects" className="projects"><div className="projects-heading"><h2>Impact & Case Studies.</h2><a className="project-button" href="/impact">View all projects <span>›</span></a></div><div className="project-grid"><article><a href="/impact#oxagon-neom-industrial-city" className="project-link"><div className="project-image" style={{ backgroundImage: `url('/projects/Systra Oxagon.webp')` }} /><div className="project-meta"><h3>Oxagon (NEOM Industrial City)</h3><p>Project Director</p></div></a></article><article className="featured-project"><a href="/impact#pune-metro-line-3" className="project-link"><div className="project-image" style={{ backgroundImage: `url('/projects/TATA pune metro rail line.jpg')`, backgroundPosition: 'center 35%' }} /><div className="project-meta"><h3>Pune Metro Line 3</h3><p>Project Director</p></div></a></article><article><a href="/impact#dravyavati-river-project" className="project-link"><div className="project-image" style={{ backgroundImage: `url('/potential%20hero%202.webp')` }} /><div className="project-meta"><h3>Dravyavati River Project</h3><p>Project Director</p></div></a></article></div></section>

      <section id="faq" className="faq"><div className="faq-heading"><h2>Questions, answered.</h2></div><div className="faq-list"><details><summary className="faq-summary">What kind of mandates do I take on?</summary><p>Senior project direction, interim executive leadership, recovery mandates and strategic delivery advisory.</p></details><details><summary className="faq-summary">Where am I available to operate?</summary><p>Open to selected international mandates. My focus is complex infrastructure and retained leadership.</p></details><details><summary className="faq-summary">How can we start a conversation?</summary><p>Send a short outline of your programme, challenge or requirement. I will respond directly.</p></details></div></section>

      <section id="contact" className="contact"><p className="eyebrow">AVAILABLE FOR CONSULTING & ADVISORY MANDATES</p><h2>Bring experienced consulting to the programme that cannot afford to drift.</h2><div className="contact-bottom"><p>Currently available for new consulting engagements, advisory roles, and project leadership mandates with project owners, government bodies, EPC boards of directors, and engineering firms. I apply decades of hard-won experience to organisational development, design leadership, and delivery recovery.</p><a className="contact-link" href="/contact">Start a consulting conversation <span>&#x2197;&#xFE0E;</span></a></div></section>

    </main>
  )
}
