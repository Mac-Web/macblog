import Hero from "../components/Hero";
import Card from "../components/Card";
import { macvg, maclearn, macideas, mactools, macblog, macweb, posts } from "../assets/assets";
import { useParams, Link } from "react-router";

function AppPage() {
  const img = { macideas, maclearn, macblog, mactools, macvg, macweb };
  const { app } = useParams();
  const apps = {
    macvg: [
      "MacVG",
      "MacVG is the best game site built for your entertainment with more than 400 diverse games that you can choose from. With a crazy amount of features and content, MacVG makes it easy to browse, play, and enjoy different games! Thanks to 3kh0 for providing some of the games' code!",
    ],
    maclearn: [
      "MacLearn",
      "Learn, strengthen, and master. Read coding tutorials on MacLearn, learn programming tips, try them in Code Playground, and create anything. In the 21st century, coding is one of the most important skills to learn and master. Learn to code now, at MacLearn.",
    ],
    macideas: [
      "MacIdeas",
      "MacIdeas is the ultimate productivity tool for capturing and writing down your ideas, thoughts, and anything! With the integration of tasks, notes, drawings, and more, you can manage your imagination and thoughts easily!",
    ],
    mactools: [
      "MacTools",
      "MacTools is your all in one utility app that helps you get anything done easily with powerful tools, features, and widgets ranging from math and geometry to text decoder, timer, countdown, and more! You can also pin these tools to access them instantly!",
    ],
    macblog: [
      "MacBlog",
      "MacBlog is the information hub for MacWeb apps, where we put and share our ideas, updates, and articles about our apps, projects, and more! You can see posts, tips, info, and other resources about our apps here if you want to learn more about them.",
    ],
    macweb: [
      "MacWeb",
      "Introducing MacWeb, the all-in-one app that helps you improve, makes you more productive, and provides you with top-tier entertainment experiences! We develop all kinds of online apps with extremely high quality with many features aimed to help your internet life!",
    ],
  };
  const appName = apps[app][0];

  return (
    <div className="wrap">
      <title>{`${appName} | MacBlog`}</title>
      <Hero title={appName} description={apps[app][1]} />
      <h2 className="section-title">Tips & Documentation</h2>
      <div className="cards">
        <Card link="" img={img[app]} name={appName + " Tips"} description={"Tips about " + appName} />
      </div>
      <h2 className="section-title">Updates</h2>
      <div className="cards">
        {posts
          .filter((post) => post.app == appName && post.category === "Update")
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4)
          .map((post) => (
            <Card
              link={"/post/" + post.id}
              img={img[app]}
              name={post.sidetitle}
              description={new Date(post.date).toLocaleDateString()}
            />
          ))}
      </div>
      <div className="action-btn-wrap">
        <Link to={`/apps/${app}/updates`} className="action-btn">
          View All
        </Link>
      </div>
    </div>
  );
}

export default AppPage;
