import { useState } from 'react';

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  function openModal() {
    setIsModal(true);
  }
  function closeModal() {
    setIsModal(false);
  }

  return {
    isModal,
    openModal,
    closeModal,
  };
};
