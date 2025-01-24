import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import BookTableForm from "./components/Form/BookTableForm";


import "./App.css";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Button onClick={() => setOpenModal(true)}>Open</Button>
      {openModal && 
      <Modal close={() => setOpenModal(false)}>
        <BookTableForm />
      </Modal>}
    </div>
  );
}

export default App;
