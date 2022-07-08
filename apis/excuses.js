const EXCUSE_LINK = "https://excuser.herokuapp.com/v1/excuse"
import axios from "axios";
export function GetExcuse() {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(EXCUSE_LINK)
      .then((response) => {
        resolve(response.data[0].excuse);
      })
      .catch((error) => reject(error));
  });
}
