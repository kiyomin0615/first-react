import { useState } from "react";

import Modal from "./Modal";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./Posts.module.css";

function Posts({ modalIsVisible, onStopPost }) {
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onStopPost}>
          <NewPost onCancel={onStopPost} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Kiyomin" content="Living in Japan." />
        <Post author="Jieun" content="Living in Japan as well." />
      </ul>
    </>
  );
}

export default Posts;
