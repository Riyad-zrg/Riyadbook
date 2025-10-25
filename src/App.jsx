import * as React from "react";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { styled, Typography } from "@mui/material";

const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#888",
  margin: "5px",
  "&:hover": {
    backgroundColor: "lightblue",
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  },
}));
function App() {
  return (
    <>
      <Button variant="contained" color="secondary" startIcon={<AcUnitIcon />}>
        Hello world
      </Button>
      <Button disabled variant="contained">
        Hello world
      </Button>
      <Typography variant={"h1"} component={"p"}>
        Hello World !
      </Typography>
      <BlueButton>My Button 1</BlueButton>
      <BlueButton>My Button 2</BlueButton>
    </>
  );
}

export default App;
