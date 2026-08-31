import { WorkMap } from '@/components/work-map'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sig-2J1XEymLTGNjD9CKHsHTHxgX5UST5S.jpg'

export const metadata = {
  title: 'About Colin | Colin Batchelor Consulting',
  description: 'The career, credentials and international infrastructure experience of Colin Batchelor.',
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%), url('/about%20page%20hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="about-kicker">ABOUT ME</div>
        <h1>Experienced leadership for complex infrastructure.</h1>
        <p className="about-lede">I am a senior executive and project director trusted with the programmes, turnarounds, and delivery decisions that matter most.</p>
      </section>

      <section className="about-profile section-grid">
        <div className="about-headshot"><img src="/images/colin-batchelor-headshot.png" alt="Colin Batchelor" /></div>
        <div className="about-copy">
          <h2>More than 25 years delivering the work behind essential services.</h2>
          <p>As a Senior Executive and Project Director, I have more than 25 years of experience leading EPC, PMC, and EPCM programmes across Water &amp; Wastewater, Power Generation &amp; Distribution, Process Industries, Mining &amp; Mineral Processing, Solid Waste Management, and Elevated Metrorail.</p>
          <p>Across mandates in Afghanistan, India, UAE, Saudi Arabia, Sub-Saharan Africa, and South Africa, I have led major capital programmes, turnaround operations, and engineering teams of more than 200 people. My experience spans design management, licensed technologies, construction oversight, commercial leadership, JV formation, PPPs, and dispute resolution.</p>
          <p>I have directed landmark projects including NEOM Oxagon, the Dravyavati River Project, the Dharavi WwTF, and multiple national water and wastewater schemes. I frequently work alongside the World Bank, African Development Bank, Asian Development Bank, and USAID.</p>
          <div className="about-credentials">CEng · PMP · Honours, Imperial College London · Fellow, Water Institute of Southern Africa</div>
        </div>
      </section>

      <section className="map-section"><div className="map-heading"><div><div className="about-kicker">INTERNATIONAL EXPERIENCE</div><h2>Programmes delivered across borders.</h2></div><p>From South Africa to the Gulf, South Asia and Sub-Saharan Africa.</p></div><WorkMap /></section>
    </main>
  )
}
