import All from "./All";
import FullStack from "./FullStack";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import Career from "./Career";

// Css
import './../CustomNavbar.css';

import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Router>
        <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-slide">
          <ul className="elementor-nav-menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-9511">
              <NavLink to="/" className="elementor-item menu-link">All</NavLink>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-9511">
              <NavLink activeClassName="active" className="elementor-item menu-link" to="/fullstack">
                Full Stack
              </NavLink>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-9511">
              <NavLink activeClassName="active" className="elementor-item menu-link" to="/datascienece">
                Data Scienece
              </NavLink>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-9511">
              <NavLink activeClassName="active" className="elementor-item menu-link" to="/cyber">
                Cyber Security
              </NavLink>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-9511">
              <NavLink activeClassName="active" className="elementor-item menu-link" to="/career">
                Career
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<All />}></Route>
          <Route exact path="/fullstack" element={<FullStack />}></Route>
          <Route exact path="/datascienece" element={<DataScience />}></Route>
          <Route exact path="/cyber" element={<CyberSecurity />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default Menu;
