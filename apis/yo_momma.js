const BASE_LINK = "https://yomomma-api.herokuapp.com/jokes";
import axios from "axios";
export function GetYoMommaJoke() {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(BASE_LINK)
      .then((response) => {
        resolve(response.data.joke);
      })
      .catch((error) => reject(error));
  });
}
