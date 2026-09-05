'use client'

import { useRef, useState } from 'react'

const projects = [
  {
    company: 'Oxagon (NEOM Industrial City)',
    role: 'Project Director',
    location: 'Saudi Arabia',
    description: 'Project Director for Oxagon (NEOM Industrial City) in Saudi Arabia for Systra-Surbana-Jurong JV as Multidisciplinary Design Consultant for the infrastructure of this Megaproject on the Red Sea Coast. The scope included Wet and Dry Utilities - Water, Sewage, District Cooling HV (380kV), MV (33kV), LV (14kV) reticulation and so on; Roads, Highways, Bridges and Tunnels (Cut & Cover, TBM), Landscaping and Marine protection. Leading a team of over 200 Professional Engineers at two locations in Saudi Arabia – Riyadh and NEOM, as well as design centre support from partner operations in South Africa, India, and the UAE. Design was executed using BIM 360 for 3D design technology. The total installed value will exceed $10 Billion.',
    image: '/projects/Systra Oxagon.webp'
  },
  {
    company: 'Pune Metro Line 3',
    role: 'Project Director',
    location: 'Pune, India',
    description: 'Project Director for the Pune Metro Line 3, an EPC Civil Contract for a 23km long elevated metro with 23 stations including retail developments on mezzanine levels, and a Depot. valued at >$450 million. This project was interrupted by Covid. Nonetheless, we managed to complete the design and to use the lockdown to demolish 3Km of double-decker highway on the alignment.',
    image: '/projects/TATA pune metro rail line.jpg'
  },
  {
    company: 'Dravyavati River Project',
    role: 'Project Director',
    location: 'Jaipur, India',
    description: 'Project Director for the Dravyavati River Project in Jaipur, a US$ 250 million EPC contract. The Project involved the Design Build of 170Mld of Sewage Treatment (5off WWTPs), 120kms of sewerage, 47km of lined channel, cleaning of four dams as well as three international standard parks and landscaping. Buildings incorporated into the design included Control buildings a City-wide communications centre, laboratories and offices as well as an Exhibition and Conference centre. The project was safely completed on time and under budget. The project was awarded a Project of the Year award by Construction Times in 2018. This involved a direct field staff of over 200 Engineers, 230 subcontractors and completing 26 million safe manhours with labour peaking at 8000.',
    image: '/potential%20hero%202.webp'
  },
  {
    company: 'Seychelles',
    role: 'Project Director',
    location: 'Seychelles',
    description: 'Seychelles This comprised of four seawater desalination projects, two on the main island of Providence and one each on Praslin and La Digue. These involved sensitive environmental intakes and brine outfalls without damaging the coral reefs. Furthermore, two sewage plants were built on Providence island in Victoria and BeauVallon Bay with sewerage reticulation from the beachfront hotels and homes.',
    image: '/projects/seychelles.jpg'
  }
]

export function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    
    const scrollContainer = scrollRef.current
    const scrollPosition = scrollContainer.scrollLeft
    
    const items = Array.from(scrollContainer.children)
    if (items.length === 0) return

    const firstItemLeft = (items[0] as HTMLElement).offsetLeft
    let currentIndex = 0
    let minDistance = Infinity
    
    items.forEach((item, index) => {
      const itemLeft = (item as HTMLElement).offsetLeft - firstItemLeft
      const distance = Math.abs(scrollPosition - itemLeft)
      
      if (distance < minDistance) {
        minDistance = distance
        currentIndex = index
      }
    })
    
    setActiveIndex(currentIndex)
  }

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const items = Array.from(scrollRef.current.children)
      if (items[index]) {
        const firstItemLeft = (items[0] as HTMLElement).offsetLeft
        const itemLeft = (items[index] as HTMLElement).offsetLeft - firstItemLeft
        scrollRef.current.scrollTo({ left: itemLeft, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="relative w-full overflow-hidden flex items-center gap-2 md:gap-6">
        <button 
          onClick={() => scroll('left')} 
          className="hidden md:flex carousel-arrow shrink-0 text-white bg-[#b5122b] hover:bg-[#8f0d21] items-center justify-center font-serif text-3xl" 
          aria-label="Previous projects"
        >
          ‹
        </button>
      
        <div 
          ref={scrollRef} 
          onScroll={handleScroll}
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
          className="hidden md:flex carousel-arrow shrink-0 text-white bg-[#b5122b] hover:bg-[#8f0d21] items-center justify-center font-serif text-3xl" 
          aria-label="Next projects"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`h-[4px] transition-all duration-300 rounded-full ${
              activeIndex === index 
                ? 'w-8 bg-[#b5122b]' 
                : 'w-4 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
