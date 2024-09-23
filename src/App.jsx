import { useState } from "react";

import MainHeader from "./components/MainHeader";
import Posts from "./components/Posts";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModal() {
    setModalIsVisible(true);
  }

  function hideModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModal} />
      <main>
        <Posts modalIsVisible={modalIsVisible} onStopPost={hideModal} />
      </main>
    </>
  );
}

export default App;
