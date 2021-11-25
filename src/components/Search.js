import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
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

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data);
    };
    fetchData();
  }, [term]);

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
    </div>
  );
};

export default Search;
