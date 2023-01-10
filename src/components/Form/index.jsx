import * as React from "react";

// MUI
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  MenuItem,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setDuckList } from "../../store/slices/ducks";

// React Router
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) { // Alert component used for errors in form
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = ({ title, button, edit }) => {
  const navigate = useNavigate(); // Used to navigate through routes

  const dispatch = useDispatch();

  const ducks = useSelector((state) => state.ducks.list); // Global state for created ducks
  const duck = useSelector((state) => state.duck.value); // Global state used to know what duck is being modified
  const liked = useSelector((state) => state.liked.list); // Global state for liked ducks images

  let duckImage = liked.map((item) => ({ value: item, label: item })); // Convert liked images to object format
  duckImage.unshift({ // Add default image
    value: "static/favicon.png",
    label: "static/favicon.png",
  });
  const [values, setValues] = React.useState({
    name: edit ? duck.name : "", // If user is editing then use the duck else empty string
    color: edit ? duck.color : "",
    age: edit ? duck.age : 0,
    image: edit ? duck.image : "static/favicon.png",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [open, setOpen] = React.useState(false); // State used to know if alert component is open
  const [errorMessage, setErrorMessage] = React.useState(""); // State used to control the message showed in alert component

  const handleClose = (event, reason) => { // Handle alert component close
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (event) => { // Handle form submit
    event.preventDefault();

    if (values.name === "") { // Name empty validation
      setErrorMessage("Nombre inválido");
      setOpen(true);
    } else if (values.color === "") { // Color empty validation
      setErrorMessage("Color inválido");
      setOpen(true);
    } else if (values.age < 0) { // age less than 0 validation
      setErrorMessage("Edad inválida");
      setOpen(true);
    } else {
      const newDuck = { // Create new duck with form values
        name: values.name,
        id: ducks.length,
        color: values.color,
        age: values.age,
        image: values.image,
      };
      const newDucks = ducks.slice(); // Duplicate ducks global state
      if (edit) { // if the user is editing then edit the duck with the new values
        const indexDuck = newDucks.findIndex((item) => item.id === duck.id);
        newDucks[indexDuck] = newDuck;
      } else { // Else add duck to existing array
        newDucks.push(newDuck);
      }
      dispatch(setDuckList(newDucks)); // Set ducks global state
      localStorage.setItem("ducks", JSON.stringify(newDucks)); // Set duck un localstorage
      navigate("/ducks"); // Navigate to /ducks route
    }
  };
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://media.4-paws.org/b/8/d/5/b8d5441fec6b84e9c3cba899549b84bb0f193fff/VIER%20PFOTEN_2019-07-18_013-2890x2000.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "calc(100vh - 60px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          width: "30%",
          height: "60%",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            backgroundColor: "#333232",
            width: "100%",
            height: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
            fontWeight: "700",
          }}
        >
          {title}
        </Typography>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "75%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <TextField
            sx={{
              width: "60%",
              marginBottom: "20px",
            }}
            value={values.name}
            onChange={handleChange("name")}
            required
            id="name"
            label="Nombre"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "60%",
              marginBottom: "20px",
            }}
            value={values.color}
            onChange={handleChange("color")}
            required
            id="color"
            label="Color"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "60%",
              marginBottom: "20px",
            }}
            value={values.age}
            onChange={handleChange("age")}
            required
            id="age"
            label="Edad"
            type="number"
            variant="outlined"
          />
          <Box
            sx={{
              width: "60%",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              src={
                values.image === "static/favicon.png"
                  ? `https://random-d.uk/${values.image}`
                  : `https://random-d.uk/api/${values.image}`
              }
              alt={values.image}
              height="50px"
            />
            <TextField
              sx={{
                width: "75%",
              }}
              id="select-user-type"
              select
              label="Imagen del pato"
              value={values.image}
              onChange={handleChange("image")}
              helperText="Por favor selecciona la imagen del pato"
            >
              {duckImage.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Button
            type="submit"
            sx={{
              width: "30%",
              marginBottom: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: "#333232",
            }}
            variant="contained"
          >
            {button}
          </Button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              {errorMessage}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
