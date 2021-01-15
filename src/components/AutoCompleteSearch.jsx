/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const CustomTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "purple",
      },
    },
    "& label.Mui-focused": {
      color: "white",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ComboBox(props) {
  const classes = useStyles();

  const [word, setWord] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setWord(event.target.value);

    setSuggestions([]);

    if (word !== "" || (word !== undefined && word.length > 2)) {
      setLoading(true);
      axios.post("/api/word-suggestions", { word: word }).then((res) => {
        setSuggestions([...res.data]);
        setLoading(false);
      });
    }
  };

  return (
    <Autocomplete
      options={suggestions}
      getOptionLabel={(option) => option.word}
      fullWidth
      inputValue={props.inputValue}
      onInputChange={props.onInputChange}
      freeSolo
      selectOnFocus
      loading={loading}
      loadingText={"Bekle biraz..."}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          className={classes.margin}
          autoFocus={true}
          type={props.type}
          label={props.label}
          variant="outlined"
          onChange={props.onChange}
          onInput={handleChange}
        />
      )}
    />
  );
}
