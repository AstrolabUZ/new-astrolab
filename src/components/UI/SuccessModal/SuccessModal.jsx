import React from "react";
import { useEffect } from "react";
import check from "assets/images/check.png";
import Image from "next/image";
import { Modal } from "components/Modal";
const SuccessModal = ({ setSuccess }) => {
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, []);
  return (
    <Modal>
      <div className="flex items-center justify-center gap-2">
        <Image src={check} alt="" className="w-10" />
        <h6 className="text-xl font-bold">Успешно отправлено!</h6>
      </div>
      <p className="flex justify-center">Наши специалисты свяжутся с вами в ближайшее время</p>
    </Modal>
  );
};

export default SuccessModal;
