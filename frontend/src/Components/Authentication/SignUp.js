import React from "react";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import Banner from '../Banner';
import Button from '../Button';
import Input from '../Input';
import Label from '../Label';

export default function SignUp() {
  const [success, setSucess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form[0].value);

    const user = {
      username: form[0].value,
      password: form[1].value,
      email: form[2].value,
    };

    fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // can only send strings to the backend so stringify JSON
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) setSucess(true);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      {/* {success ? <h5> Successfully registered! </h5> : <h5> Registration! </h5>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <input type="email" placeholder="email"></input>
        <input type="submit" value="register"></input>
      </form> */}


      <div className='Register'>

        {/* <form onSubmit={handleSubmit}>
  <input type="text" placeholder="username"></input>
  <input type="password" placeholder="password"></input>
  <input type="submit" value="submit"></input>
</form> */}



        <Banner title='Register' />
        <div className='manage-account-content'>
          <form>
            <Label title='Email' />
            <Input placeholder='Bobby123@gmail.com' />
            <div style={{ marginBottom: '25px' }} />
            <Label title='Username' />
            <Input placeholder='Bobby123' />
            <div style={{ marginBottom: '25px' }} />
            <Label title='Password' />
            <Input placeholder='Password' />
            <div style={{ marginBottom: '25px' }} />
          </form>
          <Button
            onClick={() => { console.log('hi') }}
            label={'Submit'}
          />
        </div>
      </div>
    </>
  );
}
