'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { projects } from '@/components/project-list'

const geographyUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const workedCountries = new Set([4, 72, 356, 404, 508, 516, 566, 646, 682, 686, 690, 710, 716, 784, 800, 834, 894])

const countryMapping: Record<number, string> = {
  356: 'India',
  682: 'Saudi Arabia',
  690: 'Seychelles',
  710: 'South Africa',
  4: 'Afghanistan',
  784: 'United Arab Emirates',
  72: 'Botswana',
  404: 'Kenya',
  508: 'Mozambique',
  516: 'Namibia',
  566: 'Nigeria',
  646: 'Rwanda',
  686: 'Senegal',
  716: 'Zimbabwe',
  800: 'Uganda',
  834: 'Tanzania',
  894: 'Zambia',
}

export function WorkMap() {
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null)
  const [popupPos, setPopupPos] = useState<{ x: number, y: number, pointerOffset?: number } | null>(null)

  const handleCountryClick = (geo: any, evt: React.MouseEvent) => {
    const countryId = Number(geo.id)
    if (workedCountries.has(countryId)) {
      if (selectedCountry === countryId) {
        setSelectedCountry(null)
        setPopupPos(null)
      } else {
        setSelectedCountry(countryId)
        
        // Try to position near the click or country center
        const rect = (evt.currentTarget as Element).getBoundingClientRect()
        const container = (evt.currentTarget as Element).closest('.work-map')
        
        if (container) {
          const containerRect = container.getBoundingClientRect()
          let cx = rect.left + rect.width / 2 - containerRect.left
          const cy = Math.max(rect.top - containerRect.top, 0) // Anchor near top of country
          
          let pointerOffset = 0
          const modalHalfWidth = window.innerWidth < 700 ? 150 : 190
          if (cx < modalHalfWidth) {
            pointerOffset = cx - modalHalfWidth
            cx = modalHalfWidth
          } else if (cx > containerRect.width - modalHalfWidth) {
            pointerOffset = cx - (containerRect.width - modalHalfWidth)
            cx = containerRect.width - modalHalfWidth
          }

          setPopupPos({ x: cx, y: cy, pointerOffset })
        } else {
          setPopupPos({ x: evt.nativeEvent.offsetX, y: evt.nativeEvent.offsetY })
        }
      }
    }
  }

  const selectedName = selectedCountry ? countryMapping[selectedCountry] : null
  
  // Extended projects that aren't in the carousel/list but are mentioned on the page
  const extendedProjects: Record<string, { company: string, role?: string, link?: string }[]> = {
    'South Africa': [
      { company: 'ESKOM Power Stations (Majuba, Kendal, Matimba)', role: 'Project Director' },
      { company: 'Saldanha Steel & Columbus Steel Mills', role: 'Project Director' },
      { company: 'Hulett\'s Aluminium', role: 'Project Director' },
      { company: 'Alusaf', role: 'Project Director' },
      { company: 'Sappi Ngodwana Ozone Plant', role: 'Project Director' },
      { company: 'Various Water & Sanitation projects', role: 'Project Director' }
    ],
    'India': [
      { company: 'Dharavi WwTF', role: 'Project Director' }
    ]
  }

  let relatedProjects = selectedName 
    ? projects.filter(p => p.location.includes(selectedName))
    : []

  if (selectedName && extendedProjects[selectedName]) {
    const additional = extendedProjects[selectedName].map(p => ({ ...p, location: selectedName } as any))
    relatedProjects = [...relatedProjects, ...additional]
  }

  const excludedCountries = new Set([
    10, // Antarctica
    32, 68, 76, 124, 152, 170, 188, 192, 214, 218, 222, 320, 328, 332, 340, 388, 484, 558, 591, 600, 604, 740, 780, 840, 858, 862, 304 // Americas & Greenland
  ])

  return (
    <div className="work-map" aria-label="World map highlighting Colin's areas of experience" style={{ position: 'relative' }}>
      <ComposableMap 
        projection="geoMercator" 
        projectionConfig={{ scale: 330, center: [45, 5] }} 
        width={800} 
        height={500} 
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <Geographies geography={geographyUrl}>
          {({ geographies }) => geographies.map((geo) => {
            const countryId = Number(geo.id)
            if (excludedCountries.has(countryId)) return null
            
            const highlighted = workedCountries.has(countryId)
            const isSelected = selectedCountry === countryId
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isSelected ? '#8f0d21' : highlighted ? 'var(--primary)' : 'var(--map-muted)'}
                stroke="var(--map-line)"
                strokeWidth={0.45}
                onClick={(e) => handleCountryClick(geo, e)}
                style={{ 
                  default: { outline: 'none', cursor: highlighted ? 'pointer' : 'default', transition: 'all 0.2s' }, 
                  hover: { outline: 'none', fill: highlighted ? '#8f0d21' : 'var(--map-muted)', cursor: highlighted ? 'pointer' : 'default', transition: 'all 0.2s' }, 
                  pressed: { outline: 'none' } 
                }}
              />
            )
          })}
        </Geographies>
      </ComposableMap>
      
      {selectedCountry && selectedName && popupPos && (
        <div style={{
          position: 'absolute',
          top: `${popupPos.y}px`,
          left: `${popupPos.x}px`,
          transform: 'translate(-50%, -100%)',
          marginTop: '-15px',
          background: 'var(--background)',
          color: 'var(--foreground)',
          padding: '24px',
          border: '1px solid var(--border)',
          boxShadow: '0 12px 30px rgba(0,0,0,.15)',
          zIndex: 10,
          maxWidth: 'min(380px, calc(100vw - 48px))',
          width: 'max-content',
          maxHeight: '400px',
          overflowY: 'auto'
        }}>
          {/* A small pointer triangle pointing down */}
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            left: `calc(50% + ${popupPos.pointerOffset || 0}px)`,
            transform: 'translateX(-50%)',
            width: '0',
            height: '0',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid var(--border)'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '2px',
              left: '-7px',
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              borderTop: '7px solid var(--background)'
            }} />
          </div>

          <button 
            onClick={() => setSelectedCountry(null)}
            style={{ position: 'absolute', top: '12px', right: '16px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--muted-foreground)' }}
            aria-label="Close details"
          >
            &times;
          </button>
          <h3 style={{ margin: '0 0 16px', color: 'var(--primary)', fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600 }}>{selectedName}</h3>
          
          {relatedProjects.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {relatedProjects.map((p, i) => (
                <div key={i} style={{ borderBottom: i < relatedProjects.length - 1 ? '1px solid #eee' : 'none', paddingBottom: i < relatedProjects.length - 1 ? '16px' : '0' }}>
                  <h4 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: 600 }}>{p.company}</h4>
                  <p style={{ margin: '0 0 8px', fontSize: '11px', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em' }}>{p.role}</p>
                  {(p.image || p.description) && (
                    <a href={`/impact#${p.company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} style={{ fontSize: '13px', color: 'var(--foreground)', textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--border)' }}>View Case Study</a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#575550', maxWidth: '300px', whiteSpace: 'normal' }}>Various capital programmes and advisory mandates executed across {selectedName}.</p>
          )}
        </div>
      )}

      <div className="map-caption" style={{ marginTop: '10px' }}>
        <span className="map-key" /> Countries and regions where I have delivered major programmes. Click highlighted countries for details.
      </div>
    </div>
  )
}
