import { Box, Typography } from "@mui/material";
import React from "react";

const Error = () => { // View for errors
  return (
    <Box
      sx={{
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "white",
          mb: "20px",
        }}
        variant="h1"
        color="initial"
      >
        Quite an Error! Maybe next time.
      </Typography>
      <Box
        sx={{
          height: "85%",
          width: "60%",
        }}
      >
        <img
          width={"100%"}
          height={"100%"}
          src="https://media.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif"
          alt="troll"
        />
      </Box>
    </Box>
  );
};

export default Error;
