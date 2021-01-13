import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import RadioDeleteButton from "./RadioDeleteButton.jsx";

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [tabId, setTabId] = useState("");
  const [word, setWord] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const deletedWord = {
      word: word,
      tab: tabId,
    };

    console.log(deletedWord);

    if (deletedWord.word !== "") {
      axios.post("/api/delete-word", { deletedWord }).then((res) => {});
    } else console.log("Nonono");
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
        Kelime Sil
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Kelime Sil</DialogTitle>
        <DialogContent>
          <RadioDeleteButton
            sendValue={(value) => setWord(value)}
            sendName={(name) => setTabId(name)}
          />
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