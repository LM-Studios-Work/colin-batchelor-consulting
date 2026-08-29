'use client'

import { useRef } from 'react'

const projects = [
  {
    title: 'Water infrastructure delivery',
    sector: 'Water & sanitation',
    description: 'Delivering comprehensive project management for large-scale water and sanitation infrastructure, ensuring reliable supply, effective treatment solutions, and sustainable environmental outcomes.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Programme leadership',
    sector: 'Complex infrastructure',
    description: 'Providing executive project direction for complex infrastructure programmes. Aligning technical execution with commercial priorities to recover schedules and establish robust delivery rhythms.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Power and process systems',
    sector: 'Energy & industrial',
    description: 'Managing EPC and EPCM delivery across power generation, distribution networks, and critical industrial process systems, ensuring strict adherence to safety, quality, and technical standards.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mining & Urban Infrastructure',
    sector: 'Heavy Infrastructure',
    description: 'Owner-side leadership for extensive mining and urban infrastructure projects, bridging the gap between stakeholder intent and practical on-the-ground execution.',
    image: 'https://images.unsplash.com/photo-1578509325964-b0ec71cc165e?auto=format&fit=crop&w=900&q=80',
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
            key={project.title} 
            className="shrink-0 snap-start w-full sm:w-[350px] md:w-[400px] flex flex-col bg-white border border-[#dedede] text-left shadow-sm"
          >
            <div className="h-[240px] bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-6 text-[#292827] uppercase tracking-wide">{project.title}</h3>
              <p className="text-[11px] font-bold text-[#b5122b] uppercase mb-6">
                Sector: <span className="text-[#666] font-normal normal-case">{project.sector}</span>
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
