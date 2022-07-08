import axios from "axios";
const CAT_FACT_LINK = "https://meowfacts.herokuapp.com/";
export function GetCatFacts() {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(CAT_FACT_LINK)
      .then((response) => {
      resolve(response.data[0]);
      })
      .catch((error) => reject(error));
  });
}
