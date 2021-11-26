export default (props) => {
  console.log(props);
  const { path, children } = props;
  return window.location.pathname === path ? children : null;
};
