'use client'

import { useState } from 'react'

export const projects = [
  {
    company: 'Oxagon (NEOM Industrial City)',
    link: '',
    role: 'Project Director',
    duration: '',
    date: '',
    location: 'Saudi Arabia',
    description: 'Project Director for Oxagon (NEOM Industrial City) in Saudi Arabia for Systra-Surbana-Jurong JV as Multidisciplinary Design Consultant for the infrastructure of this Megaproject on the Red Sea Coast. The scope included Wet and Dry Utilities - Water, Sewage, District Cooling HV (380kV), MV (33kV), LV (14kV) reticulation and so on; Roads, Highways, Bridges and Tunnels (Cut & Cover, TBM), Landscaping and Marine protection. Leading a team of over 200 Professional Engineers at two locations in Saudi Arabia – Riyadh and NEOM, as well as design centre support from partner operations in South Africa, India, and the UAE. Design was executed using BIM 360 for 3D design technology. The total installed value will exceed $10 Billion.',
    image: '/projects/Systra Oxagon.webp'
  },
  {
    company: 'Pune Metro Line 3',
    link: '',
    role: 'Project Director',
    duration: '',
    date: '',
    location: 'Pune, India',
    description: 'Project Director for the Pune Metro Line 3, an EPC Civil Contract for a 23km long elevated metro with 23 stations including retail developments on mezzanine levels, and a Depot. valued at >$450 million. This project was interrupted by Covid. Nonetheless, we managed to complete the design and to use the lockdown to demolish 3Km of double-decker highway on the alignment.',
    image: '/projects/TATA pune metro rail line.jpg'
  },
  {
    company: 'Dravyavati River Project',
    link: '',
    role: 'Project Director',
    duration: '',
    date: '',
    location: 'Jaipur, India',
    description: 'Project Director for the Dravyavati River Project in Jaipur, a US$ 250 million EPC contract. The Project involved the Design Build of 170Mld of Sewage Treatment (5off WWTPs), 120kms of sewerage, 47km of lined channel, cleaning of four dams as well as three international standard parks and landscaping. Buildings incorporated into the design included Control buildings a City-wide communications centre, laboratories and offices as well as an Exhibition and Conference centre. The project was safely completed on time and under budget. The project was awarded a Project of the Year award by Construction Times in 2018. This involved a direct field staff of over 200 Engineers, 230 subcontractors and completing 26 million safe manhours with labour peaking at 8000.',
    image: '/potential%20hero%202.webp'
  },
  {
    company: 'Seychelles',
    link: '',
    role: 'Project Director',
    duration: '',
    date: '',
    location: 'Seychelles',
    description: 'Seychelles This comprised of four seawater desalination projects, two on the main island of Providence and one each on Praslin and La Digue. These involved sensitive environmental intakes and brine outfalls without damaging the coral reefs. Furthermore, two sewage plants were built on Providence island in Victoria and BeauVallon Bay with sewerage reticulation from the beachfront hotels and homes.',
    image: '/projects/seychelles.jpg'
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
