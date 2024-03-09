// BottomSheetContext.js
import React, { createContext, useContext, useRef, useState } from 'react';

const BottomSheetContext = createContext();

export const useBottomSheet = () => useContext(BottomSheetContext);

export const BottomSheetProvider = ({ children }) => {
  const bottomSheetModalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const presentModal = () => {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  };

  const dismissModal = () => {
    bottomSheetModalRef.current?.dismiss();
    setIsOpen(false);
  };

  return (
    <BottomSheetContext.Provider
      value={{
        bottomSheetModalRef,
        isOpen,
        presentModal,
        dismissModal,
      }}>
      {children}
    </BottomSheetContext.Provider>
  );
};
