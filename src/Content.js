import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [posts, setPost] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoTo] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + type)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setShowGoTo(true);
      } else {
        setShowGoTo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {tabs.map((tab) => (
        <button
          style={
            type === tab
              ? {
                  backgroundColor: "#333",
                  color: "white",
                }
              : {}
          }
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}
      <h1>Hi anh em</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title || post.name}</li>;
        })}
      </ul>
      {showGoToTop && (
        <button style={{ position: "fixed", bottom: 20, right: 20 }}>
          Go to Top
        </button>
      )}
    </>
  );
}

export default Content;
