import Footer from "./Footer";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
};

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <Footer />
    <style global jsx>{`
      body {
        margin: 0;
        background-color: #000001;
      }
    `}</style>
  </div>
);

export default Layout;
