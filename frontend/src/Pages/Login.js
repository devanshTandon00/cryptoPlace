import React from 'react';
import { useEthers } from '@usedapp/core';
import { useHistory } from 'react-router';
import './Login.css';

export default function Login() {
  const history = useHistory();
  const { activateBrowserWallet } = useEthers();
  const handleLogin = async () => {
    let err = false;
    const onError = () => {
      localStorage.setItem('loggedIn', 'false');
      err = true;
    }
    const postActivation = () => {
      if (!err) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('addUser', 'true');
        history.push('/');
      }
    }
    activateBrowserWallet((error) => { onError(error) })
      .then(() => { postActivation() });
  }

  return (
    <div className='Login'>
      <div className='header'>
        Connect your wallet.
      </div>
      <div className='sub-title'>
        Connect with one of our supported providers.
      </div>
      <div className='providers'>
        <div className='provider' onClick={handleLogin}>
          MetaMask
        </div>
      </div>
    </div>
  );
}

