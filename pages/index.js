import BlogPost from "../components/BlogPost";
import Layout from "../components/Layout";
import groq from "groq";
import Head from "next/head";
import client from "../client";
import TextEffect from "../components/TextEffect";
import Konami from "react-konami-code";

function easteregg() {
  var iframe = document.createElement('iframe');
  iframe.src = "https://www.youtube.com/embed/wERoLoUkZFQ?autoplay=1&showinfo=0&controls=0";
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.position = "absolute";
  iframe.frameBorder = "0";
  iframe.style = "pointer-events: none;"
  var videoDiv = document.getElementById('videoFrame');
  videoDiv.appendChild(iframe);
}

export default function Index({ posts, author }) {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <div id="videoFrame"></div>
      <Layout>
        <TextEffect />
        <BlogPost posts={posts} />
        <a className="viewall" href="/posts">
          <div className="block">
            <p>View all games</p>
          </div>
        </a>
      </Layout>
      <style jsx>{`

        .viewall {
          text-decoration: none;
          display: contents;
          text-align: center;
        }

        .viewall .block:after {
          transition: 1s filter;
        }

        .block p {
          display: grid;
          font-family: BlenderProMedium, Helvetica, Arial, sans-serif;
          font-size: 24px;
          color: white;
          position: absolute;
          top: -25px;
          bottom: -25px;
          left: 0;
          right: 0;
          line-height: 100px;
        }

        .block {
          position: relative;
          margin-left: 18%;
          margin-bottom: 2%;
          width: 300px;
          height: 100px;
          background: linear-gradient(0deg, #000, #272727);
          border-radius: 20px;
          display: inline-flex;
        }

        .block:before,
        .block:after {
          content: "";
          position: absolute;
          left: -2px;
          top: -2px;
          background: linear-gradient(
            45deg,
            #fb0094,
            #0000ff,
            #00ff00,
            #ffff00,
            #ff0000,
            #fb0094,
            #0000ff,
            #00ff00,
            #ffff00,
            #ff0000
          );
          background-size: 400%;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: -1;
          animation: steam 20s linear infinite;
          border-radius: 20px;
        }

        @keyframes steam {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 400% 0;
          }
          100% {
            background-position: 0 0;
          }
        }

        .block:after {
          filter: blur(5px);
        }

        .viewall:hover .block:after {
          filter: blur(50px);
        }

        #videoFrame {
          height: 100vh;
          width: 99vw;
          position: absolute;
          z-index: 77;
        }
        #videoFrame:empty {
          display: none;
        }
      `}</style>
      <Konami action={easteregg}>
      </Konami>
    </div>
  );
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_id == "2c8accdd-3bb2-445e-8463-7d54ba2d44ef"] {
        ...,
      "mainImage": mainImage.asset->
      }
    `),
});
