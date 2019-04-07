import React from 'react'

import Portrait from './images/TheresaPortrait'

const Header = () => (
  <header className="hero">
    <div className="container">
      <div className="hero-body">
        <div className="columns">
          <div className="column">
            <h1 className="title is-size-1 is-spaced has-text-centered">
              Theresa Buckley
            </h1>
            <h2 className="subtitle has-text-centered">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              aperiam.
            </h2>
          </div>
          <div className="column">
            <div className="hero-portrait">
              <Portrait />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
