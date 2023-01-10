import React from "react";

// MUI
import { Grid, Box, Button } from "@mui/material";

// Componets
import Image from "../components/Image";

// Redux
import { useSelector } from "react-redux";

// Redux
import { fetchTenImages } from "../API";
import { useDispatch } from "react-redux";

const Images = () => {
  const images = useSelector((state) => state.images.list); // Duck images global state
  const dispatch = useDispatch();

  const handleClick = () => { // When click on button generate 10 new ducks
    dispatch(fetchTenImages());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          margin: "0",
          marginBottom: "40px",
          px: "80px",
        }}
        container
        rowSpacing={3}
      >
        {images?.map((image) => (
          <Grid item={true} key={image.id} xl={2.4} lg={2.4} md={2.4} sm={2.4}>
            <Image
              avatar={`https://random-d.uk/api/${image.url}`}
              id={image.id}
              liked={image.liked}
            />
          </Grid>
        ))}
      </Grid>

      <Button
        onClick={handleClick}
        sx={{
          width: "20%",
          marginBottom: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#333232",
        }}
        variant="contained"
      >
        Generar patos
      </Button>
    </Box>
  );
};

export default Images;
