import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <div className="d-flex align-items-center">
            <h4 className="text-white mr-2 mb-0">
            <FontAwesomeIcon icon="cloud-sun-rain" />
            </h4>
            <a className="navbar-brand" href="#">Forecast</a>
            </div>
            <form className="d-none form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 search-bg" type="search" placeholder="Search" aria-label="Search" />
        </form>
        </div>
        </nav>
    )
}

export default Header