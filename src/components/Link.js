import React from "react";
const Link = ({ href, className, children }) => {
  // everytime i click on link i get 4 separate console.log because we have four copies
  // of the route component and each of them is listening for that nav event
  const onClick = (event) => {
    // for new tab if ctr+click
    if (event.metaKey || event.ctrlKey) return;
    // prevent reload and direct to other page
    event.preventDefault();
    // The history.pushState() method allows you to add an entry to the web browser’s session history stack.
    // history.pushState(state, title, [,url])
    // https://www.javascripttutorial.net/web-apis/javascript-history-pushstate/
    window.history.pushState({}, "", href);
    // emit navigation event
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
