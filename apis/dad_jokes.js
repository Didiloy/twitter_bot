const BASE_LINK = "https://icanhazdadjoke.com/"
import axios from "axios";
export function GetDadjoke() {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(BASE_LINK, {headers: {'Accept': 'application/json'}})
      .then((response) => {
        resolve(response.data.joke);
      })
      .catch((error) => reject(error));
  });
}
