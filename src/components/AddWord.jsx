import React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";

function AddWord(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const addedWord = {
      word: props.word,
    };

    axios.post("/api/add-word", { addedWord }).then((res) => {
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        variant="contained"
        size="large"
        color="white"
        type="submit"
        style={{
          backgroundColor: "#DC3522",
          color: "#fff",
          borderRadius: "10px",
        }}
      >
        Ekleyeyim Bari
      </Button>
    </form>
  );
}

export default AddWord;
