import { GetRandomBlague } from "./blagues.js";
import "dotenv/config";
import axios from "axios";
import { rwClient } from './twitter.js';

let blague = await GetRandomBlague().then((b) => {
  return b;
});

await rwClient.v2.tweet(`${blague.joke}\n${blague.answer}`);