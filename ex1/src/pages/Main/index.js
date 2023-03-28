import './style.css';
import Modal from "../../components/Modal"
import { useState } from "react";

function Main() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">

      <button onClick={() => setShowModal(true)}>
        Open
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />

    </div>
  );
}

export default Main;
