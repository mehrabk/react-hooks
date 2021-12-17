import React from "react";
import LanguageContext from "../../contexts/LanguageContext";

// practice React create context in class component
class Field extends React.Component {
  // static contextType = LanguageContext;
  render() {
    return (
      <div>
        (2)- old way = Provider & static contextType = ...
        <br />
        language: {this.context.lang}
      </div>
    );
  }
}

// contextType create a refrence of context object to context property within component
Field.contextType = LanguageContext;

export default Field;
