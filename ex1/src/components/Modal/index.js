import './style.css';

function Modal({ showModal, setShowModal }) {
  return (
    <>
      {
        showModal &&
        <div className="modal">
          <div className="modal-card">
            <h1>Users</h1>
            <p>Daniel</p>
            <p>Daniel</p>
            <p>Daniel</p>
            <p>Daniel</p>
            <p>Daniel</p>
            <p>Daniel</p>
            <button onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default Modal;