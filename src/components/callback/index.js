import React, { useState, useCallback } from "react";
import API from "./api";

// when dark get change -> Callback component will render
// and when Callback component render -> getItems function get new value (changed function refrence)
// and when getItems changed -> api function render(is useEffect`s Dependency)
// we dont need render api function => for that we use useCallback hook and dont changed the refrence
export default function Callback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark ? "gray" : "white",
    color: dark ? "orange" : "black",
  };
  // change getItems when change number so when we change the dark state (render Callback component) getItems refrence  will be same before.
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <>
      <div style={theme}>
        <p>useCallback</p>
        <input onChange={(e) => setNumber(Number(e.target.value))} />
        <p>{number}</p>
        <API getItems={getItems} />
      </div>
      <br />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
    </>
  );
}
