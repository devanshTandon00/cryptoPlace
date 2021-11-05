import React, { Component } from "react";
// import { Jumbotron } from "reactstrap";
import Button from "../Components/Button"
import './ErrorPage.css';

export default class ErrorPage extends Component {
  render() {
    return (
      <div className='ErrorPage'>
        <div className='main-component'>
          <div className='title'>
            An error occurred!
          </div>
          <div className='subtitle'>
            Please make sure you are logged into CryptoPlace
            before accessing user-specific features.
          </div>
          <div className='buttons'>
            <Button
              label='Register'
              onClick={() => console.log('hi')}
              style={{ 'float': 'none', 'marginRight': '20px' }}
              href='/register'
            />
            <Button
              label='Log In'
              onClick={() => console.log('hi')}
              style={{ 'float': 'none' }}
              href='/login'
            />
          </div>
        </div>
      </div>
    );
  }
}
