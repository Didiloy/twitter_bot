const BlaguesAPI = require('blagues-api')
require('dotenv').config()
const blagues = new BlaguesAPI(process.env.API_BLAGUE_TOKEN);

const GetRandomBlague = async () => {
    await blagues.random().then((b) => {console.log(b);})
}

const blague = GetRandomBlague();
console.log(blague);