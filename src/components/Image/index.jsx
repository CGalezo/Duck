import React from "react";

// MUI
import { Card, CardActions, IconButton, CardMedia } from "@mui/material";

// MUI Icon
import FavoriteIcon from "@mui/icons-material/Favorite";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setImageList } from "../../store/slices/images";
import { setLikedList } from "../../store/slices/liked";

const Image = ({ id, avatar, liked }) => {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.images.list); // Global state for ducks images
  const likedDucks = useSelector((state) => state.liked.list); // Global state for liked duck images

  const handleClick = () => { // When click on like button add the image to liked images and change the button color
    const newImages = [...images];
    const index = newImages.findIndex((obj) => obj.id === id);
    if (!newImages[index].liked) {
      const newLiked = likedDucks.slice();
      newLiked.push(newImages[index].url);
      dispatch(setLikedList(newLiked));
      localStorage.setItem("liked", JSON.stringify(newLiked));
    }
    newImages[index] = { ...newImages[index], liked: !newImages[index].liked };
    dispatch(setImageList(newImages));
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        sx={{
          height: 221,
        }}
        image={avatar}
        alt={id}
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <IconButton onClick={handleClick} aria-label="add to favorites">
          <FavoriteIcon
            sx={{
              color: liked ? "red" : "#757474",
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Image;
