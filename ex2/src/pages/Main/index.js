import './style.css';
import { useState } from "react";
import PopUp from '../../components/PopUp';

function Main() {
  const [listUser, setListUser] = useState([]);
  const [inputName, setInputName] = useState("")
  const [showPopup, setShowPopup] = useState(false)

  function handleAddUser() {
    if (!inputName) return;

    setListUser([...listUser, inputName]);
    setInputName("")

    setShowPopup(true)

    setTimeout(() => {
      setShowPopup(false)
    }, 1500);
  }

  return (
    <div className="container">
      <div className="add-user">
        <input
          placeholder="Nome"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleAddUser}>
          Adicionar
        </button>
      </div>

      <div className="list-user">
        <h1>Usuários</h1>
        <div className="users">
          {listUser.map((user, index) =>
            <h2 key={index + 1}>{user}</h2>
          )}
          {showPopup ? <PopUp /> : null}
        </div>
      </div>
    </div>
  );
}

export default Main;