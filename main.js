import { GetRandomBlague } from "./apis/blagues.js";
import { GetDogFacts } from "./apis/dog_facts.js";
import { GetCatFacts } from "./apis/cat_facts.js";
import { GetAnimeQuote } from "./apis/anime_quote.js";
import { GetChuckNorrisJokes } from "./apis/chuck_norris.js";
import { GetExcuse } from "./apis/excuses.js";
import { GetUselessFact } from "./apis/useless_fact.js";
import { GetYoMommaJoke } from "./apis/yo_momma.js";
import { GetAdvice } from "./apis/advice.js";
import { GetDadjoke } from "./apis/dad_jokes.js";
import { rwClient } from "./twitter.js";
const timer = (ms) => new Promise((res) => setTimeout(res, ms));
const MINUTE = 1000 * 60;
let arrayOfSentences = [];

while (true) {
  try {
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

    let chuck_norris = await GetChuckNorrisJokes().then((c) => {
      return c;
    });
    arrayOfSentences.push(chuck_norris);

    let excuse = await GetExcuse().then((c) => {
      return c;
    });
    arrayOfSentences.push(excuse);

    let useless_facts = await GetUselessFact().then((f) => {
      return f;
    });
    arrayOfSentences.push(useless_facts);

    let yo_momma = await GetYoMommaJoke().then((m) => {
      return m;
    });
    arrayOfSentences.push(yo_momma); //

    let advice = await GetAdvice().then((a) => {
      return a;
    });
    arrayOfSentences.push(advice);

    //Unavailable for the moment
    // let dad_jokes = await GetDadjoke().then((d) => { return d; });
    // arrayOfSentences.push(dad_jokes);

    let randomTweet =
      arrayOfSentences[Math.floor(Math.random() * arrayOfSentences.length)];
    let now = new Date();
    await rwClient.v2.tweet(randomTweet + "\n-B \u{1F633}");
    console.log(
      now.getHours() + "h" + now.getMinutes() + ": Just tweeted: " + randomTweet
    );

    //Send a tweet every 30 minutes
    await timer(30 * MINUTE);
  } catch (error) {
    await rwClient.v2.tweet("aie aie ça c'est mal passé cette fois\n-B \u{1F633}");
    let now = new Date();
    console.log(now.getHours() + "h" + now.getMinutes() + ": Aie aie ça c'est mal passé cette fois");
  }
}
