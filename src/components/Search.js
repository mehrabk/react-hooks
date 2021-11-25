import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("javascript");
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);

  // console.log("I Run With Every Render");

  // useEffect(() => {
  //   console.log("Dependency = [] => I Run At Initial Render");
  // }, []);

  // useEffect(() => {
  //   console.log(
  //     "Dependency = nothing => I Run At Initail Render And Run After Every Rerender"
  //   );
  // });

  // useEffect(() => {
  //   console.log(
  //     "Dependency = [term] => I Run At Initail Render And Run Every term Change"
  //   );
  // }, [term]);

  // for immediately call function after declare it
  // useEffect(() => {
  //   (async () => {
  //     console.log("wow");
  //   })();
  // });

  // if we not have debounce state and directly use term for dependency of useEffect and setTime and fetch
  // then we type for exmaple javascript and then immediately redo to javascript request send to api
  // ==> for inhance performance we use debounceTerm state and send request with useEffect that have debounceTerm dependency

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceTerm,
        },
      });
      setResults(data.query.search);
    };
    fetchData();
  }, [debounceTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
