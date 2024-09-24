import { useContext } from "react";

import Post from "./Post";
import Context from "../contexts/context";
import classes from "./PostList.module.css";

function PostList() {
  const { posts, isFetching } = useContext(Context);

  return (
    <>
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

export default PostList;
