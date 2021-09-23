import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  state = {  }
  render() { 
    return ( 
    <div className = 'footer'>
      
      <div className = 'footer-mainsection'>

        <div className = 'footer-links'>
          <h2>CryptoPlace</h2>
            <p>Insert some temporary paragraph on Cryptoplace here</p>
        </div>

        <div className = 'footer-links'>
          <h3>Links</h3>
            <p><a href="/home">Link 1</a></p>
            <p><a href="/home">Link 2</a></p>
            <p><a href="/home">Link 3</a></p>
            <p><a href="/home">Link 4</a></p>
        </div>

        <div className = 'footer-links'>
          <h3>Links</h3>
            <p><a href="/home">Link 1</a></p>
            <p><a href="/home">Link 2</a></p>
            <p><a href="/home">Link 3</a></p>
            <p><a href="/home">Link 4</a></p>
        </div>

      </div>

      <div className = 'footer-copyright'> 
          <h4>Copyright</h4>
      </div>

    </div>

    );
  }
}