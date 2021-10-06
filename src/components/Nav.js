import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-items-wrapper">
      <NavLink exact to="/" activeClassName="page-indicator">
        Home
      </NavLink>
      <NavLink to="/counter" activeClassName="page-indicator">
        Counter
      </NavLink>
      <NavLink to="/toggle" activeClassName="page-indicator">
        Toggle
      </NavLink>
      <NavLink to="/font-sizer" activeClassName="page-indicator">
        Font Sizer
      </NavLink>
      <NavLink to="/align" activeClassName="page-indicator">
        Align
      </NavLink>
      <NavLink to="/show-hide" activeClassName="page-indicator">
        Show/Hide
      </NavLink>
      <NavLink to="/clock" activeClassName="page-indicator">
        Clock
      </NavLink>
      <NavLink to="/color-change" activeClassName="page-indicator">
        Color Change
      </NavLink>
    </div>
  );
};

export default Nav;
