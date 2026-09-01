const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sig-2J1XEymLTGNjD9CKHsHTHxgX5UST5S.jpg'
const heroImage = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85'

const services = [
  { title: 'Project Management', items: ['Water and Sanitation', 'Power Generation and Distribution', 'Expert Witness'], image: '/projects/TATA pune metro rail line.jpg' },
  { title: 'Interim Management', items: ['Short Term Assignments', 'Business Rescue', 'Non-Executive Director'], image: '' },
  { title: 'Business Development', items: ['Strategy', 'Marketing and Sales', 'Executive Mentorship'], image: '' },
]

export default function Page() {
  return (
    <main>
      <section id="top" className="hero" aria-label="Introduction">
        <div className="hero-copy">
          <div className="red-rule" />
          <h1>Complex Infrastructure.<br />Clear Leadership.</h1>
          <p className="hero-detail">EPCM, PMC, EPC<br />Water & Sanitation, Power Generation & Distribution, Petrochemical & Mineral Processing, Utilities & Urban Infrastructure.</p>
          <a href="/contact" className="contact-button" style={{ marginTop: '32px' }}>Contact Me</a>
        </div>
      </section>

      <section id="profile" className="profile section-grid">
        <div className="profile-photo"><img src="/images/colin-batchelor-headshot.png" alt="Colin Batchelor" /></div>
        <div className="profile-text"><h2>Leadership for the work that matters.</h2><p>With more than 45 years leading complex EPCM, PMC and EPC programmes, I bring the judgement needed when capital projects become technically demanding, commercially exposed, or operationally critical.</p><p>My work spans Water & Sanitation, Power Generation & Distribution, Petrochemical & Mineral Processing, and Utilities & Urban Infrastructure across international markets.</p><a className="text-link" href="/about">Read my full profile <span>&#x2197;&#xFE0E;</span></a><div className="credential" style={{ textTransform: 'none' }}>C.Eng., MIMechE. BSc. Eng. Hons. ACGI., PMP(R) FWISA.</div></div>
      </section>

      <section id="services" className="services section-grid">
        <div><h2>Practical support for critical delivery moments.</h2></div>
        <div className="service-cards">{services.map((service, index) => <article className={`service-card service-card-${index + 1}`} key={service.title}><div className="service-image" aria-label={`${service.title} image placeholder`} style={service.image ? { backgroundImage: `url('${service.image}')`, backgroundSize: 'cover', backgroundPosition: 'center 35%' } : {}} /><div className="service-content"><h3>{service.title}</h3><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div>
      </section>

      <section id="projects" className="projects"><div className="projects-heading"><h2>Impact & Case Studies.</h2><a className="project-button" href="/impact">View all projects <span>›</span></a></div><div className="project-grid"><article><a href="/impact#systra-surbanajurong-jv" className="project-link"><div className="project-image" style={{ backgroundImage: `url('/projects/Systra Oxagon.webp')` }} /><div className="project-meta"><h3>SYSTRA-SurbanaJurong JV</h3><p>Project Director</p></div></a></article><article className="featured-project"><a href="/impact#tata-projects" className="project-link"><div className="project-image" style={{ backgroundImage: `url('/projects/TATA pune metro rail line.jpg')`, backgroundPosition: 'center 35%' }} /><div className="project-meta"><h3>Tata Projects</h3><p>Project Director</p></div></a></article><article><a href="/impact#gfa-consulting-group-gmbh" className="project-link"><div className="project-image" style={{ backgroundImage: `url('/projects/GFA Hydro power plane.jpg')` }} /><div className="project-meta"><h3>GFA Consulting Group</h3><p>Projects Director</p></div></a></article></div></section>

      <section id="faq" className="faq"><div className="faq-heading"><h2>Questions, answered.</h2></div><div className="faq-list"><details><summary className="faq-summary">What kind of mandates do I take on?</summary><p>Senior project direction, interim executive leadership, recovery mandates and strategic delivery advisory.</p></details><details><summary className="faq-summary">Where am I available to operate?</summary><p>Open to selected international mandates. My focus is complex infrastructure and retained leadership.</p></details><details><summary className="faq-summary">How can we start a conversation?</summary><p>Send a short outline of your programme, challenge or requirement. I will respond directly.</p></details></div></section>

      <section id="contact" className="contact"><p className="eyebrow">AVAILABLE FOR PROJECT MANDATES & INTERIM EXECUTIVE LEADERSHIP</p><h2>Bring experienced leadership to the programme that cannot afford to drift.</h2><div className="contact-bottom"><p>Available for advisory and leadership mandates with project owners, government bodies, EPC boards of directors, and consulting firms. I step in where organisational development, design leadership, or delivery recovery is required.</p><a className="contact-link" href="/contact">Start a conversation <span>&#x2197;&#xFE0E;</span></a></div></section>

    </main>
  )
}
