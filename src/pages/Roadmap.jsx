import Hero from "../components/Hero";
import Card from "../components/Card";
import { macvg, maclearn, macideas, mactools, macweb } from "../assets/assets";
import { motion } from "framer-motion";
import "./Roadmap.css";

function Roadmap() {
  return (
    <div className="wrap">
      <title>Roadmap | MacBlog</title>
      <Hero
        title="Company Roadmap"
        description="Our mission is to fulfill everyone's productivity and
          entertainment needs with our powerful apps."
      />
      <div className="roadmap">
        <motion.div
          initial={{ y: 150, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="roadmap-section"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="roadmap-date">Summer 2025</div>
          <p className="roadmap-content">
            Transition every single MacWeb app from using vanilla JS to React for improved interactions, scalability, performance,
            and managebility. This basically means completely rewriting the code for each app and remaking them from the ground
            up, so we chose summer, when we have the most time, to do this difficult task.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="roadmap-section"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="roadmap-date">Fall 2025</div>
          <p className="roadmap-content">
            Integrate analytics and advertising into each of our apps properly and start advertising them on different social
            media platforms to increase income for more future improvements.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="roadmap-section"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="roadmap-date">Winter 2025</div>
          <p className="roadmap-content">
            Develop new web apps and add more features to exisiting apps to make the MacWeb ecosystem more complete, funcitonal,
            and useful for everyone. Adding more apps also means more ways to raise income and upgrade our services.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="roadmap-section"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="roadmap-date">Spring 2026</div>
          <p className="roadmap-content">
            Hopefully incorporate backend servers into MacWeb apps if we raise enough revenue to afford them. This means way
            better user experience because we can save user data, create user-generated content, develop real time apps, and do a
            lot more interesting stuff with the backend servers.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="roadmap-section"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="roadmap-date">Summer 2026</div>
          <p className="roadmap-content">
            Update every single app so they integrate with each other and all have a consistent and modern device responsive
            design while having performant code, working features, and no bugs.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="roadmap-section"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="roadmap-date">Future</div>
          <p className="roadmap-content">
            With the help of the income raised by you, the users, we can achieve a lot of premium accomplishments with our apps in
            the future such as AI integration, syncing across devices, user content, communities, and a ton more. Stay tuned!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Roadmap;
