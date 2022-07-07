import axios from 'axios';

export function GetAnimeQuote() {
  return new Promise(async(resolve, reject) => {
    await axios("https://animechan.vercel.app/api/random")
      .then((quote) => {
        resolve(quote.data.quote);
      })
      .catch((err) => reject(err));
  });
}
