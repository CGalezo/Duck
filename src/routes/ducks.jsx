import React from "react";

// MUI
import { Grid } from "@mui/material";

// Componets
import DuckCard from "../components/DuckCard";

// Redux
import { useSelector } from "react-redux";

const Ducks = () => {
  const ducks = useSelector((state) => state.ducks.list);
  return (
    <Grid
      sx={{
        margin: "0",
        marginBottom: "40px",
        px: "80px",
      }}
      container
      rowSpacing={3}
    >
      {ducks?.map((duck) => ( // Map through ducks global state and create a grid with each duck using DuckCard component
        <Grid item={true} key={duck.id} xl={2.4} lg={2.4} md={2.4} sm={2.4}>
          <DuckCard
            image={duck.image}
            id={duck.id}
            name={duck.name}
            color={duck.color}
            age={duck.age}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Ducks;
