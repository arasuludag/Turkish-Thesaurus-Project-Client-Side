import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Input from "./Input.jsx";

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [tabName, setTabName] = useState("");

  var tabId = "";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await props.tabData.map((tab) => {
      if (tab.name === tabName) {
        tabId = tab._id;
      }
    });

    if (props.wordData.tabs[0] !== tabId && tabId !== "") {
      axios.post("/api/delete-tab", { tabId }).then((res) => {});
    }
  };

  const handleChange = (event) => {
    setTabName(event.target.value);
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
        Sekme Sil
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Kelime Sil</DialogTitle>
        <DialogContent>
          <Input type="text" onChange={handleChange} label="Sekme Adı" />
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
