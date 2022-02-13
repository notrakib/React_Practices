import { Fragment, useEffect } from "react";
import {
  useParams,
  Route,
  Link,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const route = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Switch>
        <Route path={`${route.path}`} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${route.url}/comments`}>
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path={`${route.path}/comments`}>
          <Comments />
        </Route>
        {/* <Route path="/quotes/:quoteId/comment">
        <Comments></Comments>
      </Route> */}
      </Switch>
    </Fragment>
  );
};

export default QuoteDetail;
