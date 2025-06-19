import Hero from "../components/Hero";
import Card from "../components/Card";
import { macvg, maclearn, macideas, mactools, macweb } from "../assets/assets";

function Apps() {
  return (
    <div className="wrap">
      <title>Apps | MacBlog</title>
      <Hero title="MacWeb Apps" description="Check out more information on our apps and future projects here!" />
      <div className="cards">
        <Card link="/apps/macvg" img={macvg} name="MacVG" description="The best gaming platform with hundreds of games" />
        <Card
          link="/apps/maclearn"
          img={maclearn}
          name="MacLearn"
          description="Learn, strengthen, and master new web development skills!"
        />
        <Card
          link="/apps/macideas"
          img={macideas}
          name="MacIdeas"
          description="The productivity app that captures your ideas and thoughts!"
        />
        <Card
          link="/apps/mactools"
          img={mactools}
          name="MacTools"
          description="The all in one utilities app that helps you work more effectively."
        />
        <Card
          link="/apps/macblog"
          img="/logo.png"
          name="MacBlog"
          description="The information hub for everything related to our apps."
        />
        <Card
          link="/apps/macweb"
          img={macweb}
          name="MacWeb"
          description="Your best internet bud for productivity and entertainment."
        />
      </div>
    </div>
  );
}

export default Apps;
