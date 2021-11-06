import TwitterLogo from "../public/static/twittericon.png";
import GithubLogo from "../public/static/githubicon.png";
import SanityLogo from "../public/static/sanityicon.png";
import ReactLogo from "../public/static/reacticon.png";
import NextjsLogo from "../public/static/nextjsicon.png";
import ZeitLogo from "../public/static/zeiticon.png";
import Fstyle from "../css/footer.module.css";

const Footer = () => (
  <div className={Fstyle.BlenderProM}>
    <div className={Fstyle.footer}>
      <div className={Fstyle.mylinks}>
        <span className={Fstyle.follow}>Follow us on:</span>
        <div className={Fstyle.link}>
          <span className={Fstyle.favicon}>
            <img
              alt="Twitter Icon"
              className={Fstyle.twittericon}
              src={TwitterLogo}
            ></img>
          </span>
          <a href="https://twitter.com/" target="_blank">
            <span>Twitter</span>
          </a>
        </div>
        <div className={Fstyle.link}>
          <span className={Fstyle.favicon}>
            <img
              alt="Twitter Icon"
              className={Fstyle.twittericon}
              src={GithubLogo}
            ></img>
          </span>
          <a href="https://github.com/" target="_blank">
            <span>Github</span>
          </a>
        </div>
        <br />
      </div>

      <div className={Fstyle.rlinks}>
        <a href="/about">ABOUT</a>
        <a href="/posts">BLOG</a>
        <a href="mailto:123@mail.com" target="_top">
          CONTACT
        </a>
      </div>

      <div className={Fstyle.builtwith}>
        <span className={Fstyle.bwith}>Built with:</span>

        <div className={Fstyle.link}>
          <span className={Fstyle.favicon}>
            <img alt="Sanity Icon" src={SanityLogo}></img>
          </span>
          <a href="https://www.sanity.io/" target="_blank">
            <span>Sanity</span>
          </a>
        </div>
        <div className={Fstyle.link}>
          <span className={Fstyle.favicon}>
            <img alt="Twitter Icon" src={ReactLogo}></img>
          </span>
          <a href="https://reactjs.org/" target="_blank">
            <span>React</span>
          </a>
        </div>
        <div className={Fstyle.link}>
          <span className={Fstyle.favicon}>
            <img alt="Twitter Icon" src={NextjsLogo}></img>
          </span>
          <a href="https://nextjs.org/" target="_blank">
            <span>Next.js</span>
          </a>
        </div>
        <div className={Fstyle.link}>
          <span className={Fstyle.favicon}>
            <img alt="Twitter Icon" src={ZeitLogo}></img>
          </span>
          <a href="https://vercel.com/" target="_blank">
            <span>Vercel</span>
          </a>
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  </div>
);

export default Footer;
