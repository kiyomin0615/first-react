import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
  const [author, setAuthor] = useState("New Author");
  const [content, setContent] = useState("New Content");

  function updateAuthor(event) {
    setAuthor(event.target.value);
  }

  function updateContent(event) {
    setContent(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    const newPost = {
      author: author,
      content: content
    }

    console.log(newPost);

    onCancel(); // hide modal
  }

  return (
    <form className={classes.form} onSubmit={submitForm}>
      <p className={classes["new-post"]}>New Post</p>
      <p>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" required onChange={updateAuthor} />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="body"
          rows="3"
          onChange={updateContent}
        ></textarea>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
