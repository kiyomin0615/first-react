import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/posts/${id}`
      );
      const data = await response.json();
      setPost(data);
    }

    getPost();
  }, []);

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>No such post</h1>
          <p>
            <Link to=".." className={classes.btn}>
              CLOSE
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.content}>{post.content}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
