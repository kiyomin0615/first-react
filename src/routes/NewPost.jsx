import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Modal from "../components/Modal";
import Context from "../contexts/context";
import classes from "./NewPost.module.css";

function NewPost() {
  const [author, setAuthor] = useState("New Author");
  const [content, setContent] = useState("New Content");
  const { addNewPost } = useContext(Context);
  const navigate = useNavigate();

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
      content: content,
    };

    addNewPost(newPost); // add new post
    navigate("/"); // hide modal
  }

  return (
    <Modal>
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
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
