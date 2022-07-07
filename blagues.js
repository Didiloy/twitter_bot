// const BlaguesAPI = require('blagues-api')
import BlaguesAPI from 'blagues-api';
// require('dotenv').config()
import 'dotenv/config'
const blagues = new BlaguesAPI(process.env.API_BLAGUE_TOKEN);

export function GetRandomBlague(){
    return new Promise(async (resolve, reject) => {
        await blagues.random().then((b) => resolve(b)).catch((err) => { reject(err)})
    })
} 
