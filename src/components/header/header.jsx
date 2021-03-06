import {Link} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "@const";

const Header = (props) => {
  const {onHeaderLinkClick, authorizationStatus, user} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.MAIN} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">

                <a className="header__nav-link header__nav-link--profile"
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onHeaderLinkClick(authorizationStatus);
                  }}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.AUTH
                    ? <span className="header__user-name user__name">{user.email}</span>
                    : <span className="header__login">Sign in</span>
                  }
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onHeaderLinkClick: PropTypes.func.isRequired,
};

export default Header;
