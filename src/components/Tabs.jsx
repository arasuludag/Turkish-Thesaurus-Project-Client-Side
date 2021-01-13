import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import AddWordtoWord from "./AddWordtoWord.jsx";
import AddTab from "./AddTab.jsx";
import DeleteWord from "./DeleteWord.jsx";
import DeleteTab from "./DeleteTab.jsx";
import DeleteSearchableWord from "./DeleteSearchableWord.jsx";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "transparent",
  },
}));

export default function CustomizedTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function ImportedThesaurusWords(index) {
    if (props.tabData[index].thesaurus === undefined) return <h1> </h1>;
    else
      return props.tabData[index].thesaurus.map((word) => {
        return (
          <Button
            variant="contained"
            style={{
              marginRight: "15px",
              marginBottom: "15px",
              backgroundColor: "#7BC17E",
              color: "white",
              borderRadius: "10px",
            }}
            href={"/ara/" + word}
          >
            {word}
          </Button>
        );
      });
  }

  function ImportedGeneratedThesaurusWords(index) {
    if (props.genWords.thesaurus === undefined || index !== 0) return null;
    else
      return props.genWords.thesaurus.map((word) => {
        var dublicate = false;
        props.tabData[index].thesaurus.map((enteredWord) => {
          if (enteredWord === word) {
            return (dublicate = true);
          }
        });
        if (dublicate) return null;
        else
          return (
            <Button
              variant="contained"
              style={{
                boxShadow: "0 0 0 2pt white",
                marginRight: "15px",
                marginBottom: "15px",
                backgroundColor: "#7BC17E",
                color: "white",
                borderRadius: "10px",
              }}
              href={"/ara/" + word}
            >
              {word}
            </Button>
          );
      });
  }

  function ImportedSimilarWords(index) {
    if (props.tabData[index].similar === undefined) return <h1> </h1>;
    else
      return props.tabData[index].similar.map((word) => {
        return (
          <Button
            variant="contained"
            style={{
              marginRight: "15px",
              marginBottom: "15px",
              backgroundColor: "#D0C212",
              color: "white",
              borderRadius: "10px",
            }}
            href={"/ara/" + word}
          >
            {word}
          </Button>
        );
      });
  }

  function ImportedGeneratedSimilarWords(index) {
    if (props.genWords.similar === undefined || index !== 0) return null;
    else
      return props.genWords.similar.map((word) => {
        var dublicate = false;
        props.tabData[index].similar.map((enteredWord) => {
          if (enteredWord === word) {
            return (dublicate = true);
          }
        });
        if (dublicate) return null;
        else
          return (
            <Button
              variant="contained"
              style={{
                boxShadow: "0 0 0 2pt white",
                marginRight: "15px",
                marginBottom: "15px",
                backgroundColor: "#D0C212",
                color: "white",
                borderRadius: "10px",
              }}
              href={"/ara/" + word}
            >
              {word}
            </Button>
          );
      });
  }

  function ImportedAntonymousWords(index) {
    if (props.tabData[index].antonymous === undefined) return <h1> </h1>;
    else
      return props.tabData[index].antonymous.map((word) => {
        return (
          <Button
            variant="contained"
            style={{
              marginRight: "15px",
              marginBottom: "15px",
              backgroundColor: "#C93030",
              color: "white",
              borderRadius: "10px",
            }}
            href={"/ara/" + word}
          >
            {word}
          </Button>
        );
      });
  }

  function ImportedGeneratedAntonymousWords(index) {
    if (props.genWords.antonymous === undefined || index !== 0) return null;
    else
      return props.genWords.antonymous.map((word) => {
        var dublicate = false;
        props.tabData[index].antonymous.map((enteredWord) => {
          if (enteredWord === word) {
            return (dublicate = true);
          }
        });
        if (dublicate) return null;
        else
          return (
            <Button
              variant="contained"
              style={{
                boxShadow: "0 0 0 2pt white",
                marginRight: "15px",
                marginBottom: "15px",
                backgroundColor: "#C93030",
                color: "white",
                borderRadius: "10px",
              }}
              href={"/ara/" + word}
            >
              {word}
            </Button>
          );
      });
  }

  function Words() {
    if (
      props.tabData === undefined ||
      props.tabData === false ||
      props.tabData === "Wait" ||
      props.tabData === "Nope"
    ) {
      return <h1> </h1>;
    } else return props.tabData.map((tab, index) => {
      return (
        <TabPanel value={value} index={index}>
          {ImportedThesaurusWords(index)}
          {ImportedGeneratedThesaurusWords(index)}
          {ImportedSimilarWords(index)}
          {ImportedGeneratedSimilarWords(index)}
          {ImportedAntonymousWords(index)}
          {ImportedGeneratedAntonymousWords(index)}
        </TabPanel>
      );
    });
  }

  function TabsThemselves() {
    if (
      props.tabData === undefined ||
      props.tabData === false ||
      props.tabData === "Wait" ||
      props.tabData === "Nope"
    ) {
      return <h1> </h1>;
    } else {
      return props.tabData.map((tab, index) => {
        return <StyledTab label={tab.name} />;
      });
    }
  }

  function ImportedTabs() {
    if (
      props.tabData === undefined ||
      props.tabData === false ||
      props.tabData === "Wait"||
      props.tabData === "Nope"
    )
      return <h1> </h1>;
    else
      return (
        <div className={classes.demo2}>
          <StyledTabs value={value} onChange={handleChange}>
            {TabsThemselves()}
          </StyledTabs>
          {Words()}
        </div>
      );
  }

  return (
    <div className={classes.root}>
      {ImportedTabs()}
      <AddWordtoWord tabData={props.tabData} index={value} />
      <AddTab wordData={props.wordData} />
      <DeleteWord tabData={props.tabData} />
      <DeleteTab tabData={props.tabData} wordData={props.wordData} />
      <DeleteSearchableWord />
    </div>
  );
}
