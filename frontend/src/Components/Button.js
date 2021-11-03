import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    const className = this.props.className || "button-styling"
    return (
      <React.Fragment>
        {this.props.href == '' ?
          <button
            className={className}
            onClick={this.props.onClick}
            style={this.props.style}
          >
            {this.props.label}
          </button>
          :
          <a href={this.props.href}>
            <button
              className={className}
              onClick={this.props.onClick}
              style={this.props.style}
            >
              {this.props.label}
            </button>
          </a>
        }
      </React.Fragment>

    );
  }
}
