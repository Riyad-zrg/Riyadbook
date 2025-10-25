import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        {/* Accueil */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Accueil" />
          </ListItemButton>
        </ListItem>

        {/* Pages */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>

        {/* Groupes */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#groups">
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Groupes" />
          </ListItemButton>
        </ListItem>

        {/* Marketplace */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#marketplace">
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>

        {/* Amis */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Amis" />
          </ListItemButton>
        </ListItem>

        {/* Paramètres */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Paramètres" />
          </ListItemButton>
        </ListItem>

        {/* Profil */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
