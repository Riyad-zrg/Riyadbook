import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DateRangeIcon from "@mui/icons-material/DateRange";

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
          width={650}
          height={400}
          backgroundColor="white"
          padding={3}
          borderRadius={5}
        >
          <Typography variant={"h5"} color={"gray"} textAlign={"center"}>
            Créer un nouveau post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: "40px", height: "40px" }}
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
            rows={8}
            placeholder="Quoi de neuf, Riyad ?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} marginBottom={2} marginTop={2}>
            <EmojiEmotionsIcon fontSize="large" color={"primary"} />
            <ImageIcon fontSize="large" color={"primary"} />
            <VideoCameraBackIcon fontSize="large" color={"primary"} />
            <PersonAddAlt1Icon fontSize="large" color={"success"} />
          </Stack>
          <ButtonGroup
            fullWidth={true}
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}
export default Add;
