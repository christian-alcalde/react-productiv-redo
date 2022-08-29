import React from "react";

const QuoteDisplay = ({getQuote, quote}) => {
  return (
    <div>
      {!quote &&
        <div>
          <button onClick={getQuote}>Click here for an inspirational quote!</button>
        </div>
      }
      {quote &&
        <div>
          <p>{quote.text} - {quote.author}</p>
          <button onClick={getQuote}>Nü Quøte</button>
        </div>
      }
    </div>
  )
}

export default QuoteDisplay;