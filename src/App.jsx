import * as React from "react";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function App() {
  return (
    <>
      <Button variant="contained" color="secondary" startIcon=<AcUnitIcon />>
        Hello world
      </Button>
      <Button disabled variant="contained">
        Hello world
      </Button>
    </>
  );
}

export default App;
