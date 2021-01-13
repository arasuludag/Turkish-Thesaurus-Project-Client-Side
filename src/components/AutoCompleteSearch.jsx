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

  const handleChange = (event) => {
    setWord(event.target.value);

    const searchedWord = {
      word: word,
    };

    if (word !== "" || word !== null || word !== undefined) {
      axios.post("/api/word-suggestions", { searchedWord }).then((res) => {
        if (res.data[0] !== undefined) {
          setSuggestions([]);

          res.data.map((suggestedWord) => {
            var unique = true;

            const arrayQuery = suggestions.map((suggestion) => {
              if (suggestion === suggestedWord.word) {
                unique = false;
              }
            });

            Promise.all(arrayQuery).then(() => {
              if (unique === true) {
                setSuggestions([...suggestions, suggestedWord.word]);
              }
            });
          });
        }
      });
    }
  };

  return (
    <Autocomplete
      options={suggestions.reverse()}
      getOptionLabel={(option) => option}
      fullWidth
      inputValue={props.inputValue}
      onInputChange={props.onInputChange}
      freeSolo
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
