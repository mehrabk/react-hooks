import React, { useContext } from "react";

import ThemeContext from "../../contexts/ThemeContext";

const HookContext = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <hr />
      <div>Hook Context Example(useContext)</div>
      <br />
      <h1 style={{ ...theme }}>React Context Hook Example</h1>
    </>
  );
};

export default HookContext;
