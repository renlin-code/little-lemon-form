import "./Modal.css";
import closeIcon from "./../../assets/svg/close.svg"

function Modal({ children, close }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <button className="modal__close" onClick={() => close()}>
          <img src={closeIcon} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
