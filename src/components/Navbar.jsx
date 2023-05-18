import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid bg-black p-3">
        <a className="navbar-brand text-light logo" href="#">
          <button class="btnHover">HOVER ME</button>
        </a>
        <div
          className="navbar1 collapse navbar-collapse "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
          <button class="btnMenu">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Home
            </button>
            <button class="btnMenu">
              <span></span>
              <span></span>
              <span></span>
              <span></span> About
            </button>
            <button class="btnMenu">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Services
            </button>
            <button class="btnMenu">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
