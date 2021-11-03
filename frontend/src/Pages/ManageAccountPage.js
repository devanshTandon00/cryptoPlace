import React, { Component } from 'react';
import { Avatar } from '@mui/material';
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Label from '../Components/Label';
import './ManageAccountPage.css';

export default class ManageAccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='ManageAccountPage'>
        <Banner title='Manage Account' />
        <div className='manage-account-content'>
          <Avatar
            style={{
              margin: 'auto',
              width: '100px',
              height: '100px',
              backgroundColor: 'black'
            }}
            src='placeholder'
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              style={{
                color: '#bababa',
                fontFamily: 'DM Sans, sans-serif',
                alignItems: 'center',
                marginTop: '2px',
                backgroundColor: 'white',
                border: 'none'
              }}
              onClick={() => console.log("hi")}
            >
              Edit
            </button>
          </div>
          <form>
            <Label title='Name' />
            <Input placeholder='Bobby Brown' />
            <div style={{ marginBottom: '25px' }} />
            <Label title='Email Address' />
            <Input placeholder='Bobby123@gmail.com' />
            <div style={{ marginBottom: '25px' }} />
          </form>
          <Button
            onClick={() => { console.log('hi') }}
            label={'Submit'}
          />
        </div>
      </div>
    );
  }
}
