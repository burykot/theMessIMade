import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './header-nav'

class Header extends Component {
  render () {
    return <div>
      <Navbar />
      <img src="./images/stage-min.jpg" alt="Quadcopter picture"/>
        <div className="stage-desc">
          <h1>#FPVlife</h1>
          <span>of KonradS</span>
        </div>
      </div>
    }
}

export default Header;
