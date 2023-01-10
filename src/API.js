// Axios
import axios from "axios";

// Redux
import { setImageList } from "./store/slices/images";

function getRandomSubarray(arr, size) { // Function used to get a subset of an array
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - size,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

export const fetchTenImages = () => { // Fetch 10 ducks from API
  return (dispatch) => {
    axios
      .get("/list") // Fetch all ducks from API
      .then((response) => {
        const imgObj = response.data.images.map((item, index) => ({
          url: item,
          id: index,
          liked: false,
        }));
        dispatch(setImageList(getRandomSubarray(imgObj, 10))); // then pick 10 random ducks
      })
      .catch((error) => console.log(error));
  };
};
