import "./Success.css";
import successIcon from "../../assets/svg/success.svg";
const ModalSuccess = () => {
  return (
    <div className="success">
      <img src={successIcon} alt="" />
      <p className="success__title">Your table has been successfully reserved!</p>
    </div>
  );
};

export default ModalSuccess;
