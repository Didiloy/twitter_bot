import { GetRandomBlague } from "./blagues.js";
import "dotenv/config";
import axios from "axios";
import { rwClient } from './twitter.js';

let blague = await GetRandomBlague().then((b) => {
  return b;
});
console.log(blague);
// Instantiate with desired auth type (here's Bearer v2 auth)
// const twitterClient = new TwitterApi(process.env.TWITTER_BEARER8TOKEN);

await rwClient.v2.tweet(`${blague.joke}\n${blague.answer}`);