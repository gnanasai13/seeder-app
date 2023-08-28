import React from "react";
import { Avatar } from "@mui/material";
import profile from "../../../../images/Rectangle 554.jpg";

const AvatarComponent = () => {
  return (
    <div>
      <Avatar
        alt="profile pic"
        variant="rounded"
        src={profile}
        sx={{
          width: "32px",
          height: "32px",
          alignSelf: "stretch",
          flexGrow: 1,
        }}
      />
    </div>
  );
}

export default AvatarComponent;
