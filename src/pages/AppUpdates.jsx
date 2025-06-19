import Hero from "../components/Hero";
import Card from "../components/Card";
import { macvg, maclearn, macideas, mactools, macblog, macweb, posts } from "../assets/assets";
import { useParams, Link } from "react-router";

function AppUpdates() {
  const img = { macideas, maclearn, macblog, mactools, macvg, macweb };
  const { app } = useParams();
  const apps = {
    macvg: "MacVG",
    maclearn: "MacLearn",
    macideas: "MacIdeas",
    mactools: "MacTools",
    macblog: "MacBlog",
    macweb: "MacWeb",
  };
  const appName = apps[app];

  return (
    <div className="wrap">
      <title>{`${appName + " Updates"} | MacBlog`}</title>
      <Hero title={appName + " Updates"} description={`Check out every ${appName} update here!`} />
      <div className="cards">
        {posts
          .filter((post) => post.app == appName && post.category === "Update")
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post) => (
            <Card
              link={"/post/" + post.id}
              img={img[app]}
              name={post.sidetitle ? post.sidetitle : post.title.replace(appName, "")}
              description={new Date(post.date).toLocaleDateString()}
            />
          ))}
      </div>
    </div>
  );
}

export default AppUpdates;
