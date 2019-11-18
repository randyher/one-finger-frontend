import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          One Finger
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <Link to="/Games">
                <a class="nav-link" href="#">
                  Games
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/shows">
                <a class="nav-link" href="#">
                  Shows
                </a>
              </Link>
            </li>
          </ul>
          <span class="navbar-text">Navbar text with an inline element</span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
