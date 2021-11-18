import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { findUserByAddress, editUser } from '../APIFunctions/User';
import { Avatar } from '@mui/material';
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Label from '../Components/Label';
import './ManageAccountPage.css';

export default function ManageAccountPage() {
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  async function fetchUserInfo() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    setAddress(accounts[0]);
    const user = await findUserByAddress(accounts[0]);
    if (user) {
      setName(user.username);
      setEmail(user.email);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, [address]);

  const onSubmit = async () => {
    const user = {
      address: address,
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
