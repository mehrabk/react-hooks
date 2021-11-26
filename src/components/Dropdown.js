import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  console.log("I Run With Every Render");
  // when Dropdown component initial the eventListener run and listening, if the Dropdown Component remove from DOM
  // this eventListener remain and listening to click on body, but now we doest have ref to Dropdown and is null
  // so null not have contains methods...
  // for solve that we define cleanup function(return function) for when destroy or remove component will run and remove eventListener
  useEffect(() => {
    console.log("Dependency = [] => I Run At Initial Render");
    const onBodyClick = (event) => {
      if (dropdownRef.current.contains(event.target)) {
        console.log("contained");
        return;
      }
      setOpen(false);
    };
    // To catch an event on the capturing phase, we need to set the handler capture option to true
    // If it’s false (default), then the handler is set on the bubbling phase.
    // If it’s true, then the handler is set on the capturing phase.
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={dropdownRef} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        {/* when we click on item event bubbling occured and rise up blubb event and
        triggered click event listeners (close dropdown) */}
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
