import * as React from "react";

// MUI Components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setDuckList } from "../../store/slices/ducks";
import { setDuck } from "../../store/slices/duck";

// React Router
import { useNavigate } from "react-router-dom";

export default function DuckCard({ id, name, color, age, image }) {
  const ducks = useSelector((state) => state.ducks.list); // Use ducks global state

  const dispatch = useDispatch();

  const handleDelete = () => { // Delete duck, modify ducks global state and local storage
    const newDucks = ducks.filter((duck) => duck.id !== id);
    dispatch(setDuckList(newDucks));
    localStorage.setItem("ducks", JSON.stringify(newDucks));
  };

  const handleEdit = () => { // Edit duck and modify global state
    const editDuck = ducks.find((duck) => duck.id === id);
    dispatch(setDuck(editDuck));
    navigate(`/edit/${id}`);
  };

  const navigate = useNavigate(); // Used to navigate through routes

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ 
          image === "static/favicon.png"
            ? `https://random-d.uk/${image}`
            : `https://random-d.uk/api/${image}`
        }
        title="name"
      />
      <CardContent> 
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Color: ${color}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Edad: ${age}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleEdit} size="small">
          Editar
        </Button>
        <Button onClick={handleDelete} size="small">
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
