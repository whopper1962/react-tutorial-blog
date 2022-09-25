import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

import { useNavigate } from 'react-router-dom';

function Logout ({ setIsAuth }) {

  const navigate = useNavigate();

  const Logout = () => {
    // Logout
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <>
      <div>
        <button
          onClick={Logout}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;