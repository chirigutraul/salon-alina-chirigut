import React from "react";
import Modal from "react-modal";

function CustomModal({
  children,
  isOpen,
  onRequestClose,
  className,
}: {
  children?: JSX.Element;
  isOpen: boolean;
  onRequestClose(): void;
  className?: string;
  width?: string;
  height?: string;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`
    absolute left-[50%] top-[50%]
    translate-x-[-50%] translate-y-[-50%] bg-[rgba(255,255,255,0.7)]
    border-0 outline-0 rounded-lg shadow-md overflow-hidden z-50
    items-center
    w-screen h-96
    md:w-[40rem]
    md:h-[40rem]
    ${className}
    `}
      overlayClassName={`h-screen w-screen absolute top-0 bg-[rgba(0,0,0,0.5)] border-0 backdrop-blur z-50 overflow-hidden`}
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
