import React from 'react';
import Web3 from 'web3';
import { useHistory } from 'react-router';
import './Login.css';

export default function Login() {
  const history = useHistory();

  const ethEnabled = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts) {
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('addUser', 'true');
          history.push('/');
          window.location.reload();
        }
      } catch (error) {
        if (error.code === 4001) {
          localStorage.setItem('loggedIn', 'false');
        }
      }
    }
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
        <div className='provider' onClick={ethEnabled}>
          MetaMask
        </div>
      </div>
    </div>
  );
}

