import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Input from "./Input.jsx";
import Snackbar from "./Snackbar.jsx";

const CustomDialog = withStyles({
  paper: {
    backgroundColor: "#1c1d26",
  },
})(Dialog);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function FormDialog(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [tabName, setTabName] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  var tabId = "";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const history = useHistory();
  const handleClose = () => {
    history.push("/");
    history.goBack();
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.tabData.map((tab) => {
      if (tab.name === tabName) {
        tabId = tab._id;
      }
      return tabId;
    });

    if (props.wordData.tabs[0] !== tabId && tabId !== "") {
      axios.post("/api/delete-tab", { tabId }).then((res) => {
          setSnackbar(true);
      });
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
      <CustomDialog
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
      </CustomDialog>
      <Snackbar snackbar = {snackbar} setSnackbar={(bool) => {setSnackbar(bool);}}/>
    </div>
  );
}

export default FormDialog;
