import React from "react";

// MUI
import { Box, Typography, Button } from "@mui/material";

// React Router
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [ // Array for label and route
    ["Imágenes", "images"],
    ["Patos", "ducks"],
    ["Registrar", "register"],
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        px: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f6f7f6",
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          width: "125px",
          justifyContent: "space-between",
          "&:hover": {
            cursor: "pointer",
          },
          textDecoration: "none",
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
          Ducks
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            component={Link}
            to={`/${page[1]}`}
            key={page[0]}
            sx={{
              my: 2,
              color: "#333232",
              display: "block",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            {page[0]}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
