import { useState } from "react";
import { SearchForm } from "../SearchForm";
import { Results } from "./Results";

import "../App.css"
import { ColorRing } from "react-loader-spinner";

interface IResult {
  id: string,
  trackName: string,
  artistName: string,
  released: string,
  url: string
}

export const Application = () => {
  const [results, setResults] = useState<IResult[]>([]);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [noResultsFound, setNoResultsFound] = useState(false);



  return(
    <>
      <SearchForm setResults={setResults} setResultsLoading={setResultsLoading} setNoResultsFound={setNoResultsFound}></SearchForm>

      <div className="results-container">
        <Results results={results} loading={resultsLoading}>
        </Results>

        <ColorRing
          visible={resultsLoading}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}>
        </ColorRing>

        <p className={noResultsFound && !resultsLoading? "" : "hide"} >No results found.</p>


      </div>

      
    </>
  )

}