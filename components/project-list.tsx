'use client'

import { useState } from 'react'

const projects = [
  {
    company: 'Alghanim International',
    link: 'https://www.linkedin.com/company/263273/',
    role: 'Project Director / Project Manager',
    duration: '11 mos',
    date: 'Dec 2024 - Oct 2025',
    location: 'Abu Dhabi, UAE',
    description: '$1Billion EPC project constructing a CHP utilities plant for a petrochemical complex in Abu Dhabi, UAE. The scope encompasses design, engineering, procurement, construction, testing, and commissioning of essential utilities including water, steam, compressed air, and fuel gas, as well as 400kV/220kV and 220kV/33kV electrical substations. Emphasizing safety and environmental standards, and based on FIDIC, the project adopts a lump sum payment structure linked to milestone completions over a four-year duration. The war in Iran disrupted the schedule.',
    image: '/companies/alghanim international.webp'
  },
  {
    company: 'Welspun Enterprises Ltd',
    link: 'https://www.linkedin.com/company/68296093/',
    role: 'Project Director',
    duration: '1 yr 4 mos',
    date: 'Sep 2023 - Dec 2024',
    location: 'India · On-site',
    description: 'Project Director for the Dharavi WwTF. A 418 Mld Wastewater Treatment Facility at Dharavi, (Asia’s largest informal settlement), in Mumbai. Due to the acute limitation of land this SBR plant elected to construct the reactors on four levels. The design includes sludge digestion and on-site power generation. Half of the treated effluent undergoes UV treatment for reuse and the balance is discharged to the environment where it supports the ecosystem, including mangroves. This EPC project is the first of its kind in India and one of a handful in the world with vertically arranged treatment basins. The project duration is 5 years for construction followed by 15 years O&M. Responsibilities include full project management skillset of Risk and Stakeholder management, Scheduling, Progress & SHEQ, Budget, Costing & Cash-flow.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80'
  },
  {
    company: 'SYSTRA-SurbanaJurong JV',
    link: 'https://www.linkedin.com/company/80405335/',
    role: 'Project Director',
    duration: '2 yrs 8 mos',
    date: 'Jan 2021 - Aug 2023',
    location: 'Saudi Arabia · On-site',
    description: 'Project Director for Oxagon (NEOM Industrial City) in Saudi Arabia for Systra-Surbana-Jurong JV as Multidisciplinary Design Consultant for the infrastructure of this Megaproject on the Red Sea Coast. The scope included Wet and Dry Utilities - Water, Sewage, District Cooling HV (380kV), MV (33kV), LV (14kV) reticulation and so on; Roads, Highways, Bridges and Tunnels (Cut & Cover, TBM), Landscaping and Marine protection. Leading a team of over 200 Professional Engineers at two locations in Saudi Arabia – Riyadh and NEOM, as well as design centre support from partner operations in South Africa, India, and the UAE. Design was executed using BIM 360 for 3D design technology. The total installed value will exceed $10 Billion.\nLed an International Consulting Company in a feasibility study to redevelop the Port of Beirut, following the catastrophic explosion. Furthermore, assisting a JV of International consultants to secure an important water treatment project valued at $1.5 Billion in the EU.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80'
  },
  {
    company: 'Tata Projects',
    link: 'https://www.linkedin.com/company/155507/',
    role: 'Project Director',
    duration: '4 yrs 6 mos',
    date: 'Jul 2016 - Dec 2020',
    location: 'India · On-site',
    description: 'PUNE ELEVATED METRO: The 23.3-km corridor with 23 stations will be the first metro project in India on public-private-partnership (PPP) model after the New Metro Rail Policy of 2017. Tata Projects is the EPC partner supporting the consortium. The construction is severely delayed due to the Covid-19 pandemic.\nDRAVYAVATI RIVER PROJECT: Project Director responsible for this US$ 250 million EPC project for rejuvenation of the Dravyavati River. Rapid urbanisation and industrialisation resulted in a build-up of municipal solid waste while untreated sewage discharged into the river, polluting the environment and creating a public health hazard. Intercepted sewage flows into a sewer network running along the riverbank. Five Sewage Treatment Plants for 170 Mld were built. The project was completed ahead of schedule and within budget.',
    image: '/companies/tata projects logo.png'
  },
  {
    company: 'GFA Consulting Group GmbH',
    link: 'https://www.linkedin.com/company/1062418/',
    role: 'Projects Director',
    duration: '1 yr 10 mos',
    date: 'Sep 2014 - Jun 2016',
    location: 'UAE/Afghanistan · On-site',
    description: 'Managing a portfolio of projects as Project Management and Construction Management Consultant in Afghanistan: a US$400 million programme of 220/20kV Transmission lines and Substations, an 18MW hydropower refurbishment. The projects were a multi-donor effort by the World Bank, USAID and the ADB. Key tasks include: design reviews and approvals, project management at all levels (budget, schedule, scope & quality), inspection, testing and delivery processes, construction supervision, commissioning and acceptance test witnessing.',
    image: '/companies/GFA Consulting Group Office_0.png'
  },
  {
    company: 'WorleyParsons RSA (Pty) Ltd.',
    link: 'https://www.linkedin.com/company/6677/',
    role: 'Projects Director: Water',
    duration: '2 yrs 8 mos',
    date: 'Feb 2012 - Sep 2014',
    location: 'South Africa',
    description: 'Projects Director & BU Manager supervising more than 50 consulting engineering contracts related to water - mostly public infrastructure. Significant projects include Sedimentation tanks for Rand Water, Zeekoegat, Boskrans, and Klipspruit WWTWs. Feasibility studies for SWRO plants in Cape Town and Saldhana Bay, Storage reservoirs for Jo’burg Water and Tshwane Metro. EPCM, Industrial and Mining projects included sewage treatment for Assmang, and Water management for Sishen Mine, in the Northern Cape and water balances for an Eskom power station using Goldsim software. EPC (Turnkey) contracts for their subsidiary Basil Read Matomo involved bidding a 50MLD WTW for Tshwane Metro, and several World Bank funded bulk infrastructure projects in Malawi.',
    image: '/companies/Worley_Logo_POS_Brandmark.png'
  },
  {
    company: 'Xylem Inc.',
    link: 'https://www.linkedin.com/company/2372885/',
    role: 'Projects Manager',
    duration: '3 yrs',
    date: 'Sep 2008 - Aug 2011',
    location: 'South Africa',
    description: 'Responsible for sale and execution of all projects up to $ 100m in value. Established a successful projects business extending the pump sales business into installations and broadening the portfolio to include turnkey treatment options. Profitable from day One. Developed a tender and execution capability for Reverse Osmosis, Ozone treatment, UV disinfection, FBDA aeration systems and RGSF filtration. Secured and executed contracts for sewage plants in municipal and private sectors, and the emergency pumps system for Gautrain, as well as supply contracts for Kusile power station.',
    image: '/companies/Xylem_Logo.svg.webp'
  }
]

export function ProjectList() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <div className="flex flex-col gap-16 md:gap-24 max-w-[1100px] mx-auto">
      {displayedProjects.map((project, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className={`border border-[var(--border)] w-full aspect-video md:aspect-[4/3] bg-cover bg-center ${index % 2 !== 0 ? 'md:order-last' : ''}`} 
            style={{ backgroundImage: `url('${project.image}')` }} 
            role="img" 
            aria-label={`${project.company} project image placeholder`} 
          />
          <div className="flex flex-col">
            <h3 className="text-[25px] font-[600] font-serif leading-tight mb-3 text-[var(--foreground)] tracking-[-0.035em]">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors underline decoration-[var(--border)] hover:decoration-[var(--primary)] underline-offset-4">
                  {project.company}
                </a>
              ) : (
                project.company
              )}
            </h3>
            <p className="text-[var(--primary)] text-[10px] font-[700] uppercase tracking-[.1em] border-b border-[var(--border)] pb-3 mb-5">
              {project.role} &middot; {project.date} &middot; {project.location}
            </p>
            <div className="text-[#575550] text-[15px] leading-[1.7] flex flex-col gap-4">
              {project.description.split('\n').map((para, i) => (
                <p key={i} className="m-0">{para}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      {!showAll && (
        <div className="flex justify-center mt-4">
          <button onClick={() => setShowAll(true)} className="project-button">
            View More Projects <span>›</span>
          </button>
        </div>
      )}
    </div>
  )
}
