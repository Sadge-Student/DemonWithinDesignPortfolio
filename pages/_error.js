import Estyle from "../css/error.module.css";

function Error({ statusCode }) {
  return (
    <section className={Estyle.error}>
      <video
        preload="auto"
        className={Estyle.background}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/err.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className={Estyle.message}>
        <h1 t="404">404</h1>

        <div className={Estyle.bottom}>
          <p>You seem to have lost your way</p>
          <a href="/index">return home</a>
        </div>

        <style global jsx>{`
          html,
          body {
            width: 100%;
            height: 100%;
            background-color: #11111b;
            color: green;
            margin: 0;
            overflow-x: hidden;
            font-family: BlenderProHeavy, Helvetica, sans-serif;
          }

          #__next {
            display: contents;
          }
        `}</style>
      </div>
    </section>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
