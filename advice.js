const BASE_LINK = "https://api.adviceslip.com/advice"
import axios from "axios";
export function GetAdvice() {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(BASE_LINK)
      .then((response) => {
        resolve(response.data.slip.advice);
      })
      .catch((error) => reject(error));
  });
}
