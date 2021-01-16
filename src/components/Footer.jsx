import React from "react";

import Button from '@material-ui/core/Button';

function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer style={{ marginTop: "70vh" }}>
      <div>
        <p style={{ textAlign: "center", fontSize: "0.6rem" }}>
          © {yearNow} Copyright: Aras Uludag
        </p>
        <Button
          variant="contained" size="large"
          style={{
            marginRight: "10px",
            marginBottom: "20px",
            backgroundColor: "#D9CB9E",
            borderRadius: "10px",
          }}
          href="/register"
        >
          Register
        </Button>


        <Button
          variant="contained" size="large"
          style={{
            marginRight: "10px",
            marginBottom: "20px",
            backgroundColor: "#DC3522",
            borderRadius: "10px",
          }}
          href="/login"
        >
          Login
        </Button>
      </div>
    </footer>
  );
}
export default Footer;
