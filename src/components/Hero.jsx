import "./Hero.css";
import React from "react";
import Typed from "typed.js";

export default function Hero() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Bienvenidos.", "Welcome.", "Benvinguts.", "Bem-vindo.", "Benvenuto.", "Willkommen."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="px-5 mx-4 mt-5 rounded-3 bg-hero">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold"><span ref={el} /></h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
    </div>

    // <div className="App">
    //   <span ref={el} />
    // </div>
  );
}

// export default function Hero() {
//   return (
//     <div className="px-5 mx-4 mt-5 rounded-3 bg-hero">
//       <div className="container-fluid py-5">
//         <h1 className="display-5 fw-bold">A warm welcome!👌</h1>
//         <p className="col-md-8 fs-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//         <button class="learn-more">
//           <span class="circle" aria-hidden="true">
//             <span class="icon arrow"></span>
//           </span>
//           <span class="button-text">Learn More</span>
//         </button>
//       </div>
//     </div>
//   );
// }
