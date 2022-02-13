import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://rakib:123456Aa@cluster0.ydg9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupscollection = db.collection("meetups");

    await meetupscollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
