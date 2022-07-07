import { GetRandomBlague } from "./blagues.js";
import { GetDogFacts } from "./dog_facts.js";
import { GetCatFacts } from "./cat_facts.js";
import { GetAnimeQuote } from "./anime_quote.js";
import { GetChuckNorrisJokes} from "./chuck_norris.js";
import { GetExcuse } from "./excuses.js";
import { GetUselessFact } from "./useless_fact.js";
import { GetYoMommaJoke } from "./yo_momma.js";
import { GetAdvice } from "./advice.js";
import "dotenv/config";
import { rwClient } from "./twitter.js";
const timer = (ms) => new Promise((res) => setTimeout(res, ms));
const MINUTE = 1000 * 60;
let arrayOfSentences = [];

while (true) {
  let blague = await GetRandomBlague().then((b) => {
    return b;
  });
  arrayOfSentences.push(`${blague.joke}\n${blague.answer}`);

  let dogFact = await GetDogFacts().then((c) => {
    return c;
  });
  arrayOfSentences.push(dogFact);

  let catFact = await GetCatFacts().then((c) => {
    return c;
  });
  arrayOfSentences.push(catFact);

  let animeQuote = await GetAnimeQuote().then((c) => {
    return c;
  });
  arrayOfSentences.push(animeQuote);

let chuck_norris = await GetChuckNorrisJokes().then((c) => { return c; });
arrayOfSentences.push(chuck_norris);

let excuse = await GetExcuse().then((c) => { return c; });
arrayOfSentences.push(excuse);

let useless_facts = await GetUselessFact().then((f) => { return f; });
arrayOfSentences.push(useless_facts);

let yo_momma = await GetYoMommaJoke().then((m) => { return m; }); 
arrayOfSentences.push(yo_momma); //

let advice = await GetAdvice().then((a) => { return a; });
arrayOfSentences.push(advice);

  let randomTweet =
    arrayOfSentences[Math.floor(Math.random() * arrayOfSentences.length)];
      await rwClient.v2.tweet(randomTweet);
    console.log("Just tweeted: " + randomTweet);

  //Send a tweet every 30 minutes
  await timer(30 * MINUTE);
}
