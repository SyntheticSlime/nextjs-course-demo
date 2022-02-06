import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;

      //const { title, image, address, description } = data;

      const client = await MongoClient.connect('mongodb+srv://sbandes:RicosRoughNecks1!@cluster0.nqyrx.mongodb.net/meetups?retryWrites=true&w=majority');
      const db = client.db()

      const meetupsCollection = db.collection('meetups'); //doesn't need to be the same name as the db

      const result = await meetupsCollection.insertOne(data); //insertOne returns a promise

      console.log(result);

      client.close;

      res.status(201).json({message: 'Meetup inserted'});
    }
}

export default handler;