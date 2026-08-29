'use client'

import { useRef } from 'react'

const projects = [
  {
    company: 'SYSTRA-SurbanaJurong JV',
    role: 'Project Director',
    location: 'Saudi Arabia',
    description: 'Project Director for Oxagon (NEOM Industrial City) in Saudi Arabia for Systra-Surbana-Jurong JV as Multidisciplinary Design Consultant for the infrastructure of this Megaproject on the Red Sea Coast.',
    image: '/projects/Systra Oxagon.webp'
  },
  {
    company: 'Tata Projects',
    role: 'Project Director',
    location: 'India',
    description: 'Project Director responsible for this US$ 250 million EPC project for rejuvenation of the Dravyavati River. Completed ahead of schedule and within budget.',
    image: '/projects/TATA pune metro rail line.jpg'
  },
  {
    company: 'GFA Consulting Group GmbH',
    role: 'Projects Director',
    location: 'UAE/Afghanistan',
    description: 'Managing a portfolio of projects as Project Management and Construction Management Consultant in Afghanistan: a US$400 million programme of 220/20kV Transmission lines and Substations.',
    image: '/projects/GFA Hydro power plane.jpg'
  },
  {
    company: 'WorleyParsons RSA (Pty) Ltd.',
    role: 'Projects Director: Water',
    location: 'South Africa',
    description: 'Projects Director & BU Manager supervising more than 50 consulting engineering contracts related to water - mostly public infrastructure, including EPC contracts for World Bank funded projects.',
    image: '/projects/Worley Abstraction point.jpg'
  }
]

export function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full overflow-hidden flex items-center gap-2 md:gap-6">
      <button 
        onClick={() => scroll('left')} 
        className="carousel-arrow shrink-0 text-white bg-[#b5122b] hover:bg-[#8f0d21] flex items-center justify-center font-serif text-3xl" 
        aria-label="Previous projects"
      >
        ‹
      </button>
      
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-4 flex-1" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div 
            key={project.company} 
            className="shrink-0 snap-start w-full sm:w-[350px] md:w-[400px] flex flex-col bg-white border border-[#dedede] text-left shadow-sm"
          >
            <div className="h-[240px] bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }} />
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-6 text-[#292827] uppercase tracking-wide">{project.company}</h3>
              <p className="text-[11px] font-bold text-[#b5122b] uppercase mb-6">
                {project.role} &middot; <span className="text-[#666] font-normal normal-case">{project.location}</span>
              </p>
              <p className="text-sm text-[#666] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => scroll('right')} 
        className="carousel-arrow shrink-0 text-white bg-[#b5122b] hover:bg-[#8f0d21] flex items-center justify-center font-serif text-3xl" 
        aria-label="Next projects"
      >
        ›
      </button>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
