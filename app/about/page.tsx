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
        <div className="about-kicker" style={{ display: 'none' }}>ABOUT ME</div>
        <h1>Experienced leadership for complex capital projects.</h1>
        <p className="about-lede">I am a senior executive and project director trusted with the programmes, turnarounds, and delivery decisions that matter most.</p>
      </section>

      <section className="about-profile section-grid">
        <div className="about-headshot">
          <img src="/images/colin-batchelor-headshot.png" alt="Colin Batchelor" />
          <div style={{ marginTop: '16px', marginBottom: '32px', color: 'var(--primary)', fontSize: '15px', lineHeight: '1.5' }}>C.Eng., MIMechE. BSc. Eng. Hons. ACGI., PMP(R) FWISA.</div>
        </div>
        <div className="about-copy">
          <h2>More than 45 years delivering the work behind essential services and industry.</h2>
          <p>As a Senior Executive and Project Director, I have more than 45 years of experience leading EPCM, PMC, and EPC programmes across Water &amp; Wastewater, Power Generation &amp; Distribution, Process Industries, Petrochemical &amp; Mineral Processing, Solid Waste Management, and Elevated Metrorail.</p>
          <p>Across mandates in Afghanistan, India, UAE, Saudi Arabia, Sub-Saharan Africa, and South Africa, I have led major capital programmes, turnaround operations, and engineering teams of more than 200 people. My experience spans design management, licensed technologies, construction oversight, commercial leadership, JV formation, PPPs, and dispute resolution.</p>
          <p>I have directed landmark projects including NEOM Oxagon, the Dravyavati River Project, the Dharavi WwTF, ESKOM power stations (Majuba, Kendal, Matimba), Saldanha Steel and Columbus Steel Mills, Hulett's Aluminium, Alusaf, the Sappi Ngodwana Ozone plant, and numerous Water and Sanitation projects in South Africa and SSA. My experience includes collaboration with multilateral agencies such as the WB, AfDB, and ADB.</p>
        </div>
      </section>

      <section className="map-section"><div className="map-heading"><div><div className="about-kicker">INTERNATIONAL EXPERIENCE</div><h2>Programmes delivered across borders.</h2></div><p>From South Africa to the Gulf, South Asia and Sub-Saharan Africa.</p></div><WorkMap /></section>
    </main>
  )
}
