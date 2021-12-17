import React from "react";

import ColorContext from "../../contexts/ColorContext";
import LanguageContext from "../../contexts/LanguageContext";

// practice React create context in functional component
const Button = () => {
  return (
    <div>
      <ColorContext.Consumer>
        {(value) => (
          <>
            (1)- old way = Provider & Consumer <br />
            <button className={`ui button ${value}`}>Button</button>
            <LanguageContext.Consumer>
              {(props) => <>language: {props.lang}</>}
            </LanguageContext.Consumer>
          </>
        )}
      </ColorContext.Consumer>
      <hr />
    </div>
  );
};

export default Button;
