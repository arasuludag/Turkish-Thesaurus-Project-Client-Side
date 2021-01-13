import React, { useState, useEffect } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import AddWord from "./AddWord.jsx";
import Tabs from "./Tabs.jsx";

function ShowSampleUsage(props) {
  const [usage, setUsage] = useState([]);

  useEffect(() => {

    axios.post("/api/get-sample-usage", { word: props.wordData.word }).then((res) => {
      setUsage(res.data);
    });

  }, [props.wordData.word]);


  function List() {
    if (usage !== undefined) {
      return usage.map((sample) => {
        return (<div>

          <h2>{sample.Soz}</h2>
          <p><i>{sample.Tip}</i></p>
          <p>{sample.Anlam}</p>
          <br/>

        </div>
        )
      });
      }
  }


  return (
    <div>
      {List()}
    </div>


  );
}

export default ShowSampleUsage;
