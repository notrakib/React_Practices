import { Fragment } from "react";
import Link from "next/link";

const NewsList = () => {
  return (
    <Fragment>
      <h1>This is NewsList</h1>
      <ul>
        <li>
          <Link href="/allnews/1">Cat</Link>
        </li>
        <li>
          <Link href="/allnews/2">Cow</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsList;
