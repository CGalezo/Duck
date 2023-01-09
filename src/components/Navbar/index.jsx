import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";

const Navbar = () => {

  const pages = ['Imágenes', 'Patos', 'Registrar'];

  return (
    <Box
      sx={{
        width: "100vw",
        px: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f6f7f6"
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "125px",
          justifyContent: "space-between",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <img
          src="https://random-d.uk/static/favicon.png"
          alt="duck"
          height={"40px"}
        />
        <Typography
          sx={{
            color: "#333232",
          }}
          variant="h4"
          color="initial"
        >
          Duck
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: "#333232", display: "block", fontWeight: "600" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
