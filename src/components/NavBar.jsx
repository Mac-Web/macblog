import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { logo, mode, github } from "../assets/assets";
import { motion } from "framer-motion";

function NavBar() {
  const [lightMode, setLightMode] = useState(localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) : false);

  useEffect(() => {
    lightMode ? document.body.classList.add("light") : document.body.classList.remove("light");
    localStorage.setItem("mode", lightMode);
  }, [lightMode]);

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src={logo} /> MacBlog
      </Link>
      <div className="nav-links">
        <Link to="/apps" className="nav-link">
          Apps
        </Link>
        <Link to="/updates" className="nav-link">
          Updates
        </Link>
        <Link to="/posts" className="nav-link">
          Posts
        </Link>
        <Link to="/roadmap" className="nav-link">
          Roadmap
        </Link>
        <motion.img
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 1.1, rotate: 320 }}
          transition={{ duration: 0.7, type: "spring" }}
          src={mode}
          title="Toggle light mode"
          className="nav-img"
          onClick={() => setLightMode(!lightMode)}
        />{" "}
        <motion.img
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 1.1, rotate: 320 }}
          transition={{ duration: 0.7, type: "spring" }}
          src={github}
          title="Source code"
          className="nav-img"
          onClick={() => window.open("https://github.com/Mac-Web/macblog", "_blank")}
        />
      </div>
    </nav>
  );
}

export default NavBar;
