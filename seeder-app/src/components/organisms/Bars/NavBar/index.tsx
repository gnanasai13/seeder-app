import React from "react";
import { List, ListItem, ListItemText, Box, Avatar } from "@mui/material";
import Logo from "../../../../../images/icon.png";
import BoltTwoToneIcon from "@mui/icons-material/BoltTwoTone";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import BoxComponent from "../../../atoms/Box";
import TypographyComponent from "../../../atoms/Typography";
import "./index.css";


const NavBar = ({handleShowHome,handleShowCashAcceleration}) => {
  return (
    <Box className="nav-bar">
      <Box className="nav-title">
        
        <Avatar src={Logo} sx={{ width: "29.88px", height: "28px" }} />
        <BoxComponent width="164.12px" height="32px">
          <TypographyComponent variant="h2">Seeder</TypographyComponent>
        </BoxComponent>
      </Box>

      <Box className="nav-items">
        <List>
          <ListItem button onClick={handleShowHome} className="listitem">
            <HomeOutlinedIcon className="icon" />
            <ListItemText className="item-text" primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={handleShowCashAcceleration}
            className="listitem"
          >
            <PaidOutlinedIcon className="icon" />
            <ListItemText className="item-text" primary="Cash Acceleration"  />
          </ListItem>
        </List>
      </Box>
      <Box className="bottom-item">
        <ListItem
          button
          onClick={() => console.log("You clicked watch how to")}
          className="listitem"
        >
          <BoltTwoToneIcon className="icon" />
          <ListItemText primary="Watch how to" className="item-text" />
        </ListItem>
      </Box>
    </Box>
  );
};

export default NavBar;
