import { ProjectsCarousel } from '@/components/projects-carousel'

export const metadata = {
  title: 'Interim Management | Colin Batchelor Consulting',
  description: 'Interim executive leadership and recovery mandates for complex infrastructure programmes.'
}

const solutions = [
  { title: 'Short Term Assignments', desc: 'Filling critical leadership gaps on a temporary basis to maintain project continuity.' },
  { title: 'Business Rescue', desc: 'Turning around underperforming projects or organisational units through decisive action.' },
  { title: 'Non-Executive Director', desc: 'Providing strategic oversight, governance, and independent counsel at board level.' },
  { title: 'Operational Stabilisation', desc: 'Quickly assessing and rectifying operational inefficiencies in ongoing projects.' }
]

export default function InterimManagementPage() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative flex flex-col justify-center px-[5.3vw] pt-[96px] pb-[82px] bg-cover bg-bottom" 
        style={{ backgroundImage: "linear-gradient(rgba(35,35,35,0.65), rgba(35,35,35,0.65)), url('/about%20page%20hero.jpg')" }}
      >
        <div className="max-w-4xl text-white">
          <p className="text-[#e8e6e1] text-[10px] font-bold tracking-[0.13em] uppercase mb-4">INTERIM MANAGEMENT SERVICES</p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1] font-semibold mb-6 font-serif tracking-tight">Interim Executive Leadership.</h1>
          <div className="w-16 h-1 bg-[#b5122b] mb-6"></div>
          <p className="text-[17px] md:text-[19px] max-w-2xl leading-[1.6] text-gray-100">
            Stepping in to stabilize, lead, and recover critical infrastructure mandates when executive stability is paramount.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-[5.3vw] py-[90px] bg-white">
        <div className="max-w-[1000px] mx-auto text-center md:text-left flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[34px] md:text-[40px] font-serif font-semibold leading-tight mb-6 text-[#292827]">Experienced leadership when you need it most.</h2>
            <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7]">
              When critical projects face sudden leadership vacuums or require immediate turnaround, I provide interim executive management. I step in to assess the situation, establish stability, and drive recovery without losing momentum.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-left mt-2 md:mt-4">
            <a href="/contact" className="contact-button inline-flex items-center gap-3 transition-colors">
              DISCUSS
              <span className="text-lg font-normal translate-y-[-1px] ml-1">&#x2197;&#xFE0E;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-[5.3vw] py-[90px] bg-[#f9f9f9]">
        <div className="max-w-[1000px] mx-auto text-center md:text-left flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <p className="text-[#b5122b] font-bold text-[10px] tracking-[0.13em] mb-4 uppercase">THE CHALLENGE & THE APPROACH</p>
            <h3 className="text-[28px] md:text-[34px] font-serif font-semibold leading-tight mb-6 text-[#292827]">Stabilising complex projects during critical transitions.</h3>
            <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7] mb-6">
              In the world of complex engineering and infrastructure, leadership vacuums can quickly lead to commercial exposure and schedule drift. Whether caused by sudden departures, project distress, or rapid scaling requirements, the lack of experienced executive oversight is a critical risk that must be mitigated immediately.
            </p>
            <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7]">
              My interim management approach is built on rapid assessment and decisive action. I integrate directly into the existing organizational structure to provide immediate stability, clear bottlenecks, and restore stakeholder confidence. By applying decades of hands-on delivery experience, I ensure that critical path activities continue uninterrupted while a long-term leadership strategy is formulated and executed.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-[#242424] text-white px-[5.3vw] py-[90px]">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center max-w-[1400px] mx-auto">
          {/* Image Collage Area */}
          <div className="relative h-[450px] md:h-[600px] hidden md:block">
            <div 
              className="absolute top-0 right-[5%] w-[60%] h-[240px] bg-cover bg-center border-[6px] border-[#242424] shadow-2xl z-10" 
              style={{ backgroundImage: "url('/projects/Systra Oxagon.webp')" }}
            ></div>
            <div 
              className="absolute top-[200px] left-0 w-[65%] h-[200px] bg-cover bg-center border-[6px] border-[#242424] shadow-2xl z-20" 
              style={{ backgroundImage: "url('/projects/TATA pune metro rail line.jpg')" }}
            ></div>
            <div 
              className="absolute bottom-0 right-0 w-[75%] h-[240px] bg-cover bg-center border-[6px] border-[#242424] shadow-2xl z-30" 
              style={{ backgroundImage: "url('/potential%20hero%202.webp')" }}
            ></div>
          </div>
          
          <div className="md:px-4">
            <p className="text-[#b5122b] font-bold text-[10px] tracking-[0.13em] mb-3 uppercase">CONSULTING EXPERTISE</p>
            <h2 className="text-[28px] md:text-[34px] font-bold mb-8 uppercase tracking-wide text-white font-serif">MY INTERIM & RECOVERY SERVICES:</h2>
            <ul className="space-y-[18px] text-[14px] text-gray-300 leading-relaxed">
              {solutions.map((item) => (
                <li key={item.title} className="flex items-start">
                  <span className="text-[#888] mr-3 mt-1.5 text-[8px]">■</span> 
                  <span>
                    <strong className="text-white font-semibold">{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Carousel Section */}
      <section className="px-[5.3vw] py-[90px] bg-[#f9f9f9] text-center">
        <p className="text-[#b5122b] font-bold text-[10px] tracking-[0.13em] mb-4 uppercase">RELEVANT EXPERIENCE</p>
        <h2 className="text-[34px] md:text-[44px] font-semibold mb-6 uppercase font-serif tracking-tight text-[#292827]">PROVEN DELIVERY IN COMPLEX INFRASTRUCTURE</h2>
        <div className="w-16 h-[3px] bg-[#b5122b] mx-auto mb-16"></div>
        
        <div className="max-w-[1400px] mx-auto">
          <ProjectsCarousel />
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="contact service-page-contact">
        <p className="eyebrow">AVAILABLE FOR INTERIM MANDATES</p>
        <h2>Bring experienced leadership to your critical infrastructure mandates.</h2>
        <a className="contact-link" href="/contact">Discuss your requirements <span>&#x2197;&#xFE0E;</span></a>
      </section>
    </main>
  )
}
