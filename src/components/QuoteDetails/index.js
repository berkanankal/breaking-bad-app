import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const QuoteDetails = () => {
  const { id } = useParams();

  const { quotes } = useSelector((state) => state.quotes);

  const quote = quotes.find((quote) => quote.quote_id === parseInt(id));

  if (!quote) {
    return <Navigate to="/quotes" />;
  }

  return (
    <div style={{ margin: "50px 30px" }}>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
};

export default QuoteDetails;
