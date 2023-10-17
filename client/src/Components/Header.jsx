import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "whitesmoke",
        border: "1px dashed red",
        width: "100dvw",
        height: 125,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "black",
          fontSize: 50,
        }}
      >
        My Web App
      </Typography>
      <MenuIcon
        sx={{
          color: "black",
          fontSize: 45,
          m: 5,
        }}
      />
    </Box>
  );
};

export default Header;
