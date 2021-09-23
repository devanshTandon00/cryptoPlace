import React from "react";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

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
      {success ? <h5> Successfully registered! </h5> : <h5> Registration! </h5>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <input type="email" placeholder="email"></input>
        <input type="submit" value="register"></input>
      </form>
    </>
  );
}
