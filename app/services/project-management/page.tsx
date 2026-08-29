const scope = ['Programme governance and delivery assurance', 'Owner-side EPC, PMC and EPCM leadership', 'Stakeholder, contractor and consultant alignment', 'Recovery planning for programmes under pressure']
const approach = ['Establish the facts, constraints and decisions that matter', 'Create a delivery rhythm with clear ownership and escalation', 'Keep technical, commercial and operational priorities connected']

export const metadata = { title: 'Project Management | Colin Batchelor Consulting', description: 'Senior project management and delivery leadership for complex infrastructure programmes.' }

export default function ProjectManagementPage() {
  return <main>
    <section className="detail-hero"><p className="eyebrow light">SERVICE 01 · PROJECT MANAGEMENT</p><h1>Make complex delivery feel deliberate.</h1><p className="detail-hero-lede">Senior project direction for infrastructure programmes where the route from intent to outcome is anything but simple.</p></section>
    <section className="detail-intro"><div><p className="eyebrow">THE ROLE</p><h2>Leadership that connects the moving parts.</h2></div><p>Project management is more than a schedule and a set of reports. Colin brings an owner-minded view across technical interfaces, commercial exposure, governance and the people responsible for making progress real.</p></section>
    <section className="detail-split"><div className="detail-marker"><span>01</span><p>What the assignment needs</p></div><div><h2>Scope of support</h2><ul className="detail-list">{scope.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="detail-approach"><div><p className="eyebrow light">A PRACTICAL METHOD</p><h2>Clarity first. Momentum after.</h2><p>Whether joining at the start of a major programme or stepping in when delivery has drifted, the work begins with a grounded view of what is happening now.</p></div><ol>{approach.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol></section>
    <section className="detail-sectors"><p className="eyebrow">WHERE IT APPLIES</p><h2>Infrastructure with real consequences.</h2><div className="sector-grid"><p>Water and sanitation</p><p>Power generation and distribution</p><p>Process and industrial systems</p><p>Mining and urban infrastructure</p></div></section>
    <section className="contact service-page-contact"><p className="eyebrow">PROJECT MANAGEMENT</p><h2>When the programme matters, the leadership should too.</h2><a className="contact-link" href="/#contact">Discuss an assignment <span>↗</span></a></section>
  </main>
}
