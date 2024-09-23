import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./Posts.module.css";

function Posts() {
  const [author, setAuthor] = useState("New Author");
  const [content, setContent] = useState("New Content");

  function updateAuthor(event) {
    setAuthor(event.target.value);
  }

  function updateContent(event) {
    setContent(event.target.value);
  }

  return (
    <>
      <NewPost onChangeAuthor={updateAuthor} onChangeContent={updateContent} />
      <ul className={classes.posts}>
        <Post author={author} content={content} />
        <Post author="Kiyomin" content="Living in Japan." />
        <Post author="Jieun" content="Living in Japan as well." />
      </ul>
    </>
  );
}

export default Posts;
