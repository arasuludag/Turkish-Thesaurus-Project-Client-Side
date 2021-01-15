import React from "react";

import Button from '@material-ui/core/Button';

function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer style={{ marginTop: "200px" }}>
      <div className="footer-copyright text-center py-3 h6">
        <p style={{ textAlign: "center", fontSize: "0.7rem" }}>
          {" "}
          © {yearNow} Copyright: Aras Uludag{" "}
        </p>
        <Button
          variant="contained" size="large"
          style={{
            marginRight: "10px",
            marginBottom: "20px",
            backgroundColor: "#D9CB9E",
            color: "white",
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
            color: "white",
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
