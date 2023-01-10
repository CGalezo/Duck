import React from "react";

// MUI
import { Box, Typography, Button } from "@mui/material";

// React Router
import { Link } from "react-router-dom";

const Home = () => {
  const pages = [ // Array for label and route
    ["Tendencias", "images"],
    ["Patos", "ducks"],
    ["Crear patos", "register"],
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "#333232",
          }}
        >
          {" "}
          a DUCK solution!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#333232",
            width: "400px",
          }}
        >
          {" "}
          Mira las últimas tendencias en patos, registra/administra tus patos y
          mucho más!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {pages.map((page) => (
            <Button
              component={Link}
              to={`/${page[1]}`}
              key={page[0]}
              sx={{
                width: "30%",
                marginBottom: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#333232",
              }}
              variant="contained"
            >
              {page[0]}
            </Button>
          ))}
        </Box>
      </Box>
      <img
        src="https://media1.giphy.com/media/rtRflhLVzbNWU/giphy.gif"
        alt="dacing"
      />
    </Box>
  );
};

export default Home;
