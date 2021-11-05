import React, { useEffect } from 'react';
import { logoutUser } from '../APIFunctions/User';
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    async function checkAuth() {
      console.log(localStorage.getItem('authenticated'));
      console.log(localStorage.getItem('user'));
      if (localStorage.getItem('authenticated') === 'true') {
        console.log('true');
        const user = {
          username: localStorage.getItem('user'),
        }
        console.log(user)
        const res = await logoutUser(user);
        console.log(res);
        if (res) {
          localStorage.setItem("user", '');
          localStorage.setItem("authenticated", 'false');
          history.push('/');
        }
      }
    }
    checkAuth();

  });

  return (
    <div className='Logout'>
    </div>
  );
}
