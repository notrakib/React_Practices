import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://rakib:123456Aa@cluster0.ydg9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupscollection = db.collection("meetups");

  const meetups = await meetupscollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupID: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupID;

  const client = await MongoClient.connect(
    "mongodb+srv://rakib:123456Aa@cluster0.ydg9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupscollection = db.collection("meetups");

  const meetups = await meetupscollection.findOne({ _id: ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        image: meetups.image,
        id: meetups._id.toString(),
        title: meetups.title,
        address: meetups.address,
        description: meetups.description,
      },
    },
  };
};

export default MeetupDetails;
