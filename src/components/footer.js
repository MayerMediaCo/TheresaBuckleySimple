import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="columns">
      <div className="column">
        <h2 className="is-size-5">Location</h2>
        <p>Theresa Buckley</p>
        <p>1200 South York Road Suite 4240</p>
        <p>Elmhurst, IL 60126</p>
        <p>
          Phone:
          <a className="is-link" href="tel:+1-630-914-4305">
            630-914-4305
          </a>
        </p>
      </div>
      <div className="column">
        <div className="has-text-centered">
          © {new Date().getFullYear()}, Built by {` `}
          Theresa Buckley
        </div>
      </div>
      <div className="column">
        <p>
          Website created by <a href="https://www.mayermediaco.com">Mayer Media Co.</a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
