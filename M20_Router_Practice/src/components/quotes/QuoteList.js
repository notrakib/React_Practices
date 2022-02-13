import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const search = new URLSearchParams(location.search);
  const isSortingAsc = search.get("sort") === "asc";
  const quote = sortQuotes(props.quotes, isSortingAsc);

  const sortHandler = () => {
    history.push(`${location.pathname}?sort=${isSortingAsc ? "desc" : "asc"}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler} className="btn--flat">
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {quote.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
