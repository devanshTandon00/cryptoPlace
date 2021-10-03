import React from "react";
import { useState } from "react";
// import { useHistory } from "react-router";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import validator from "validator";

export default function Register() {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Ready to register user!");
    } else {
      setErrorMessage(
        "X - Password needs to be greater than 8 characters, one lowercase, one uppercase, one number, one symbol"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setErrorMessage("");
    const user = {
      username: form[0].value,
      email: form[1].value,
      password: form[2].value,
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
        if (res.status === 200) setSuccess(true);
        form.reset();
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="Register">
        <div className="manage-account-content">
          {success ? <h5> Successfully registered! </h5> : ""}
          <div style={{ marginBottom: "25px" }} />
          <form onSubmit={handleSubmit}>
            <Label title="Username" />
            <Input type="text" required />
            <div style={{ marginBottom: "25px" }} />
            <Label title="Email" />
            <Input type="email" required />
            <div style={{ marginBottom: "25px" }} />
            <Label title="Password" />
            <Input
              type="password"
              onChange={(e) => validatePassword(e.target.value)}
              required
            />
            <div style={{ marginBottom: "25px" }} />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {errorMessage}
            </span>
            <Button label={"Submit"} />
          </form>
        </div>
      </div>
    </>
  );
}
