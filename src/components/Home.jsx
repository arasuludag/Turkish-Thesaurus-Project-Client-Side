import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Search from "./Search.jsx";
import SearchResult from "./SearchResult.jsx";

function Home() {
  const [word, setWord] = useState("");

  return (
    <div className="App">
      <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
        <Grid item xs={12} sm={10} lg={7} >
          <Paper elevation={3} className="smoothbackground">
          <h1 style = {{textAlign: "center"}}>TResaurus</h1>

        <Search onResponseChange={(newWord) => {
          setWord(newWord);
        }} />
          <br />
          <br />


</Paper>
        </Grid>
          <SearchResult word = {word}/>
      </Grid>
    </div>
  );
}

export default Home;
