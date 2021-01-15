import React, { useState } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Input from "./Input.jsx";

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("/api/make-editor", { email: email }).then((res) => {});
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="white"
        onClick={handleClickOpen}
        style={{
          backgroundColor: "#4B0082",
          color: "white",
          borderRadius: "33px",
          marginTop: "50px",
        }}
      >
        Editör Ata
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editör Ata</DialogTitle>
        <DialogContent>
          <p>Bu konuda dikkat!</p>
          <Input type="text" onChange={handleChange} label="E-Mail" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            İptal
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Editör Yap
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
