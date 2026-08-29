const services = [
  { id: 'project-management', number: '01', title: 'Project Management', summary: 'Experienced direction for complex programmes where delivery, governance and technical judgement must stay aligned.', items: ['Water and Sanitation', 'Power Generation and Distribution', 'Expert Witness'], href: '/services/project-management' },
  { id: 'interim-management', number: '02', title: 'Interim Management', summary: 'Calm, accountable leadership when an organisation needs experienced hands at a critical moment.', items: ['Short Term Assignments', 'Business Rescue', 'Non-Executive Director'], href: '#interim-management' },
  { id: 'business-development', number: '03', title: 'Business Development', summary: 'Practical commercial thinking to turn capability, relationships and opportunity into durable growth.', items: ['Strategy', 'Marketing and Sales', 'Executive Mentorship'], href: '#business-development' },
]

export const metadata = { title: 'Services | Colin Batchelor Consulting', description: 'Project management, interim management and business development for complex infrastructure programmes.' }

export default function ServicesPage() {
  return (
    <main>
      <section className="about-intro">
        <div className="about-kicker">MARKET SEGMENTS</div>
        <h1>Innovative engineering solutions for complex challenges.</h1>
        <p className="about-lede">Explore the diverse industries we serve with tailored expertise designed to meet the most demanding infrastructure requirements.</p>
      </section>
      
      <section className="services-directory-page" style={{ paddingTop: '90px' }}>
        <div className="service-page-cards" aria-label="Consulting services">
          {services.map((service) => (
            <article id={service.id} className="service-page-card" key={service.id}>
            <div className="service-image service-page-image" aria-hidden="true" />
            <div className="service-content">
              <div className="service-page-card-top"><span>{service.number}</span><a className="service-card-link" href={service.href}>Explore <span aria-hidden="true">↗</span></a></div>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>

            </div>
          </article>
        ))}
      </div>
      </section>
    </main>
  )
}
