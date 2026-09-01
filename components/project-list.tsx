'use client'

import { useState } from 'react'

const projects = [
  {
    company: 'SYSTRA-SurbanaJurong JV',
    link: 'https://www.linkedin.com/company/80405335/',
    role: 'Project Director',
    duration: '2 yrs 8 mos',
    date: 'Jan 2021 - Aug 2023',
    location: 'Saudi Arabia',
    description: 'I served as Project Director for Oxagon (NEOM Industrial City) in Saudi Arabia for the Systra-Surbana-Jurong JV. We acted as the Multidisciplinary Design Consultant for the infrastructure of this Megaproject on the Red Sea Coast. The scope included comprehensive Wet and Dry Utilities, covering Water, Sewage, District Cooling, and HV to LV power reticulation. It also included Roads, Highways, Bridges, Tunnels, Landscaping, and Marine protection. I led a team of over 200 Professional Engineers across Riyadh and NEOM, integrating design centre support from partner operations in South Africa, India, and the UAE. We executed the design using BIM 360 for 3D design technology. The total installed value will exceed $10 Billion.',
    image: '/projects/Systra Oxagon.webp'
  },
  {
    company: 'Tata Projects — Dravyavati River Project',
    link: 'https://www.linkedin.com/company/155507/',
    role: 'Project Director',
    duration: '',
    date: 'Jul 2016 - Dec 2020',
    location: 'Jaipur, India',
    description: 'I was the Project Director responsible for this US$250 million EPC project for the rejuvenation of the Dravyavati River in Jaipur. Rapid urbanisation and industrialisation had resulted in a build-up of municipal solid waste while untreated sewage discharged into the river, polluting the environment and creating a public health hazard.\nWe intercepted sewage flows into a sewer network running along the riverbank and built five Sewage Treatment Plants for 170 Mld. The treated water was returned to the river, transforming it from an open drain into a restored urban waterway with landscaped banks, recreational spaces, and a clean flowing river.\nThe project was completed ahead of schedule and within budget, and has become a benchmark for river rejuvenation projects in India.',
    image: '/projects/TATA pune metro rail line.jpg'
  },
  {
    company: 'Tata Projects — Pune Elevated Metro',
    link: 'https://www.linkedin.com/company/155507/',
    role: 'Project Director',
    duration: '',
    date: 'Jul 2016 - Dec 2020',
    location: 'Pune, India',
    description: 'This 23.3-km corridor with 23 stations will be the first metro project in India operating on a public-private-partnership (PPP) model following the New Metro Rail Policy of 2017. Tata Projects serves as the EPC partner supporting the consortium.',
    image: '/projects/TATA pune metro rail line.jpg'
  },
  {
    company: 'GFA Consulting Group GmbH',
    link: 'https://www.linkedin.com/company/1062418/',
    role: 'Projects Director',
    duration: '1 yr 10 mos',
    date: 'Sep 2014 - Jun 2016',
    location: 'UAE/Afghanistan',
    description: 'I managed a portfolio of projects as the Project Management and Construction Management Consultant in Afghanistan. This included a US$400 million programme of 220/20kV Transmission lines and Substations, alongside an 18MW hydropower refurbishment. The projects were a multi-donor effort funded by the World Bank, USAID, and the ADB. My key responsibilities included design reviews and approvals, and full lifecycle project management across budget, schedule, scope, and quality. I also oversaw inspection, testing, construction supervision, commissioning, and acceptance test witnessing.',
    image: '/projects/GFA Hydro power plane.jpg'
  },
  {
    company: 'WorleyParsons RSA (Pty) Ltd.',
    link: 'https://www.linkedin.com/company/6677/',
    role: 'Projects Director: Water',
    duration: '2 yrs 8 mos',
    date: 'Feb 2012 - Sep 2014',
    location: 'South Africa',
    description: 'As Projects Director and Business Unit Manager, I supervised more than 50 consulting engineering contracts related to water. These were predominantly public infrastructure mandates. Significant projects included sedimentation tanks for Rand Water, Zeekoegat, Boskrans, and Klipspruit WWTWs. I oversaw feasibility studies for SWRO plants in Cape Town and Saldhana Bay, as well as storage reservoirs for Joburg Water and Tshwane Metro. EPCM, Industrial, and Mining projects included sewage treatment for Assmang and water management for Sishen Mine in the Northern Cape. I also managed water balances for an Eskom power station using Goldsim software. EPC Turnkey contracts for the subsidiary Basil Read Matomo involved bidding a 50MLD WTW for Tshwane Metro and several World Bank funded bulk infrastructure projects in Malawi.',
    image: '/projects/Worley Abstraction point.jpg'
  }
]

export function ProjectList() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <div className="flex flex-col gap-16 md:gap-24 w-full">
      {displayedProjects.map((project, index) => (
        <div key={index} id={project.company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-32">
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
