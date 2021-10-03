import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";

export default function Login() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const user = {
      username: form[0].value,
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
      .then((data) => {
        console.log("data", data);
        localStorage.setItem("token", data.token);
        console.log(data.token + "token");
        history.push("/");
      })
      .catch((error) => alert("incorrect username or password"));
  };

  useEffect(() => {
    fetch("/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then(async (res) => {
        try {
          const data = await res.json();
          console.log("response data?", data);
          return data;
        } catch (error) {
          console.log("Error happened here!");
          console.error(error);
        }
        // console.log(res, localStorage.getItem("token"));
        // return res.json();
      })
      .then((data) => {
        console.log(data);
        return data.isLoggedIn ? history.push("/") : null;
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div className="Login">
      <div className="manage-account-content">
        <form onSubmit={handleSubmit}>
          <Label title="Username" />
          <Input type="text" required />
          <div style={{ marginBottom: "25px" }} />
          <Label title="Password" />
          <Input type="password" required />
          <div style={{ marginBottom: "25px" }} />
          <Button label={"Submit"} />
        </form>
      </div>
    </div>
  );
}
