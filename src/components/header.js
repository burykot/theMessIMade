import React, { Component } from 'react'
import Navbar from './header-nav'

class Header extends Component {
  render () {
    return <div id="header">
      <Navbar />
      <div className="stageWrapper">
        <picture>
          <source srcset="./images/stage-min.jpg" media="(min-width: 600px)" />
          <img src="./images/stage-min.jpg" alt="Quadcopter" className="stage" />
        </picture>
      </div>
        <div className="stage-desc">
          <h1>#FPVlife</h1>
          <span>of KonradS</span>
        </div>
      </div>
    }
}

export default Header;
