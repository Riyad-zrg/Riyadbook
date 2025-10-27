import { Box, Button, Fab, Modal, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
function Add() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="Nouveau Post"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: "30px" },
        }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>Hello</Box>
      </Modal>
    </>
  );
}
export default Add;
