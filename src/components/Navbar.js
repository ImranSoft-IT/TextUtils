import React from 'react'
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";

export default function Navbar(props) {

  const merginCss ={
    marginRight: "5px"
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                <a className="nav-link" href="/about">{props.aboutText}</a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div className="form-check" style={merginCss}>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">Blue</label>
            </div>
            <div className="form-check" style={merginCss}>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
              <label className="form-check-label" htmlFor="flexRadioDefault2">Red</label>
            </div>

            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Dark":"Light"} Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

// React props type declare
Navbar.prototype = {title: PropTypes.string.isRequired, aboutText: PropTypes.string};

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};

