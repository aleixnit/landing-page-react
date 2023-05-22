import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-black p-3">
      <div class="container-fluid menuResponsive">
        <a className="navbar-brand text-light logo" href="#">
          <button className="btnHover">HOVER ME</button>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" navbar-collapse navbar1 menuResponsive " id="navbarNavDropdown">
          <ul id="flex" class="navbar-nav menuResponsive  ">
            <li class="nav-item">
              <button className="btnMenu menuResponsive ">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Home
              </button>
            </li>
            <li class="nav-item menuResponsive ">
            <button className="btnMenu  ">
               <span></span>
               <span></span>
               <span></span>
               <span></span> About
            </button>
            </li>
            <li class="nav-item menuResponsive ">
            <button className="btnMenu ">
               <span></span>
               <span></span>
               <span></span>
               <span></span> Services
             </button>
            </li>
            <li class="nav-item menuResponsive ">
            <button className="btnMenu  ">
               <span></span>
               <span></span>
               <span></span>
               <span></span> Contact
             </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg">
    //   <div className="container-fluid bg-black p-3">
    //     <a className="navbar-brand text-light logo" href="#">
    //       <button className="btnHover">HOVER ME</button>
    //     </a>
    //     <div
    //       className="navbar1 collapse navbar-collapse "
    //       id="navbarNavAltMarkup"
    //     >
    //       <div className="navbar-nav ">
    //         <button className="btnMenu">
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //           <span></span> Home
    //         </button>
    //         <button className="btnMenu">
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //           <span></span> About
    //         </button>
    //         <button className="btnMenu">
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //           <span></span> Services
    //         </button>
    //         <button className="btnMenu">
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //           <span></span> Contact
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
