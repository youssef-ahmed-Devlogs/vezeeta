import "./header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-layout">
          <div className="start">Message</div>
          <div className="center">
            <a href="header-brand">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="end">Notifications</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
