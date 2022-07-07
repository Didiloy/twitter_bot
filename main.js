import { GetRandomBlague } from "./blagues.js";
import { GetDogFacts} from "./dog_facts.js";
import { GetCatFacts} from "./cat_facts.js";
import { GetAnimeQuote } from "./anime_quote.js";
import "dotenv/config";
import { rwClient } from './twitter.js';
let arrayOfSentences = []

let blague = await GetRandomBlague().then((b) => {
  return b;
});
arrayOfSentences.push(`${blague.joke}\n${blague.answer}`);


let dogFact = await GetDogFacts().then((c) => { return c; });
arrayOfSentences.push(dogFact);

let catFact = await GetCatFacts().then((c) => { return c; });
arrayOfSentences.push(catFact);

let animeQuote = await GetAnimeQuote().then((c) => { return c; });
arrayOfSentences.push(animeQuote);


let randomTweet = arrayOfSentences[Math.floor(Math.random() * arrayOfSentences.length)];
await rwClient.v2.tweet(randomTweet);
