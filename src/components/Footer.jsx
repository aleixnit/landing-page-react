import "./Footer.css";

export default function () {
  return (
    <div className="container-fluid bg-black pb-2 mt-5">
      <div
        className="collapse navbar-collapse d-flex justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav d-flex text-warning ">
          <ul class="wrapper">
            <li class="icon facebook">
              <span class="tooltip">LinkedIn</span>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
            </li>
            <li class="icon twitter">
              <span class="tooltip">Github</span>
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </li>
            <li class="icon instagram">
              <span class="tooltip">Instagram</span>
              <span>
                <i class="fab fa-instagram"></i>
              </span>
            </li>
          </ul>
          <span class="footerClass">Copyright 2023@ Aleix Aguilar with ❤️</span>
        </div>
      </div>
    </div>
  );
}
