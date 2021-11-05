import { useDencrypt } from "use-dencrypt-effect";

// const values = ["useDencrypt", "Customizable", "React Hook", "Text Effect"];
const values = ["Latest Project"];

const TextEffect = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 1000);

    return () => clearInterval(action);
  }, []);

  return (
    <div>
      {result}
      <style jsx>{`
        @font-face {
          font-family: "Ponde";
          src: url("https://cdn.glitch.me/e0644440-9dc1-433d-a852-23d7d5f44df7%2Fponde___.ttf?v=1636136028723"),
            url("https://cdn.glitch.me/e0644440-9dc1-433d-a852-23d7d5f44df7%2Fponde___.ttf?v=1636136028723")
              format("ttf");
        }

        @font-face {
          font-family: "PixelFont";
          src: url("https://cdn.glitch.me/e0644440-9dc1-433d-a852-23d7d5f44df7%2FSpookyPixelFont-Regular.ttf?v=1636136053962"),
            url("https://cdn.glitch.me/e0644440-9dc1-433d-a852-23d7d5f44df7%2FSpookyPixelFont-Regular.ttf?v=1636136053962")
              format("ttf");
        }

        .ponde {
          font-family: "Ponde", sans-serif;
        }

        .pixelfont {
          font-family: "PixelFont", sans-serif;
        }

        div {
          color: white;
          font-size: 48px;
          color: white;
          font-family: "Ponde", sans-serif;
          display: inline-flex;
          margin-left: 14%;
          margin-top: 10%;
          margin-bottom: 0%;
        }
      `}</style>
    </div>
  );
};

export default TextEffect;
