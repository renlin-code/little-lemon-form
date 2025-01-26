import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import BookTableForm from "./components/Form/BookTableForm";
import Success from "./components/Success/Success";

import "./App.css";
import { useState } from "react";

function App() {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const onSubmitHandle = (values) => {
    console.log(values);
    setOpenFormModal(false);
    setSuccessModal(true);
  };

  return (
    <div className="App">
      <Button onClick={() => setOpenFormModal(true)}>Open</Button>
      {openFormModal && (
        <Modal close={() => setOpenFormModal(false)}>
          <BookTableForm onSubmit={onSubmitHandle} />
        </Modal>
      )}
      {successModal && 
        <Modal close={() => setSuccessModal(false)}>
          <Success />
        </Modal>}
    </div>
  );
}

export default App;
