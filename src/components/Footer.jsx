import "./Footer.css";

export default function () {
  return (
    <div className="container-fluid bg-black pb-2 mt-5">
      <div
        className="collapse navbar-collapse d-flex justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav d-flex text-warning ">
          <ul className="wrapper">
            <li className="icon facebook">
              <span className="tooltip">LinkedIn</span>
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Github</span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </li>
          </ul>
          <span className="footerClass">Copyright 2023@ Aleix Aguilar with ❤️</span>
        </div>
      </div>
    </div>
  );
}
