import { useState, useEffect } from "react";

import Modal from "./Modal";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./Posts.module.css";

function Posts({ modalIsVisible, onStopPost }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getAllPosts() {
      setIsFetching(true);

      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/posts`
      );
      const posts = await response.json();
      setPosts(posts);
      setIsFetching(false);
    }

    getAllPosts();
  }, []);

  function addNewPost(newPost) {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // update state based on current state
    setPosts((currentPosts) => [newPost, ...currentPosts]);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onStopPost}>
          <NewPost onCancel={onStopPost} onSubmit={addNewPost} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post
                key={post.author + post.content}
                author={post.author}
                content={post.content}
              />
            );
          })}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts</h2>
          <p>Add new posts.</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default Posts;
