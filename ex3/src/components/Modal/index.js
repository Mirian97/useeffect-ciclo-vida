import './style.css';
import closeIcon from "../../assets/close-icon.svg";

function Modal({
    stateShoe,
    showModal,
    setShowModal,
    formatPrice,
    formatSplitPrice
}) {

    return (
        <div className='modal'>
            <div className="modal-card">
                <div className='modal-shoe'>
                    <img src={closeIcon} className="btn-close" onClick={() => setShowModal(!showModal)} alt="close" />
                    <img src={stateShoe.image} className='img-shoe' alt="shoe" />
                    <strong>{stateShoe.name}</strong>
                    <p>Sofisticado e cheio de elegância, este sapato estilo Derby deixará o seu look impecável. Feito de couro, conta com design moderno, solado flexível e palmilha extra macia. Com muito bom gosto e charme, é o tipo de sapato masculino que se adapta a qualquer ocasião, desde as formais as mais casuais. Fica incrível se combinado com camisa social manga longa e calça de linho.  </p>
                </div>
                <div className='buy-shoe'>
                    <button className="btn-buy">COMPRAR</button>
                    <div className='modal-buy'>
                        <div className="modal-split-shoe">
                            <p>{`R$ ${formatPrice(stateShoe.oldPrice)}`}</p>
                            <strong>
                                {`6x   R$ ${formatSplitPrice(stateShoe.currentPrice)}`}
                            </strong>
                        </div>
                        <div className="modal-price-shoe">
                            <strong>{`R$ ${formatPrice(stateShoe.currentPrice)}`}</strong>
                            <h4>Sem juros</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;