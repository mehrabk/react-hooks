import { useEffect, useState } from "react";
export default (props) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      // updateing the url
      setCurrentPath(window.location.pathname);
    };
    // detecting navigation with nav event(popstate)
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  const { path, children } = props;
  return currentPath === path ? children : null;
};
