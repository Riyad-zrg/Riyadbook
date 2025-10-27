import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
function Add() {
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}
export default Add;
