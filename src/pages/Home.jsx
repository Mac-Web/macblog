import Hero from "../components/Hero";
import Card from "../components/Card";
import { macideas, maclearn, mactools, macblog, macvg, macweb, posts } from "../assets/assets";

function Home() {
  const img = { macideas, maclearn, macblog, mactools, macvg, macweb };

  return (
    <div className="wrap">
      <Hero title="Welcome to MacBlog!" description="MacBlog keeps you in the loop with info and updates about our apps." />
      <h2 className="section-title">Latest News</h2>
      <div className="cards">
        {posts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4)
          .map((post) => {
            return (
              <Card
                link={`/post/${post.id}`}
                img={img[post.app.toLowerCase()]}
                name={post.title}
                description={new Date(post.date).toLocaleDateString()}
              />
            );
          })}
      </div>
      <h2 className="section-title">More about our Apps</h2>
      <div className="cards">
        <Card link="/apps/macvg" img={macvg} name="MacVG" />
        <Card link="/apps/maclearn" img={maclearn} name="MacLearn" />
        <Card link="/apps/macideas" img={macideas} name="MacIdeas" />
        <Card link="/apps/mactools" img={mactools} name="MacTools" />
        <Card link="/apps/macblog" img={macblog} name="MacBlog" />
        <Card link="/apps/macweb" img={macweb} name="MacWeb" />
      </div>
      <h2 className="section-title">Explore our Categories</h2>
      <div className="cards">
        <Card link="/apps" name="Our Apps" description="See tips & info about our apps." />
        <Card link="/updates" name="App Updates" description="Changes, features, and new releases." />
        <Card link="/posts" name="MacWeb Posts" description="Tips, announcements, and other stuff." />
        <Card link="/roadmap" name="Roadmap" description="Check out our future goals and plans." />
      </div>
      <h2 className="section-title">Submit Feedback</h2>
      <div className="cards">
        <Card link="https://forms.gle/UpHgbAmLtUPCD5bs8" img={macvg} name="MacVG Feedback" blank={true} />
        <Card link="https://forms.gle/P5QfiZFgZ3KURdbJ8" img={maclearn} name="MacLearn Feedback" blank={true} />
        <Card link="https://forms.gle/fpMRFAcJU28VLpwt9" img={macideas} name="MacIdeas Feedback" blank={true} />
        <Card link="https://forms.gle/dWn2LQ2Bdzn6GaLEA" img={mactools} name="MacTools Feedback" blank={true} />
        <Card link="https://forms.gle/8ATGPGkr7mqKrJ1e9" img={macblog} name="MacBlog Feedback" blank={true} />
        <Card link="https://forms.gle/iacBWZAYAizBsfyt9" img={macweb} name="MacWeb Feedback" blank={true} />
      </div>
    </div>
  );
}

export default Home;
