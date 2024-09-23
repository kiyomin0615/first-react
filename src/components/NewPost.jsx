import classes from "./NewPost.module.css";

function NewPost({ onChangeAuthor, onChangeContent }) {
  return (
    <form className={classes.form}>
      <p className={classes['new-post']}>New Post</p>
      <p>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" required onChange={onChangeAuthor} />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="body"
          rows="3"
          onChange={onChangeContent}
        ></textarea>
      </p>
    </form>
  );
}

export default NewPost;
