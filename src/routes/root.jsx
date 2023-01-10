import React, { useEffect } from "react";

// MUI Components
import { Box } from "@mui/material";

// Components
import Navbar from "../components/Navbar";

// React Router
import { Outlet } from "react-router-dom"; // Used to know where to put children routes like /ducks /edit /register /home etc

// Redux
import { fetchTenImages } from "../API";
import { useDispatch } from "react-redux";
import { setDuckList } from "../store/slices/ducks";
import { setLikedList } from "../store/slices/liked";

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => { // When component is created fetch images from API and set global states with localstorage data
    dispatch(fetchTenImages());
    if (localStorage.getItem("ducks")) {
      dispatch(setDuckList(JSON.parse(localStorage.getItem("ducks"))));
    }
    if (localStorage.getItem("liked")) {
      dispatch(setLikedList(JSON.parse(localStorage.getItem("liked"))));
    }
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box
        sx={{
          width: "100vw",
        }}
      >
        <Outlet /> 
      </Box>
    </Box>
  );
};

export default Root;
