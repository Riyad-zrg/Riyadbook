import * as React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

function Conversation({ person, conversation }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={"Avatar Image of" + person.username} src={person.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={conversation.title}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", display: "inline" }}
            >
              {conversation.lastMessageUser}
            </Typography>
            {conversation.lastMessage}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

Conversation.propTypes = {
  person: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string,
  }),
  conversation: PropTypes.shape({
    title: PropTypes.string,
    lastMessageUser: PropTypes.string,
    lastMessage: PropTypes.string,
  }),
};
export default Conversation;
