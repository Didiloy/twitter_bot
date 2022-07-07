import { resolve } from "path";

export function GetAnimeQuote() {
  return new Promise((resole, rejects) => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quote) => {
        resolve(quote.quote);
      })
      .catch((err) => reject(err));
  });
}
