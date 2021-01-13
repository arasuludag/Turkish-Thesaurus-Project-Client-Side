import React, { useState, useEffect } from "react";
import axios from "axios";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function RadioButtonsGroup({ sendValue, sendName }) {
  const [value, setValue] = React.useState("");
  const [name, setName] = React.useState("");
  const [tabData, setTabData] = useState("");

  sendValue(value);
  sendName(name);

  useEffect(() => {
    const fetchData = async () => {
      const tabResult = await axios("/api/tabs");
      setTabData(tabResult.data);
    };
    fetchData();
  }, [value]);

  function listThesaurusWords(tab) {
    if (tab.thesaurus === undefined || tab.thesaurus === "") return (<h1> </h1>);
    else
      return tab.thesaurus.map((thesaurusWord) => {
        return (
          <FormControlLabel
            value={thesaurusWord}
            name={tab._id}
            control={<Radio />}
            label={thesaurusWord}
          />
        );
      });
  }

  function listSimilarWords(tab) {
    if (tab.similar === undefined || tab.similar === "") return (<h1> </h1>);
    else
      return tab.similar.map((similarWord) => {
        return (
          <FormControlLabel
            value={similarWord}
            name={tab._id}
            control={<Radio />}
            label={similarWord}
          />
        );
      });
  }

  function listAntonymousWords(tab) {
    if (tab.antonymous === undefined || tab.antonymous === "")
      return (<h1> </h1>);
    else
      return tab.antonymous.map((antonymousWord) => {
        return (
          <FormControlLabel
            value={antonymousWord}
            name={tab._id}
            control={<Radio />}
            label={antonymousWord}
          />
        );
      });
  }

  function listWords() {
    if (tabData === undefined || tabData === "" || tabData === null)
      return (<div> </div>);
    else
      return tabData.map((tab) => {
        return (
          <RadioGroup value={value} onChange={handleChange}>
            {listThesaurusWords(tab)}
            {listSimilarWords(tab)}
            {listAntonymousWords(tab)}
            <p>---</p>
          </RadioGroup>
        );
      });
  }

  const handleChange = (event) => {
    setName(event.target.name);
    setValue(event.target.value);
  };

  return <FormControl component="fieldset">{listWords()}</FormControl>;
}
