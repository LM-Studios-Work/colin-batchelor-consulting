import { ProjectsCarousel } from '@/components/projects-carousel'

export const metadata = {
  title: 'Project Management | Colin Batchelor Consulting',
  description: 'Senior project management and delivery leadership for critical infrastructure and engineering programmes.'
}

const solutions = [
  { title: 'Programme Governance & Delivery Assurance', desc: 'Establish robust oversight mechanisms to ensure project health and adherence to strategic goals.' },
  { title: 'Owner-side EPCM, PMC and EPC Leadership', desc: 'Represent owner interests across all major procurement and execution models to safeguard investments.' },
  { title: 'Stakeholder & Contractor Alignment', desc: 'Bring disjointed teams, consultants, and contractors together under a unified project vision.' },
  { title: 'Recovery Planning for Programmes Under Pressure', desc: 'Step in when delivery has drifted. Establish a clear, actionable path to completion.' },
  { title: 'Establishing Constraints & Critical Decisions', desc: 'Create a grounded view of current reality and constraints before dictating a path forward.' },
  { title: 'Creating a Delivery Rhythm', desc: 'Institute practical cadence with clear ownership, accountability, and escalation paths.' },
  { title: 'Connecting Priorities', desc: 'Keep technical, commercial, and operational priorities connected. Ensure engineering decisions make commercial sense.' }
]

export default function ProjectManagementPage() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative flex flex-col justify-center px-[5.3vw] pt-[96px] pb-[82px] bg-cover bg-bottom" 
        style={{ backgroundImage: "linear-gradient(rgba(35,35,35,0.65), rgba(35,35,35,0.65)), url('/projects/seychelles.jpg')" }}
      >
        <div className="max-w-4xl text-white">
          <p className="text-[#e8e6e1] text-[10px] font-bold tracking-[0.13em] uppercase mb-4">PROJECT MANAGEMENT SERVICES</p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1] font-semibold mb-6 font-serif tracking-tight">Expert Project Direction & Delivery Leadership.</h1>
          <div className="w-16 h-1 bg-[#b5122b] mb-6"></div>
          <p className="text-[17px] md:text-[19px] max-w-2xl leading-[1.6] text-gray-100">
            I provide senior project direction and consulting for critical infrastructure and engineering programmes, stepping in to ensure strategic mandates are delivered successfully.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-[5.3vw] py-[90px] bg-white">
        <div className="max-w-[1000px] mx-auto text-center md:text-left flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[34px] md:text-[40px] font-serif font-semibold leading-tight mb-6 text-[#292827]">Independent, owner-minded project leadership.</h2>
            <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7]">
              I offer independent project management consulting that goes beyond schedules and reports. Acting as an extension of the owner's team, I provide the experienced oversight required to manage technical interfaces, mitigate commercial exposure, and enforce rigorous governance.
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
            <h2 className="text-[28px] md:text-[34px] font-bold mb-8 uppercase tracking-wide text-white font-serif">MY ADVISORY & DELIVERY SERVICES:</h2>
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
        <h2 className="text-[34px] md:text-[44px] font-semibold mb-6 uppercase font-serif tracking-tight text-[#292827]">PROVEN DELIVERY AND EXECUTIVE LEADERSHIP</h2>
        <div className="w-16 h-[3px] bg-[#b5122b] mx-auto mb-16"></div>
        
        <div className="max-w-[1400px] mx-auto">
          <ProjectsCarousel />
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="contact service-page-contact">
        <p className="eyebrow">AVAILABLE FOR CONSULTING ENGAGEMENTS</p>
        <h2>Bring experienced project direction to your critical infrastructure mandates.</h2>
        <a className="contact-link" href="/contact">Discuss your requirements <span>&#x2197;&#xFE0E;</span></a>
      </section>
    </main>
  )
}
