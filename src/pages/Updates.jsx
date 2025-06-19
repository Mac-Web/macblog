import Hero from "../components/Hero";
import Card from "../components/Card";
import { macvg, maclearn, macideas, macblog, mactools, macweb, posts } from "../assets/assets";

function Updates() {
  const img = { macideas, maclearn, macblog, mactools, macvg, macweb };

  return (
    <div className="wrap">
      <title>Updates | MacBlog</title>
      <Hero
        title="App Updates"
        description="You can see the 10 most recent posts on new features and changes we're adding to MacWeb apps here!"
      />
      <div className="cards">
        {posts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 10)
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
    </div>
  );
}

export default Updates;
