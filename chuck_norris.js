const CHUCK_NORRIS_LINK = "https://api.chucknorris.io/jokes/random";
import axios from "axios";
export function GetChuckNorrisJokes() {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(CHUCK_NORRIS_LINK)
      .then((response) => {
        resolve(response.data.value);
      })
      .catch((error) => reject(error));
  });
}
