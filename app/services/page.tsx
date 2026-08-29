const services = [
  { id: 'project-management', title: 'Project Management', summary: 'Direction for programmes where delivery, governance and technical judgement must stay aligned.', items: ['Water and Sanitation', 'Power Generation and Distribution', 'Expert Witness'], href: '/services/project-management' },
  { id: 'interim-management', title: 'Interim Management', summary: 'Calm, accountable leadership when an organisation needs experienced hands at a critical moment.', items: ['Short Term Assignments', 'Business Rescue', 'Non-Executive Director'], href: '/services#interim-management' },
  { id: 'business-development', title: 'Business Development', summary: 'Practical commercial thinking to turn capability, relationships and opportunity into durable growth.', items: ['Strategy', 'Marketing and Sales', 'Executive Mentorship'], href: '/services#business-development' },
]

export const metadata = { title: 'Services | Colin Batchelor Consulting', description: 'Project management, interim management and business development for complex infrastructure programmes.' }

export default function ServicesPage() {
  return <main>
    <section className="service-page-hero"><div className="service-page-hero-copy"><p className="eyebrow light">COLIN BATCHELOR CONSULTING</p><h1>Experienced leadership for complex moments.</h1><p>From programme direction to organisational recovery, practical support for infrastructure teams carrying work that matters.</p></div><div className="service-page-hero-index"><span>03</span><p>Services shaped around delivery, judgement and forward movement.</p></div></section>
    <section className="service-page-intro"><p className="eyebrow">HOW I HELP</p><div><h2>Clear thinking when the work is technically demanding.</h2><p>Every assignment is different. The common thread is a need for senior perspective, disciplined execution and leadership that can work across owners, consultants, contractors and stakeholders.</p></div></section>
    <section className="service-directory" aria-labelledby="service-directory-heading"><div className="service-directory-heading"><p className="eyebrow">THE OFFER</p><h2 id="service-directory-heading">Three ways to move a programme forward.</h2></div><div className="service-page-cards">{services.map((service, index) => <article id={service.id} className="service-page-card" key={service.id}><div className="service-page-card-top"><span>0{index + 1}</span><a className="service-card-link" href={service.href} aria-label={`Explore ${service.title}`}>Explore <span>↗</span></a></div><h3>{service.title}</h3><p>{service.summary}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="contact service-page-contact"><p className="eyebrow">START WITH THE CHALLENGE</p><h2>Bring the right level of leadership to the next decision.</h2><a className="contact-link" href="/#contact">Start a conversation <span>↗</span></a></section>
  </main>
}
