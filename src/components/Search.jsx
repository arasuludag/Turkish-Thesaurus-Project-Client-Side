import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import AutoCompleteSearch from "./AutoCompleteSearch.jsx";

function Search(props) {
  const [word, setWord] = useState("");

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const splittedPath = path.split("/");

    const searchedWord = {
      word: splittedPath[2],
    };

    if (splittedPath[2] !== undefined) {
      axios.post("/api/word", { searchedWord }).then((res) => {
        if (res.data === "Nope") {
          props.onResponseChange(searchedWord.word);
        } else props.onResponseChange(res.data);
      });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);

    const searchedWord = {
      word: wordCapitalized,
    };

    axios.post("/api/word", { searchedWord }).then((res) => {
      if (res.data === "Nope") {
        props.onResponseChange(searchedWord.word);
      } else props.onResponseChange(res.data);
      window.history.pushState(
        null,
        wordCapitalized,
        "/ara/" + wordCapitalized
      );
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <AutoCompleteSearch
            onInputChange={(event, newInputValue) => {
              setWord(newInputValue);
            }}
            type="text"
            label="Kelime Ara"
          />
        </Grid>
        <Grid item xs={1} sm={1} lg={1}>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#4B0082",
              borderRadius: "50%",
              padding: "20px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            Ara
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Search;
