import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../../redux/quotesSlice";
import Loading from "../Loading";

const Quotes = () => {
  const dispatch = useDispatch();
  const { quotes, status, error } = useSelector((state) => state.quotes);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {status === "loading" && (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <Loading />
        </div>
      )}

      {status === "succeeded" && (
        <div>
          {quotes.map((quote) => (
            <div key={quote.quote_id}>{quote.quote}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Quotes;
