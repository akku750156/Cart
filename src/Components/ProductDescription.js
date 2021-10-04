import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";

function ProductDescription({ product_details }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Modal</button>
      <Modal open={open} onClose={handleClose}>
        <div>I am in modal</div>
      </Modal>
    </>
  );
}

export default ProductDescription;
