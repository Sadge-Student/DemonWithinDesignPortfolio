// [slug].js
import React from "react";
import Head from "next/head";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import client from "../../client";
import SlugLayout from "../../components/SlugLayout";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import style from "../../css/slug.module.css";

// import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
import CodeTheme from "../../lib/NightowlTheme";
import CodeTheme1 from "../../lib/DraculaTheme";
import { includes as lodashIncludes } from "lodash";

const defaultBlockSerializer = BlockContent.defaultSerializers.types.block;

const serializers = {
  types: {
    code: (props) => (
      <SyntaxHighlighter
        className="styledcode"
        language={props.node.language}
        style={CodeTheme1}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
    youtube: (props) => (
      <div className="youtubebg">
        <iframe
          frameBorder="0"
          vspace="0"
          hspace="0"
          marginWidth="0"
          marginHeight="0"
          align="middle"
          samesite="None"
          className="youtube-embed"
          src={props.node.url}
        >
          {/* {JSON.stringify(props, null)}  this shows all the info */}
        </iframe>
      </div>
    ),

    codepen: (props) => (
      <iframe
        frameBorder="0"
        vspace="0"
        hspace="0"
        marginWidth="0"
        marginHeight="0"
        align="middle"
        samesite="None"
        className="codepen-embed"
        src={props.node.url}
      ></iframe>
    ),

    twitterTweetEmbed: (props) => (
      <div className="twitter-embed">
        <TwitterTweetEmbed tweetId={props.node.tweetId} />
      </div>
    ),

    imageStyle: (props) => (
      <div className="imageStyleDiv">
        <h3 className="imageStyleHeader">{props.node.caption}</h3>
      <figure className="imageStyle">
        <a className="imageStyleA" href={props.node.url}>
          <div className="imageStyleOverlay"></div>
          <img src={urlFor(props.node)}></img>
          <figcaption className="imageStyleFigCaption">{props.node.caption}</figcaption>
        </a>
      </figure>
      </div>
    ),

    block: (props) => {
      // Add anchors for H2's
      if (lodashIncludes(["h2"], props.node.style)) {
        return (
          <props.node.style>
            <a id={props.children} href={`#` + props.children}>
              {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
              <div className="subheading">
                <span className="underline">
                  <span>{props.children}</span>
                </span>
              </div>
              <svg className="linkicon" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"
                ></path>
              </svg>
            </a>
            <style jsx>{`
              .linkicon {
                width: 26px;
                height: 100%;
                margin-left: 0px;
                top: 3px;
                position: relative;
              }

              .linkicon path {
                opacity: 0.6;
              }
            `}</style>
          </props.node.style>
        );
      }
      return defaultBlockSerializer(props);
    },
  },
};

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
  const {
    title = "Missing title",
    name = "Missing name",
    subtitle = "Missing Subtitle",
    categories,
    authorImage,
    mainImage,
    body = [],
  } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SlugLayout>
        <article className="article">
          <div className="Lsection"></div>
          <div className="main-content">
            <div className="post">
              <img className="postimage" src={`${mainImage.url}`} />
              <div className="header-content">
                <div className="title-content">
                  <h1 className="title">{title}</h1>
                  <span className="published">Published by {name}</span>
                </div>
              </div>
              {/* {categories && (
            <ul>
              Posted in
              {categories.map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}

          {authorImage && (
            <div>
              <img
                src={urlFor(authorImage)
                  .width(50)
                  .url()}
              />
            </div>
          )} */}

              <div className="block-content">
                <BlockContent
                  className="postbody"
                  blocks={body}
                  // imageOptions={{ w: 500, h: 300, fit: "max" }}
                  imageOptions={{ w: 700, h: 800, fit: "max" }}
                  serializers={serializers}
                  {...client.config()}
                />
              </div>
              {/* </Layout> */}
            </div>
          </div>
          <div className="Rsection">
            {/* <img src="https://i.imgur.com/4ZjxUUh.jpg" /> */}
            <div className="menu">
              {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}

              {/* {console.log(props.children)} */}
            </div>
          </div>
        </article>
      </SlugLayout>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        .article {
          display: flex;
        }

        .main-content {
          max-width: 50%;
          background-color: #0e0f13;
          flex-grow: 1;
        }

        .Lsection {
          height: 100%;
          width: 10%;
        }

        .Rsection {
          height: 100%;
          width: 10%;
        }

        .menu {
          color: white;
          position: fixed;
        }

        .Rsection img {
          width: 300px;
          height: auto;
          position: fixed;
          top: 10%;
        }

        .Lsection + .Lsection {
          margin-left: 2%;
        }

        .post {
          margin: 1rem;
        }

        .postimage {
          width: 100%;
          height: 25em;
          margin-bottom: 1rem;
        }

        .header-content {
          -webkit-box-pack: center;
          justify-content: center;
          position: relative;
          background-image: linear-gradient(
            to right,
            rgb(255, 100, 205) 0%,
            rgb(128, 128, 255) 50%,
            rgb(0, 255, 225) 100%
          );
          /* box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 0px 0px; */
          padding: 2em;
          /* padding-top: 1em;
          padding-right: 1em;
          padding-bottom: 1em;
          padding-left: 1em; */
          /* border-top: 8px solid black; */
          color: white;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .header-content:before {
          content: "";
          position: absolute;
          top: 7px;
          right: 7px;
          bottom: 7px;
          left: 7px;
          /* box-shadow: rgba(0,0,0,0.61) 0px 0px 0px 2px; */
          background: rgb(23, 24, 32);
        }

        .published {
          margin: 1rem;
          font-size: 16px;
        }

        .title-content {
          position: relative;
        }

        .title {
          font-size: 96px;
          font-weight: normal;
          margin-bottom: 1rem;
        }

        .block-content {
          height: auto;
          width: auto;
        }

        .block-content :global(img) {
        }
         {
          /* Adding :global can target that element inside the blockcontent div  */
        }

        /* widescreen query */
        @media only screen and (max-width: 1024px) {
          .title {
            font-size: 32px;
          }

          .main-content {
            width: 100%;
            max-width: 100%;
            margin-left: 10%;
            margin-right: 0%;
          }

          .Rsection {
            display: none;
          }

          .header-content {
            width: 92%;
          }

          .post-image {
            width: 100%;
          }
        }

        @media only screen and (max-width: 768px) {
          .title {
            font-size: 32px;
          }

          .main-content {
            width: 100%;
            max-width: 100%;
            margin-left: 0%;
            margin-right: 10%;
          }

          .Lsection {
            display: none;
          }

          .postimage {
            height: 15em;
            width: 100%;
          }

          .header-content {
            width: 90%;
          }
        }

        @media only screen and (max-width: 425px) {
          * {
            margin: 0;
            padding: 0;
          }

          .header-content {
            width: 84%;
          }

          .post {
            margin: 0.5rem;
            margin-right: 3.5rem;
          }

          .main-content {
            width: 100%;
            max-width: 100%;
            margin-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          background-color: #000001;
          font-family: "BlenderProMedium", sans-serif;
        }

        img {
          /* width: 100%; */
          height: 100%;
          position: relative;
        }

        h4 {
          font-size: 22px;
        }

        .subheading {
          display: inline;
        }

        .block-content {
          color: white;
          margin: 1rem;
        }

        .block-content h2 {
          font-size: 32px;
          margin: 3% 0;
          display: inline;
        }

        .block-content h2 a {
          color: rgba(255, 255, 255, 1);
          text-decoration: none;
        }

        .block-content h2 a:not(:hover).underline {
          background: none;
        }

        .block-content h2 a .underline {
          text-shadow: rgb(0, 0, 0) -4px 0px, rgb(0, 0, 0) 4px 0px,
            rgb(0, 0, 0) -4px 1px, rgb(0, 0, 0) 4px 1px, rgb(0, 0, 0) -4px 2px,
            rgb(0, 0, 0) 4px 2px, rgb(0, 0, 0) -4px 3px, rgb(0, 0, 0) 4px 3px,
            rgb(0, 0, 0) -3px 3px, rgb(0, 0, 0) 3px 3px, rgb(0, 0, 0) -2px 3px,
            rgb(0, 0, 0) 2px 3px, rgb(0, 0, 0) -1px 3px, rgb(0, 0, 0) 1px 3px,
            rgb(0, 0, 0) 0px 3px;
          background-position: 0% 32px;
        }

        .block-content a .underline {
          position: relative;
          text-shadow: rgb(0, 0, 0) -4px 0px, rgb(0, 0, 0) 4px 0px,
            rgb(0, 0, 0) -4px 1px, rgb(0, 0, 0) 4px 1px, rgb(0, 0, 0) -3px 1px,
            rgb(0, 0, 0) 3px 1px, rgb(0, 0, 0) -2px 1px, rgb(0, 0, 0) 2px 1px,
            rgb(0, 0, 0) -1px 1px, rgb(0, 0, 0) 1px 1px, rgb(0, 0, 0) 0px 1px;
          background-image: linear-gradient(
            rgba(255, 255, 255, 0.25),
            rgba(255, 255, 255, 0.25)
          );
          background-size: 100% 2px;
          background-position: 0% 21px;
          background-repeat: no-repeat;
        }

        .block-content a:hover .underline {
          background-image: linear-gradient(
            to left,
            rgb(0, 255, 225) 0%,
            rgb(0, 255, 255) 50%,
            rgb(0, 225, 255) 100%
          );
        }
        .block-content a {
          position: relative;
          color: rgb(139, 233, 253);
          text-decoration: none;
          transition: color 250ms ease 0s;
        }

        .block-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 20px;
        }

        .block-content ul,
        .block-content li {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
        }

        .styledcode {
          margin: 1em;
        }

        .youtubebg {
          padding: 2rem;
          background: #171820;
        }

        .youtube-embed {
          width: 100%;
          height: 650px;
        }

        .codepen-embed {
          width: 100%;
          height: 650px;
          padding-bottom: 1%;
        }

        .twitter-embed {
          margin-left: 17%;
        }

        .imageStyleDiv {
          position: relative;
          display: inline-block;
        }

        .imageStyle {

        }

        .imageStyle img {
          object-fit: cover;
          width: 200px;
          height: 200px;
          border: solid black 10px;
          border-radius: 25px;
        }

        .imageStyleA {
          position: relative;
          display: inline-block;
        }

        .imageStyleFigCaption {
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          line-height: 100%;
          z-index: 77;
          color: #FFFFFF;
          transition: opacity 1s;
        }

        .imageStyleOverlay {
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: rgba(0,0,0,0.4);
          z-index: 78;
          border-radius: 25px;
          transform: translate(0%, -1%);
          scale: 1;
          opacity: 0;
          transition: opacity 2s;
        }

        .imageStyle .imageStyleOverlay:hover {
          opacity: 1;
        }

        .imageStyleHeader {
          position: absolute;
          top: -13%;
          left: 19%;
          z-index: 77;
        }

        .imageStyle .imageStyleOverlay:hover ~ .imageStyleFigCaption {
          opacity: 1;
        }

        .block-content h2:hover .linkicon path {
          opacity: 1;
        }

        @media only screen and (max-width: 768px) {
          img {
            width: 100%;
          }
        }

        @media only screen and (max-width: 1024px) {
          img {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage.asset->,
  body,
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
