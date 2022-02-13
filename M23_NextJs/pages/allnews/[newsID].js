import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();

  console.log(router.query.newsID);

  return <h1>This is Details</h1>;
};

export default Details;
