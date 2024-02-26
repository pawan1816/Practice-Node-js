const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const databaseName='e-com'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db= result.db(databaseName);
    let collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data);
}

getData();
