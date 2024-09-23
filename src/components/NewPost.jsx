import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onCancel, onSubmit }) {
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

    onSubmit(newPost); // add new post
    onCancel(); // hide modal
  }

  return (
    <form className={classes.form} onSubmit={submitForm}>
      <h2>New Post</h2>
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
