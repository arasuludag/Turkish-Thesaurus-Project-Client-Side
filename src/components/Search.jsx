import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

import AutoCompleteSearch from "./AutoCompleteSearch.jsx";

function Search(props) {
  const [word, setWord] = useState("");

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    var path = location.pathname;
    console.log(path);

    const splittedPath = path.split("/");

    if (splittedPath[2] !== undefined && splittedPath[2].length > 2) {
      axios.post("/api/word", { word: splittedPath[2] }).then((res) => {
        if (res.data === "Nope") {
          props.onResponseChange(splittedPath[2]);
        } else props.onResponseChange(res.data);
      });
    }
  }, [location.pathname]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);

    if (wordCapitalized !== undefined && wordCapitalized.length > 2) {
      axios.post("/api/word", { word: wordCapitalized }).then((res) => {
        if (res.data === "Nope") {
          props.onResponseChange(wordCapitalized);
        } else props.onResponseChange(res.data);
        history.push("/ara/" + word);
      });
    }
  };

  return (
    <Grid item xs={8} lg={7}>
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <AutoCompleteSearch
            onInputChange={(event, newInputValue) => {
              setWord(newInputValue);
            }}
            type="text"
            label="Kelime Ara"
          />
        </Grid>
        <Grid item xs={1} sm={1} lg={1}>
          <IconButton
            type="submit"
            aria-label="delete"
            style={{ color: "purple" }}
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  </Grid>
  );
}

export default Search;
