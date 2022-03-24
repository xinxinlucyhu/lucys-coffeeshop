import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import '../css/Navbar.css';
class NavBar extends Component {
  render() {

    return (

      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/"><img className="navbarimg"src="https://freedesignfile.com/upload/2017/07/Hand-drawn-coffee-logos-design-vector-set-07.jpg" width="100px" height="100px" alt="coffeeshop"></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="white"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-item active">
              <Link className="nav-link" to="menu">Menu<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="order">Order Online</Link>
            </li>
          </ul>

        </div>
      </nav>

    );
  }
}
export default NavBar;