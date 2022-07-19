import React from "react";

import { CloseButton, ContainerContent, ContainerOverlay } from "./ModalStyle";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <ContainerOverlay>
      <ContainerContent>
        <CloseButton onClick={onClose}>x</CloseButton>
        {children}
      </ContainerContent>
      ;
    </ContainerOverlay>
  );
}
