import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";
import LogInModal from "./LogInModal";

function NavBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <Link to="/"> One Finger</Link>
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
            <Link to="/games">
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
        <ButtonToolbar>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            onClick={handleShow}
          >
            Login
          </button>

          <LogInModal show={show} onHide={handleClose} />
        </ButtonToolbar>
      </div>
    </nav>
  );
}

export default NavBar;
