import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   console.log("2");

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export const getStaticProps = async (context) => {
  const client = await MongoClient.connect(
    "mongodb+srv://rakib:123456Aa@cluster0.ydg9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupscollection = db.collection("meetups");

  const meetups = await meetupscollection.find().toArray();
  client.close();
  console.log("a");

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 100,
  };
};

export default HomePage;
