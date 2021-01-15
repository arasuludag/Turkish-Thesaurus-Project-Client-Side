import React, { useState } from "react";
import axios from "axios";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Input from "./Input.jsx";

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const [tabName, setTabName] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();

    const addedTab = {
      wordId: props.wordData._id,
      tabName: tabName
    };

    axios.post("/api/add-tab", { addedTab }).then((res) => {

    });
  };

  const handleChange = (event) => {
    setTabName(event.target.value);
  };


  return (
    <div>
      <Button variant="contained" color="white" onClick={handleClickOpen} style={{
        backgroundColor: "#4B0082",
        color: "white",
        borderRadius: "33px",
        marginTop: "15px"
      }}>
        Sekme Ekle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Sekme Ekle</DialogTitle>
        <DialogContent>
          <Input
            type="text"
            onChange={handleChange}
            label="Yaz" />

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
