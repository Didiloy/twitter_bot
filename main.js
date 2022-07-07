import { GetRandomBlague } from "./blagues.js";
import { GetDogFacts} from "./dog_facts.js";
import "dotenv/config";
import { rwClient } from './twitter.js';
let arrayOfSentences = []

let blague = await GetRandomBlague().then((b) => {
  return b;
});
arrayOfSentences.push(`${blague.joke}\n${blague.answer}`);


let dogFact = await GetDogFacts().then((c) => { return c; });
arrayOfSentences.push(dogFact);

let randomTweet = arrayOfSentences[Math.floor(Math.random() * arrayOfSentences.length)];
await rwClient.v2.tweet(randomTweet);