import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Input from "./Input.jsx";

function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: userName,
      password: password,
    };

    console.log(user)

    axios.post("/api/login", { user }).then((res) => {
      window.location = "/";
    });
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >

    <Grid item xs={12} sm={5} lg={3}>
        <Paper elevation={4} className="smoothbackground">
          <form onSubmit={handleSubmit}>
            <h1>Login.</h1>
            <div className="row">

                <Input
                  type="email"
                  onChange={handleUserNameChange}
                  label="Email" />

                  <Input
                    type="password"
                    onChange={handlePassChange}
                    label="Password" />


                  <Button variant="contained" size="large" color="white" type="submit" style={{
                    marginLeft: "10px",
                    backgroundColor: "#DC3522",
                    color: "white",
                    borderRadius: "10px",
                  }}>
                Login
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
      </Grid>

  );
}

export default Login;
