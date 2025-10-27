import {
  Avatar,
  Box,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
}));

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
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={800}
          height={520}
          backgroundColor="white"
          padding={3}
          borderRadius={5}
        >
          <Typography variant={"h5"} color={"gray"} textAlign={"center"}>
            Créer un nouveau post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              alt="Avatar"
              src="https://media.licdn.com/dms/image/v2/D4E03AQHyxEVxYejbsw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725607631430?e=2147483647&v=beta&t=z7BJKnTdQmBANNl3lik6dqXQXSg7JHIRfvWe4zSzeR8"
            />
            <Typography fontWeight={500} variant={"span"}>
              Riyad Zerrougui
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Quoi de neuf, Riyad ?"
            variant="standard"
          />
        </Box>
      </StyledModal>
    </>
  );
}
export default Add;
