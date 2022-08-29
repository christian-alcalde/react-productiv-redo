import React, { useState } from "react";
import QuoteDisplay from "./QuoteDisplay";

const InspirationalQuote = () => {
  const [quote, setQuote] = useState('');

  const getQuote = async () => {
    try{
      let response = await fetch("https://inspo-quotes-api.herokuapp.com/quotes/random");
      let json = await response.json();
      setQuote(json.quote);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <QuoteDisplay getQuote={getQuote} quote={quote}/>
  )
}

export default InspirationalQuote;