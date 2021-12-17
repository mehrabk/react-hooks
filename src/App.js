import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import Create from "./components/context/Create";
import ColorContext from "./contexts/ColorContext";
import LanguageContext from "./contexts/LanguageContext";
import HookContext from "./components/context/HookContext";
import Callback from "./components/callback";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/create">
        <ColorContext.Provider value="green">
          <LanguageContext.Provider value={{ lang: "persian" }}>
            <Create />
          </LanguageContext.Provider>
        </ColorContext.Provider>
        <HookContext />
      </Route>
      <Route path="/callback">
        <Callback />
      </Route>
    </>
  );
};

export default App;
