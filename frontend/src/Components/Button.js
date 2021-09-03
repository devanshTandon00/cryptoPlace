import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    return (
      <button
        className="button-styling"
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}