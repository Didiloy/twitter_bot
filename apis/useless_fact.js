const BASE_LINK = "https://uselessfacts.jsph.pl/random.json"
import axios from "axios";
export function GetUselessFact() {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(BASE_LINK)
      .then((response) => {
        resolve(response.data.text);
      })
      .catch((error) => reject(error));
  });
}
