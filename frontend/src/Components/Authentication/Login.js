import React from "react";
import { useHistory } from "react-router-dom";
import { editUser } from '../../APIFunctions/User'
import Banner from '../Banner';
import Button from '../Button';
import Input from '../Input';
import Label from '../Label';


export default function Login() {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const user = {
      username: form[0].value.toLowerCase(),
      password: form[1].value,
    };

    console.log(user);
    fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // can only send strings to the backend so stringify JSON
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log("return res", res);
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(async (data) => {
        console.log("data", data);
        localStorage.setItem("token", data.token);
        const userWithToken = {
          username: form[0].value.toLowerCase(),
          token: data.token
        }
        const res = await editUser(userWithToken);
        console.log(res);
        if (res) {
          localStorage.setItem("user", userWithToken.username);
          localStorage.setItem("authenticated", 'true');
          localStorage.setItem("firstSession", 'false');
          history.push('/');
        }
      })
      .catch((error) => alert("incorrect username or password"));
  };

  //   useEffect(() => {
  //     fetch("/isUserAuth", {
  //       headers: {
  //         "x-access-token": localStorage.getItem("token"),
  //       },
  //     })
  //       .then((res) => {
  //         console.log(res, res.json(), localStorage.getItem("token"));
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         return data.isLoggedIn ? history.push("/") : null;
  //       })
  //       .catch((error) => alert(error.message));
  //   }, []);

  return (

    <div className='Login'>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <input type="submit" value="submit"></input>
      </form> */}



      <Banner title='Login' />
      <div className='manage-account-content'>
        <form onSubmit={handleSubmit}>
          <Label title='Username' />
          <Input />
          <div style={{ marginBottom: '25px' }} />
          <Label title='Password' />
          <Input type='password' />
          <div style={{ marginBottom: '25px' }} />
          <Button label={'Submit'} />
        </form>
      </div>
    </div>
  );
}
