import "./Hero.css";
import React from "react";
import Typed from "typed.js";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Hero() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Bienvenidos.",
        "Welcome.",
        "Benvinguts.",
        "Bem-vindo.",
        "Benvenuto.",
        "Willkommen.",
        "喜ばしい.",
      ],
      loop: true,
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="px-5 mx-4 mt-5 rounded-3 bg-hero d-flex">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">
          <span ref={el} />
        </h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
      <div className="p-1" >
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_GbabwrUY2k.json"
          style={{ width: "400px", height: "400px", background: "transparent" }}
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
