import { ProjectsCarousel } from '@/components/projects-carousel'

export const metadata = {
  title: 'Business Development | Colin Batchelor Consulting',
  description: 'Strategic business development and executive mentorship for engineering and infrastructure firms.'
}

const solutions = [
  { title: 'Strategic Positioning', desc: 'Developing go-to-market strategies for complex infrastructure and EPC markets.' },
  { title: 'Marketing and Sales Strategy', desc: 'Refining value propositions and bid strategies to capture high-value contracts.' },
  { title: 'Executive Mentorship', desc: 'Advising and mentoring emerging leaders and project directors.' },
  { title: 'Bid Direction & Review', desc: 'Providing independent, critical reviews of major proposals and commercial strategies.' }
]

export default function BusinessDevelopmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative flex flex-col justify-center px-[5.3vw] pt-[96px] pb-[82px] bg-cover bg-bottom" 
        style={{ backgroundImage: "linear-gradient(rgba(35,35,35,0.65), rgba(35,35,35,0.65)), url('/business%20rescue.jpeg')" }}
      >
        <div className="max-w-4xl text-white">
          <p className="text-[#e8e6e1] text-[10px] font-bold tracking-[0.13em] uppercase mb-4">BUSINESS DEVELOPMENT SERVICES</p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1] font-semibold mb-6 font-serif tracking-tight">Strategic Growth & Advisory.</h1>
          <div className="w-16 h-1 bg-[#b5122b] mb-6"></div>
          <p className="text-[17px] md:text-[19px] max-w-2xl leading-[1.6] text-gray-100">
            Leveraging decades of industry experience to guide strategy, capture major projects, and mentor executive teams.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-[5.3vw] py-[90px] bg-white">
        <div className="max-w-[1000px] mx-auto text-center md:text-left flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[34px] md:text-[40px] font-serif font-semibold leading-tight mb-6 text-[#292827]">Strategic insight to win and deliver complex work.</h2>
            <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7]">
              Winning major infrastructure projects requires more than a good proposal; it requires strategic positioning and deep industry insight. I help engineering firms and contractors refine their strategy, improve their win rates, and develop their next generation of leaders.
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
            <h3 className="text-[28px] md:text-[34px] font-serif font-semibold leading-tight mb-6 text-[#292827]">Navigating complex procurement and securing high-value contracts.</h3>
            <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7] mb-6">
              Securing major infrastructure mandates in today's competitive landscape requires more than just technical competence. EPCs, consultants, and contractors often struggle to translate their engineering excellence into compelling commercial propositions that resonate with discerning clients, government bodies, and investment boards.
            </p>
            <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7]">
              I provide strategic advisory services to help organizations sharpen their go-to-market strategies and bid processes. From early-stage positioning and relationship development to the critical review of major proposals, I help technical teams articulate their true value. Furthermore, I offer executive mentorship to emerging project directors, equipping them with the commercial acumen required to win and successfully deliver complex work.
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
              style={{ backgroundImage: "url('/about%20page%20hero.jpg')" }}
            ></div>
            <div 
              className="absolute top-[200px] left-0 w-[65%] h-[200px] bg-cover bg-center border-[6px] border-[#242424] shadow-2xl z-20" 
              style={{ backgroundImage: "url('/service%20page.webp')" }}
            ></div>
            <div 
              className="absolute bottom-0 right-0 w-[75%] h-[240px] bg-cover bg-center border-[6px] border-[#242424] shadow-2xl z-30" 
              style={{ backgroundImage: "url('/interim%20management.webp')" }}
            ></div>
          </div>
          
          <div className="md:px-4">
            <p className="text-[#b5122b] font-bold text-[10px] tracking-[0.13em] mb-3 uppercase">CONSULTING EXPERTISE</p>
            <h2 className="text-[28px] md:text-[34px] font-bold mb-8 uppercase tracking-wide text-white font-serif">MY BUSINESS DEVELOPMENT SERVICES:</h2>
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
        <p className="eyebrow">AVAILABLE FOR ADVISORY MANDATES</p>
        <h2>Bring experienced strategic insight to your organization.</h2>
        <a className="contact-link" href="/contact">Discuss your requirements <span>&#x2197;&#xFE0E;</span></a>
      </section>
    </main>
  )
}
