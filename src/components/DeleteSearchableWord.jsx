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
  const [word, setWord] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (word !== "") {
      axios.post("/api/delete-searchable-word", { word }).then((res) => {});
    }
  };

  const handleChange = (event) => {
    setWord(event.target.value);
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
          marginTop: "15px",
        }}
      >
        Kelimeyi Komple Sil
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Kelime Sil</DialogTitle>
        <DialogContent>
          <Input type="text" onChange={handleChange} label="Kelime" />
          <h4>Bir daha düşün. Kelimeyi komple silmek üzeresin!</h4>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            İptal
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Sil Gitsin
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
