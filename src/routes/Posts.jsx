import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import PostList from "../components/PostList";
import Context from "../contexts/context";

function Posts() {
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
    <Context.Provider
      value={{ posts: posts, isFetching: isFetching, addNewPost: addNewPost }}
    >
      <Outlet />
      <main>
        <PostList />
      </main>
    </Context.Provider>
  );
}

export default Posts;
