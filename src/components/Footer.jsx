import React from "react";

import Button from '@material-ui/core/Button';

function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer style={{ marginTop: "80vh" }}>
      <div>
        <p style={{ textAlign: "center", fontSize: "0.6rem" }}>
          © {yearNow} Copyright: Aras Uludag
        </p>
      </div>
    </footer>
  );
}
export default Footer;
