import Hero from "../components/Hero";
import Card from "../components/Card";
import { macvg, maclearn, macideas, mactools, macblog, macweb, posts } from "../assets/assets";

function Posts() {
  const img = { macideas, maclearn, macblog, mactools, macvg, macweb };

  return (
    <div className="wrap">
      <title>Posts | MacBlog</title>
      <Hero title="Posts" description="You can find posts for tips and ideas about our apps or just about anything else here!" />
      <div className="cards">
        {posts
          .filter((post) => post.category === "Post")
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post) => {
            return (
              <Card
                link={`/post/${post.id}`}
                img={img[post.app.toLowerCase(0)]}
                name={post.sidetitle}
                description={new Date(post.date).toLocaleDateString()}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Posts;
