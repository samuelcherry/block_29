import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/">All Players </Link>
      <Link to="/newPlayerForm">New Player Form</Link>
    </div>
  );
};

export default NavBar;
