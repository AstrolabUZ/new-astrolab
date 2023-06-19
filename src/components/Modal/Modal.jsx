import React from "react";
import { Modal as AntModal } from "antd";
const Modal = ({ children }) => {
  return (
    <>
      <AntModal centered closable={false} open={true} footer={null}>
        {children}
      </AntModal>
    </>
  );
};

export default Modal;
