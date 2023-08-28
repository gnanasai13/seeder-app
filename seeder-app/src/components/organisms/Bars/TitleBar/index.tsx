import React from "react";
import AvatarComponent from "../../../atoms/Avatar";
import TypographyComponent from "../../../atoms/Typography";
import { Box, Avatar } from "@mui/material";
import BoxComponent from "../../../atoms/Box";
import vector from "../../../../../images/Vector.png";
import "./index.css";

function TitleBar(props) {
  return (
    <Box className="main-container">
      <Box className="text-container">
        <BoxComponent width="229px" height="42px">
          <TypographyComponent variant="h2">{props.title}</TypographyComponent>
        </BoxComponent>
        <BoxComponent width="500px" height="27px">
          <TypographyComponent variant="h3">
            {props.caption}
          </TypographyComponent>
        </BoxComponent>
      </Box>
      <Box className="avatar-container">
        <AvatarComponent />
        <Avatar className="drop" src={vector} sx={{width: "8.53px",height: "8.53px",}}/>
      </Box>
    </Box>
  );
}

export default TitleBar;
