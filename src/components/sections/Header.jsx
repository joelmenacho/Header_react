import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsList, BsMoon, BsSun, BsXCircle } from "react-icons/bs";

const Header = () => {
  const header = useRef();
  const modal = useRef();
  const navTheme = useRef();

  const openMenu = () => {
    header.current.classList.add('header--open');
    modal.current.classList.add('modal--open');
  };

  const closeMenu = () => {
    header.current.classList.remove('header--open');
    modal.current.classList.remove('modal--open');
  };

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--light');
    navTheme.current.classList.toggle('nav__theme--active');

    if (body.classList.contains('body--light')) {
      localStorage.setItem('darkMode', false);
    } else {
      localStorage.setItem('darkMode', true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      navTheme.current.classList.add('nav__theme--active');
    }
  }, []);

  return (
    <header
      className="header"
      ref={header}
    >
      <nav className="nav">
        <div className="container elements elements--header-nav">
          <Link to="/">
            <img src="/favicon.svg" alt="Logo Happy Little Shop" className="nav__logo" width="32" height="32" />
          </Link>
          <div
            className="modal modal--menu"
            ref={modal}
            onClick={closeMenu}
          >
            <ul
              className="menu menu--header"
              onClick={e => e.stopPropagation()}
            >
              <li>
                <NavLink
                  to="/productos"
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                  onClick={closeMenu}
                >
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                  onClick={closeMenu}
                >
                  Nosotros
                </NavLink>
              </li>
              <li
                className="nav__icon nav__icon--close"
                onClick={closeMenu}
              >
                <BsXCircle />
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button
              className="nav__theme"
              ref={navTheme}
              onClick={toggleTheme}
            >
              <BsMoon />
              <BsSun />
            </button>
            <button
              className="nav__icon nav__icon--menu"
              onClick={openMenu}
            >
              <BsList />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;