'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geographyUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const workedCountries = new Set([4, 72, 356, 404, 508, 516, 566, 646, 682, 686, 710, 716, 784, 800, 834, 894])

export function WorkMap() {
  return (
    <div className="work-map" aria-label="World map highlighting Colin's areas of experience">
      <ComposableMap projectionConfig={{ scale: 150 }}>
        <Geographies geography={geographyUrl}>
          {({ geographies }) => geographies.map((geo) => {
            const countryId = Number(geo.id)
            const highlighted = workedCountries.has(countryId)
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={highlighted ? 'var(--primary)' : 'var(--map-muted)'}
                stroke="var(--map-line)"
                strokeWidth={0.45}
                style={{ default: { outline: 'none' }, hover: { outline: 'none', fill: highlighted ? 'var(--primary)' : 'var(--map-muted)' }, pressed: { outline: 'none' } }}
              />
            )
          })}
        </Geographies>
      </ComposableMap>
      <div className="map-caption"><span className="map-key" /> Countries and regions where I have delivered major programmes.</div>
    </div>
  )
}
