import React, { useEffect, useState } from "react";

export default function API({ getItems }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getItems());
    console.log("API`s useEffect Rendered");
  }, [getItems]);
  return data.map((d, i) => <p key={i}>{d}</p>);
}
