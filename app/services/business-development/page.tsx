export const metadata = {
  title: 'Business Development | Colin Batchelor Consulting',
  description: 'Business turnaround and growth: analysing the business, developing strategy, creating structure, and implementing the plan.'
}

const solutions = [
  { title: 'Commercial Analysis', desc: 'Conducting objective diagnostics of distressed or underperforming operations to establish a baseline for recovery.' },
  { title: 'Strategic Development', desc: 'Formulating robust, actionable strategies designed to stabilize finances and secure long-term market positions.' },
  { title: 'Structural Reorganisation', desc: 'Realigning facilities, processes, and corporate structures to efficiently serve the newly defined strategic objectives.' },
  { title: 'Organisational Capability', desc: 'Restructuring human resources and leadership teams, ensuring the enterprise has the competence required for execution.' },
  { title: 'Disciplined Implementation', desc: 'Providing executive oversight to drive the turnaround plan, returning the business to profitability and scaling market share.' }
]

const caseStudies = [
  {
    company: 'Aquazur (Degrémont, Suez)',
    role: 'Managing Director / Turnaround Lead',
    description: 'Appointed to turn around this company that had not made a profit in five years. By restructuring and reorganising the company, we returned to profitability in the first year. The business continued to grow in difficult market conditions, increasing market share and profitability until a market share close to 50% was achieved after five years. Notable accomplishments included the world’s largest Ozone plant for Sappi Ngodwana and the first phase of the Midmar Water Treatment plant.',
    image: '/business%20development/Aquazur.jpg'
  },
  {
    company: 'IMS Process Plant',
    role: 'Projects Division Manager',
    description: 'When Process Plant went into liquidation, IMS purchased the assets and hired the staff. I was appointed to manage the Projects Division and to complete the contracts. This involved difficult and complex negotiations with Clients and Subcontractors, most of whom had lost money in the liquidation, convincing them to contract with a new, unproven entity. This was done with notable successes, leading to the acquisition of a majority interest in Aquazur after one year.',
    image: '/business%20development/ims.webp'
  },
  {
    company: 'Hytec',
    role: 'Turnaround Manager',
    description: 'A distressed company involved in mechanical engineering and hydraulic components. Reorganising the factory and redirecting the sales effort led to improved performance and a breakthrough project securing all of the hydraulic systems for the greenfield Saldhana Steel Mill. The reorganisation involved tough but necessary decisions, including the closure of a factory and workforce retrenchment, ultimately saving and redirecting the business.',
    image: '/business%20development/hytec.png'
  }
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
          <p className="text-[#e8e6e1] text-[10px] font-bold tracking-[0.13em] uppercase mb-4">BUSINESS DEVELOPMENT & TURNAROUND</p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1] font-semibold mb-6 font-serif tracking-tight">Executive Leadership in Business Transformation.</h1>
          <div className="w-16 h-1 bg-[#b5122b] mb-6"></div>
          <p className="text-[17px] md:text-[19px] max-w-2xl leading-[1.6] text-gray-100">
            Directing complex business development through rigorous analysis, strategic planning, structural reorganisation, and disciplined implementation.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-[5.3vw] pt-[90px] pb-[40px] bg-white">
        <div className="max-w-[800px] mx-auto text-center md:text-left">
          <h2 className="text-[34px] md:text-[40px] font-serif font-semibold leading-tight mb-6 text-[#292827]">I step in to rebuild and grow engineering businesses.</h2>
          <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7] mb-8">
            When a company is distressed or stagnant, standard sales and marketing tactics are not enough. I offer hands-on executive leadership to completely restructure the organisation. I evaluate the core problems, set a new strategic direction, and realign the corporate structure for sustainable growth. I have successfully guided liquidated entities back to profitability and scaled established operations into market leaders.
          </p>
          <a href="/contact" className="contact-button inline-flex items-center gap-3 transition-colors">
            DISCUSS
            <span className="text-lg font-normal translate-y-[-1px] ml-1">&#x2197;&#xFE0E;</span>
          </a>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-[5.3vw] pt-[40px] pb-[90px] bg-[#f9f9f9]">
        <div className="max-w-[800px] mx-auto text-center md:text-left">
          <p className="text-[#b5122b] font-bold text-[10px] tracking-[0.13em] mb-4 uppercase">WHAT I DO</p>
          <h3 className="text-[28px] md:text-[34px] font-serif font-semibold leading-tight mb-6 text-[#292827]">I treat your business turnaround as a critical project.</h3>
          <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7] mb-6">
            I provide the rigorous governance, planning, and execution required to save or expand a company. My service involves conducting a hard analysis of your existing baseline, making the difficult structural decisions that internal management often avoids, and realigning your personnel toward a defined goal.
          </p>
          <p className="text-[#575550] text-[16px] md:text-[17px] leading-[1.7]">
            My offering is straightforward. Whether I am taking your business out of liquidation or building a new division for an emerging market, I build a resilient operational structure, place the right team in charge, and personally drive the implementation plan until we achieve the targeted market share.
          </p>
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

      {/* Case Studies Section */}
      <section className="px-[5.3vw] py-[90px] bg-[#f9f9f9]">
        <div className="text-center">
          <p className="text-[#b5122b] font-bold text-[10px] tracking-[0.13em] mb-4 uppercase">BUSINESS TRANSFORMATION</p>
          <h2 className="text-[34px] md:text-[44px] font-semibold mb-6 uppercase font-serif tracking-tight text-[#292827]">CASE STUDIES IN TURNAROUND & GROWTH</h2>
          <div className="w-16 h-[3px] bg-[#b5122b] mx-auto mb-16"></div>
        </div>
        
        <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div 
                className={`border border-[var(--border)] w-full aspect-video md:aspect-[4/3] bg-cover bg-center ${index % 2 !== 0 ? 'md:order-last' : ''}`} 
                style={{ backgroundImage: `url('${study.image}')` }} 
                role="img" 
                aria-label={`${study.company} transformation`} 
              />
              <div className="flex flex-col text-left">
                <h3 className="text-[25px] font-[600] font-serif leading-tight mb-3 text-[var(--foreground)] tracking-[-0.035em]">
                  {study.company}
                </h3>
                <p className="text-[var(--primary)] text-[10px] font-[700] uppercase tracking-[.1em] border-b border-[var(--border)] pb-3 mb-5">
                  {study.role}
                </p>
                <div className="text-[#575550] text-[15px] leading-[1.7] flex flex-col gap-4">
                  <p className="m-0">{study.description}</p>
                </div>
              </div>
            </div>
          ))}
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
