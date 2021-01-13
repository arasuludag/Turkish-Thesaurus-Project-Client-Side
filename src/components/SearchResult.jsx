import React, { useState, useEffect } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import AddWord from "./AddWord.jsx";
import Tabs from "./Tabs.jsx";

function SearchResult(props) {
  const [tabData, setTabData] = useState("Wait");
  const [genWords, setGenWords] = useState("Wait");

  useEffect(() => {

    axios.post("/api/tabs", { word: props.word.word }).then((res) => {
      setTabData(res.data);
    });
    axios.post("/api/generated-words", { word: props.word.word }).then((res) => {
      setGenWords(res.data);
      console.log(res.data)
    });

  }, [props.word]);

  function checkData() {
    if (props.word === undefined || props.word === "") return null;
    else if (props.word.word === undefined)
      return (
        <Paper elevation={3} className="smoothbackground">
          <h1>{props.word} diye bir şey yok.</h1>
          <AddWord word={props.word} />
        </Paper>
      );
    else
      return (
        <Paper elevation={3} className="smoothbackground">
          <h1 style={{ textAlign: "center" }}>{props.word.word}</h1>
          <Tabs tabData={tabData} wordData={props.word} genWords={genWords} />
        </Paper>
      );
  }

  return (
    <Grid item xs={12} sm={10} lg={7}>
      {checkData()}
    </Grid>
  );
}

export default SearchResult;
