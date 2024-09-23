import { useState } from "react";

import Modal from "./Modal";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./Posts.module.css";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [author, setAuthor] = useState("New Author");
  const [content, setContent] = useState("New Content");

  function hideModal() {
    setModalIsVisible(false);
  }

  function updateAuthor(event) {
    setAuthor(event.target.value);
  }

  function updateContent(event) {
    setContent(event.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModal}>
          <NewPost
            onChangeAuthor={updateAuthor}
            onChangeContent={updateContent}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={author} content={content} />
        <Post author="Kiyomin" content="Living in Japan." />
        <Post author="Jieun" content="Living in Japan as well." />
      </ul>
    </>
  );
}

export default Posts;
