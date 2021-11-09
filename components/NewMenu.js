import Link from 'next/link'

function NewMenu() {

  function click() {
    const body = document.body;
    const burgerContain = document.getElementsByClassName("b-container")[0];
    const burgerNav = document.getElementsByClassName("b-nav")[0];

    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle("open");
    });
    false;
  }

  function mclick() {
    const body = document.body;
    const mburger = document.getElementById("toggle");
    const moverlay = document.getElementById("overlay");
    [mburger].forEach(function (el) {
      el.classList.toggle("active");
      console.log("click");
    });
    [moverlay].forEach(function (el) {
      el.classList.toggle("open");
      console.log("Overlay!");
    });
  }

  return (
    <>
      <div className="button_container" id="toggle" onClick={mclick}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className="overlay" id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <a href="mailto:123@abc.com" target="_top">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="nav">
        <div className="b-nav">
        <ul>
          <li>
            <a className="b-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="b-link" href="/posts">
              Posts
            </a>
          </li>
          <li>
            <a className="b-link" href="/about">
              About
            </a>
          </li>
          <li>
            <a
              className="b-link"
              href="mailto:Aaron_d_23@hotmail.co.uk"
              target="_top"
            >
              Contact
            </a>
          </li>
          </ul>
        </div>

        <div className="b-container">
          <div className="b-menu" onClick={click}>
            <div className="b-bun b-bun--top"></div>
            <div className="b-bun b-bun--mid"></div>
            <div className="b-bun b-bun--bottom"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .nav {
          position: fixed;
          z-index: 7;
        }

        @-webkit-keyframes slideInLeft {
          0% {
            -webkit-transform: translate3d(-250px, 0, 0);
            transform: translate3d(-250px, 0, 0);
            visibility: visible;
          }
          100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes slideInLeft {
          0% {
            -webkit-transform: translate3d(-250px, 0, 0);
            transform: translate3d(-250px, 0, 0);
            visibility: visible;
          }
          100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
        @-webkit-keyframes slideOutLeft {
          0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
          100% {
            -webkit-transform: translate3d(-250px, 0, 0);
            transform: translate3d(-250px, 0, 0);
            visibility: hidden;
          }
        }
        @keyframes slideOutLeft {
          0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
          100% {
            -webkit-transform: translate3d(-250px, 0, 0);
            transform: translate3d(-250px, 0, 0);
            visibility: hidden;
          }
        }
        * {
          box-sizing: border-box;
        }

        .b-nav {
          position: absolute;
          z-index: 11;
        }
        .b-nav:not(.open) {
          visibility: hidden;
        }
        .b-nav li {
          color: #444444;
          list-style-type: none;
          padding: 10px;
          text-align: left;
          -webkit-transform: translateX(-250px);
          transform: translateX(-250px);
        }
        .b-nav li:not(.open) {
          -webkit-animation-duration: 0.4s;
          animation-duration: 0.4s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-name: slideOutLeft;
          animation-name: slideOutLeft;
        }
        .b-nav li:first-child {
          padding-top: 120px;
        }
        .b-nav.open {
          visibility: visible;
        }
        .b-nav.open li {
          -webkit-animation-duration: 0.4s;
          animation-duration: 0.4s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-name: slideInLeft;
          animation-name: slideInLeft;
        }

        .b-link {
          background: transparent;
          border-left: rgba(68, 68, 68, 0) solid 2px;
          color: #444444;
          font-family: BlenderProMedium, Helvetica, Arial, sans-serif;
          font-size: 24px;
          font-weight: 300;
          margin-left: 30px;
          text-decoration: none;
          -webkit-transition: all 0.4s ease;
          transition: all 0.4s ease;
          width: auto;
        }
        .b-link:hover,
        .b-link--active {
          border-left: white solid 2px;
          padding-left: 30px;
          color: white;
        }

        .b-menu {
          /* background: white; */
          border: white solid 2px;
          border-radius: 50%;
          cursor: pointer;
          display: inline-block;
          height: 60px;
          padding-left: 15.5px;
          padding-top: 17.5px;
          position: relative;
          -webkit-transition: all 0.4s ease;
          transition: all 0.4s ease;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          width: 60px;
          z-index: 12;
          /* transition: all 1s; */
        }
        /* hover effect on button */
        .b-menu:hover {
          /* position: relative; */

          border-radius: 50%;
          border: solid 2px transparent;
          border-radius: 50%;
          background-image: linear-gradient(transparent, transparent),
            linear-gradient(to right, rgb(129, 128, 255), transparent);
          background-origin: border-box;
          background-clip: content-box, border-box;
        }
        /* .b-menu:hover:after {
        position: absolute;
        top: 0px; bottom: 0px;
        left: 0px; right: 0px;
        background: linear-gradient(to right, rgb(255, 100, 205) 0%, rgb(128, 128, 255) 50%, rgb(0, 255, 225) 100%);
        content: '';
        z-index: -1;
        border-radius: 50%;
        
    } */

        .b-menu:hover .b-bun {
          background: white;
        }

        .b-bun {
          background: #444444;
          position: relative;
          -webkit-transition: all 0.4s ease;
          transition: all 0.4s ease;
        }
        .b-bun--top {
          height: 2px;
          top: 0;
          width: 25px;
        }
        .b-bun--mid {
          height: 2px;
          top: 8px;
          width: 25px;
        }
        .b-bun--bottom {
          height: 2px;
          top: 16px;
          width: 25px;
        }

        .b-brand {
          color: white;
          font-family: "BlenderProMedium", sans-serif;
          font-size: 24px;
          font-weight: 300;
          margin-left: 30px;
          position: relative;
          text-decoration: none;
          top: -21.4285714286px;
          -webkit-transition: all 0.4s ease;
          transition: all 0.4s ease;
          z-index: 13;
        }

        .b-container {
          height: 60px;
          left: 30px;
          position: absolute;
          top: 30px;
        }
        .b-container:hover:not(.open) .bun-top,
        .b-container:hover:not(.open) .bun-mid,
        .b-container:hover:not(.open) .bun-bottom {
          background: white;
        }
        .b-container.open {
          transition: all 1s;
        }
        .b-container.open .b-menu:hover {
        }
        .b-container.open .b-main {
          border: #444444 solid 2px;
        }
        .b-container.open .b-menu {
          border: red solid 2px;
        }
        .b-container.open .b-bun--top {
          background: white;
          top: 9px;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        .b-container.open .b-bun--mid {
          opacity: 0;
        }
        .b-container.open .b-bun--bottom {
          background: white;
          top: 5px;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        .b-container.open .b-brand {
          color: #444444;
        }

        .container {
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
          top: 40%;
          left: 0;
          margin: 0 auto;
          font-family: "BlenderProMedium", sans-serif;
        }
        .container p {
          font-size: 20px;
        }
        .container a {
          display: inline-block;
          position: relative;
          text-align: center;
          color: #1abc9c;
          text-decoration: none;
          font-size: 20px;
          overflow: hidden;
          top: 5px;
        }
        .container a:after {
          content: "";
          position: absolute;
          background: #1abc9c;
          height: 2px;
          width: 0%;
          transform: translateX(-50%);
          left: 50%;
          bottom: 0;
          transition: 0.35s ease;
        }
        .container a:hover:after,
        .container a:focus:after,
        .container a:active:after {
          width: 100%;
        }

        h1 {
          position: relative;
          text-align: center;
          font-family: "BlenderProMedium", sans-serif;
        }

        .button_container {
          position: fixed;
          top: 5%;
          right: 2%;
          height: 27px;
          width: 35px;
          cursor: pointer;
          z-index: 100;
          transition: opacity 0.25s ease;
        }
        .button_container:hover {
          opacity: 0.7;
        }
        .button_container.active .top {
          transform: translateY(11px) translateX(0) rotate(45deg);
          background: #fff;
        }
        .button_container.active .middle {
          opacity: 0;
          background: #fff;
        }
        .button_container.active .bottom {
          transform: translateY(-11px) translateX(0) rotate(-45deg);
          background: #fff;
        }
        .button_container span {
          background: #8180ff;
          border: none;
          height: 5px;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.35s ease;
          cursor: pointer;
        }
        .button_container span:nth-of-type(2) {
          top: 11px;
        }
        .button_container span:nth-of-type(3) {
          top: 22px;
        }

        .overlay {
          position: fixed;
          background: #8180ff;
          top: 0;
          left: 0;
          width: 100%;
          height: 0%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.35s, visibility 0.35s, height 0.35s;
          overflow: hidden;
          z-index: 77;
        }
        .overlay.open {
          opacity: 0.9;
          visibility: visible;
          height: 100%;
        }
        .overlay.open li {
          animation: fadeInRight 0.5s ease forwards;
          animation-delay: 0.35s;
        }
        .overlay.open li:nth-of-type(2) {
          animation-delay: 0.4s;
        }
        .overlay.open li:nth-of-type(3) {
          animation-delay: 0.45s;
        }
        .overlay.open li:nth-of-type(4) {
          animation-delay: 0.5s;
        }
        .overlay nav {
          position: relative;
          height: 70%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 50px;
          font-family: "BlenderProMedium", sans-serif;
          font-weight: 400;
          text-align: center;
        }
        .overlay ul {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          display: inline-block;
          position: relative;
          height: 100%;
        }
        .overlay ul li {
          display: block;
          height: 25%;
          height: calc(100% / 4);
          min-height: 50px;
          position: relative;
          opacity: 0;
        }
        .overlay ul li a {
          display: block;
          position: relative;
          color: #fff;
          text-decoration: none;
          overflow: hidden;
        }
        .overlay ul li a:hover:after,
        .overlay ul li a:focus:after,
        .overlay ul li a:active:after {
          width: 100%;
        }
        .overlay ul li a:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          transform: translateX(-50%);
          height: 3px;
          background: #fff;
          transition: 0.35s;
        }

        @keyframes fadeInRight {
          0% {
            opacity: 0;
            left: 20%;
          }
          100% {
            opacity: 1;
            left: 0;
          }
        }

        @media only screen and (min-width: 769px) {
          .button_container {
            display: none;
          }
        }

        @media only screen and (max-width: 768px) {
          .nav {
            display: none;
          }
        }
        @media only screen and (max-width: 425px) {
          .button_container {
            right: 3.5%;
          }
        }
      `}</style>
    </>
  );
}

export default NewMenu;
