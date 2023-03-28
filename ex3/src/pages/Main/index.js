import './style.css';
import logoCubosAcademy from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import shoes from "../../data";
import { useState } from "react";
import Modal from "../../components/Modal"

function Main() {
  const [showModal, setShowModal] = useState(false);
  const [stateShoe, setStateShoe] = useState({});

  function openModal(shoe) {
    setShowModal(!showModal);
    setStateShoe(shoe)
  }

  function formatPrice(price) {
    return price.toFixed(2).replace(".", ",")
  }

  function formatSplitPrice(price) {
    return (price / 6).toFixed(2).replace(".", ",")
  }

  return (
    <div className="container">
      <header className="header-section">
        <h1>MODA MASCULINA</h1>
        <span>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</span>
        <img src={logoCubosAcademy} alt="logo" />
      </header>
      <main className="main-section">
        {shoes.map((shoe) => (
          <div
            className='shoe'
            key={shoe.id}
            onClick={() => openModal(shoe)}
          >
            <img src={shoe.image} alt="shoe" />
            <h4>Sapato masculino - derby - Tabaco</h4>
            <div className="price-shoe">
              <p>R$ {formatPrice(shoe.oldPrice)}</p>
              <strong>R$ {formatPrice(shoe.currentPrice)}</strong>
            </div>
            <div className="split-shoe">
              <strong>
                {`6x   R$ ${formatSplitPrice(shoe.currentPrice)}`}
              </strong>
              <h4>Sem juros</h4>
            </div>
          </div>
        )
        )}
        {showModal &&
          <Modal
            stateShoe={stateShoe}
            showModal={showModal}
            setShowModal={setShowModal}
            formatPrice={formatPrice}
            formatSplitPrice={formatSplitPrice}
          />}
      </main>
      <footer>
        <div className="footer-address">
          <h5>Endereço:</h5>
          <p>
            Rua Cubos ,  10<br />
            Jardim Academy<br />
            Salvador - Bahia - CEP 41820-021
          </p>
          <div className="social-icon">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <hr />
        <div className="footer-logo">
          <img src={logoCubosAcademy} alt="logo" />
        </div>
      </footer>
    </div>
  );
}

export default Main;
