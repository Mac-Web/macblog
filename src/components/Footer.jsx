import { Link } from "react-router";
import { logo, email, youtube, github, discord } from "../assets/assets";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <Link to="/" className="footer-logo">
          <img src={logo} /> MacBlog
        </Link>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://mac-web.github.io" target="_blank">
            MacWeb
          </a>
        </div>
        <div className="footer-copy">All rights reserved</div>
        <div className="footer-copy">
          Made with ❤️ by{" "}
          <a href="https://github.com/tonymac129/" target="_blank">
            Tony Macaroni
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h2 className="footer-title">Browse Tabs</h2>
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/apps" className="footer-link">
          Apps
        </Link>
        <Link to="/updates" className="footer-link">
          Updates
        </Link>
        <Link to="/posts" className="footer-link">
          Posts
        </Link>
        <Link to="/roadmap" className="footer-link">
          Roadmap
        </Link>
      </div>
      <div className="footer-column">
        <h2 className="footer-title">MacBlog Information</h2>
        <Link to="/apps/macblog" className="footer-link" target="_blank">
          About
        </Link>
        <Link to="/apps/macblog/updates" className="footer-link" target="_blank">
          Updates
        </Link>
        <a href="https://forms.gle/8ATGPGkr7mqKrJ1e9" className="footer-link" target="_blank">
          Feedback
        </a>
      </div>
      <div className="footer-column">
        <h2 className="footer-title">MacWeb Apps</h2>
        <a href="https://mac-web.github.io/" className="footer-link" target="_blank">
          MacWeb
        </a>
        <a href="https://mac-web.github.io/macvg/" className="footer-link" target="_blank">
          MacVG
        </a>
        <a href="https://mac-web.github.io/maclearn/" className="footer-link" target="_blank">
          MacLearn
        </a>
        <a href="https://mac-web.github.io/macideas/" className="footer-link" target="_blank">
          MacIdeas
        </a>
        <a href="https://mac-web.github.io/mactools/" className="footer-link" target="_blank">
          MacTools
        </a>
      </div>
      <div className="footer-column">
        <h2 className="footer-title">Social</h2>
        <div className="footer-social">
          <a href="mailto:mac.web.company@gmail.com" target="_blank" className="footer-icon" title="Email us">
            <img src={email} />
          </a>
          <a href="https://www.youtube.com/@Mac-Web" target="_blank" className="footer-icon" title="YouTube">
            <img src={youtube} />
          </a>
          <a href="https://github.com/Mac-Web/macblog" target="_blank" className="footer-icon" title="Source code">
            <img src={github} />
          </a>
          <a href="https://discord.gg/UT7g2S2cBP" target="_blank" className="footer-icon" title="Join our server!">
            <img src={discord} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
