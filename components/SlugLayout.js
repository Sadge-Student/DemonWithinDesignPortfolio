import Footer from "./Footer";

const SlugLayout = (props) => (
  <div className="Layout">
    <div className="Content">{props.children}</div>
    <Footer />
    <style global jsx>{`
      body {
        margin: 0;
        background-color: #000001;
      }
    `}</style>
  </div>
);

export default SlugLayout;
