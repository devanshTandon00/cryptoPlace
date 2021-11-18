import React, { useEffect } from 'react';
import { logoutUser } from '../APIFunctions/User';
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    async function checkAuth() {
      console.log(localStorage.getItem('authenticated'));
      if (localStorage.getItem('authenticated') === 'true') {
        localStorage.setItem("loggedIn", 'false');
        localStorage.setItem("authenticated", 'false');
        history.push('/');
      }
    }
    checkAuth();
  });

  return (
    <div className='Logout'>
    </div>
  );
}
