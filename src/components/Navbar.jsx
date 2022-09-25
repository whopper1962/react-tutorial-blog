import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faRightToBracket } from '@fortawesome/free-solid-svg-icons';


function Navbar ({ isAuth }) {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse}/>
        Home
      </Link>
      {
        !isAuth ? (
          <Link to="/login">
            <FontAwesomeIcon icon={faRightToBracket}/>
            Login
          </Link>
        ) : (
          <>
            <Link to="/createpost">
              <FontAwesomeIcon icon={faFilePen}/>
              Post article
            </Link>
            <Link to="/logout">
              <FontAwesomeIcon icon={faRightToBracket}/>
              Logout
            </Link>
          </>
        )
      }
    </nav>
  );
}

export default Navbar;


