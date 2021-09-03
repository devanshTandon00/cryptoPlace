import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import './ManageAccountPage.css';

export default class ManageAccountPage extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (
      <div className='ManageAccountPage'>
        <Banner title='Manage Account'/>
        <div className='manage-account-form'>
          {/* <Avatar>H</Avatar> */}
          <Avatar style={{margin:'auto'}}>
            H
          </Avatar>
          <Button
            onClick={()=>{console.log('hi')}}
            label={'Submit'}
          />
        </div>
      </div>
    );
  }
}

