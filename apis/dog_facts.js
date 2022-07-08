import axios from "axios";
const DOG_FACT_LINK = "https://dog-api.kinduff.com/api/facts";
export function GetDogFacts() {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(DOG_FACT_LINK)
      .then((response) => {
      resolve(response.data.facts[0]);
      })
      .catch((error) => reject(error));
  });
}
