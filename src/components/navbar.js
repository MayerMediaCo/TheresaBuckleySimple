import React from 'react'
import Link from 'gatsby-link'

class Navbar extends React.Component {
  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    return (
      <nav className="navbar is-transparent" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Theresa Buckley
          </Link>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={
            this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
