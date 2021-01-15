import React, { useState } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Input from "./Input.jsx";
import RadioButton from "./RadioButton.jsx";

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [radio, setRadio] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [word, setWord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);

    const addedWord = {
      word: wordCapitalized,
      relation: radio,
      tab: props.tabData[props.index]._id,
    };

    axios.post("/api/add-word-to-word", { addedWord }).then((res) => {});
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
          marginTop: "50px",
        }}
      >
        Kelime Ekle
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Kelime Ekle</DialogTitle>
        <DialogContent>
          <RadioButton props={(value) => setRadio(value)} />
          <Input type="text" onChange={handleChange} label="Yaz" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            İptal
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Ekle Gitsin
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
