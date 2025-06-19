import Hero from "../components/Hero";
import { posts } from "../assets/assets";
import { useNavigate, useParams,Link } from "react-router";
import { useEffect, useState } from "react";
import "./Post.css";

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState("");
  const [matchingPosts, setMatchingPosts] = useState({});

  useEffect(() => {
    posts.find((post) => post.id === parseInt(id)) ? setPost(posts.find((post) => post.id === parseInt(id))) : navigate("/posts");
  }, [id]);

  useEffect(() => {
    const matchedPosts = posts.filter((newpost) => newpost.category === post.category && newpost.app === post.app).reverse();
    const groupedByYear = matchedPosts.reduce((acc, post) => {
      const year = post.date.slice(0, 4);
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    }, {});
    setMatchingPosts(groupedByYear);
  }, [post]);

  return (
    <div className="post-wrap">
      <ul className="sidebar">
        <h2 className="sidebar-title">{post.app + " " + post.category + "s"}</h2>
        {Object.entries(matchingPosts)
          .reverse()
          .map(([year, posts]) => {
            return (
              <>
                <h3 onClick={(e) => e.target.nextSibling.classList.toggle("yearclose")} className="syear">
                  {year}
                </h3>
                <div className="sidelinks">
                  {posts.map((post) => {
                    console.log(post.id);
                    return (
                      <Link style={{ color: post.id == id ? "var(--primary-color)" : "" }} to={`/post/${post.id}`}>
                        {post.sidetitle ? post.sidetitle : post.title.replace(post.app, "")}
                      </Link>
                    );
                  })}
                </div>
              </>
            );
          })}
      </ul>
      <div className="content">
        <title>{`${post.title} | MacBlog`}</title>
        <Hero title={post.title} />
        <h3 className="author">
          <span className="date">{post.date}</span>
          <span>By {post.author}</span>
        </h3>
        <hr className="article-hr" />
        <p className="paragraph-content">{post.content?.description}</p>
        <div className="table-contents">
          <h2 className="paragraph-title">Table of Contents</h2>
          <div className="menu-links">
            {post.content?.menulinks.map((link, index) => {
              return (
                <a href={`#st${index}`} className="menu-link">
                  {link}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          {post.content?.paragraphs.map((paragraph, index) => {
            return (
              <>
                <h1 className="paragraph-title" id={`st${index}`}>
                  {paragraph.title}
                </h1>
                <p className="paragraph-content">{paragraph.content}</p>
              </>
            );
          })}
        </div>
        <h1 className="paragraph-title">Other Improvements, Changes, and Fixes include:</h1>
        <ul className="others-list" id={`st${post.content?.paragraphs.length}`}>
          {post.content?.others.map((other) => (
            <li>{other}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Post;
