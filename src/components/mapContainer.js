import React from 'react'
import Map from './map'

const MapContainer = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="column is-three-fifths is-two-fifth-mobile is-offset-one-fifth">
          <div className="map-section">
            <div className="title is-size-3 has-text-centered">
              <h2>Find me here</h2>
            </div>
            <section className="section map">
              <Map />
            </section>
            <div>
              <p className="subtitle has-text-centered">Address: 1200 South York Road Suite 4240 Elmhurst, IL 60126</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapContainer
