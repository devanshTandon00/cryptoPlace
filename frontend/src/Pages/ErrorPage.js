import React from "react";
import Web3 from 'web3';
import Button from "../Components/Button"
import './ErrorPage.css';

export default function ErrorPage() {
  const subtitle = Web3.givenProvider
    ? "Please make sure you are logged in via MetaMask before \
      accessing user-specific features."
    : "Please install the MetaMask Chrome Extension."
  const button = Web3.givenProvider
    ? (
      <Button
        label='Log In'
        onClick={() => console.log('hi')}
        style={{ 'float': 'none' }}
        href='/login'
      />
    )
    : (
      <Button
        label='Redirect to MetaMask.io'
        onClick={() => console.log('hi')}
        style={{ 'float': 'none' }}
        href='https://metamask.io/download'
      />
    );
  return (
    <div className='ErrorPage'>
      <div className='main-component'>
        <div className='title'>
          An error occurred!
        </div>
        <div className='subtitle'>
          {subtitle}
        </div>
        <div className='buttons'>
          {button}
        </div>
      </div>
    </div>
  );
}
