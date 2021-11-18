import React, { useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { findUserByAddress, editUser } from '../APIFunctions/User';
import { Avatar } from '@mui/material';
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Label from '../Components/Label';
import './ManageAccountPage.css';

export default function ManageAccountPage() {
  const { account } = useEthers();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  async function fetchUserInfo() {
    const user = await findUserByAddress(account);
    if (user) {
      setName(user.username);
      setEmail(user.email);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, [account]);

  const onSubmit = async () => {
    const user = {
      address: account,
      username: nameInput,
      email: emailInput
    }
    const res = await editUser(user);
    if (res) {
      window.location.reload();
    }
  }

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
          <Input
            placeholder={name}
            value={nameInput}
            onChange={(e) => { setNameInput(e.target.value) }}
          />
          <div style={{ marginBottom: '25px' }} />
          <Label title='Email Address' />
          <Input
            placeholder={email}
            value={emailInput}
            onChange={(e) => { setEmailInput(e.target.value) }}
          />
          <div style={{ marginBottom: '25px' }} />
        </form>
        <Button
          onClick={() => { onSubmit() }}
          label={'Submit'}
        />
      </div>
    </div>
  );

}
