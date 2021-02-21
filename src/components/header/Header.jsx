import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = ({ onServiceChange }) => {
  // const history = useHistory();
  // const location = useLocation();
  // const params = useParams("555");
  // const math = useRouteMatch("/starships");


  return (
    <div className="header d-flex">
      <h3>
        <NavLink exact to="/">
          Star DB
        </NavLink>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="./starships">Starships</NavLink>
        </li>
        <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
        Change Service
      </button>
      </ul>
    </div>
  );
};

export default Header;