import React, { Component } from 'react';
import './Banner.css';

export default class Banner extends Component {
  render() { 
    return (
      <div className="banner-styling">
        {this.props.title}
      </div>
    );
  }
}
