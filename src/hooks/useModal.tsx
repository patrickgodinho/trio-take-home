import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { createContext, useContext, useRef } from 'react';
import { useState } from 'react';
import { MenuItemType } from 'types';

interface ModalContextValue {
  menuItemModalRef: React.RefObject<BottomSheetMethods>;
  selectedMenuItem: MenuItemType | undefined;
  setSelectedMenuItem: (menuItem: MenuItemType) => void;
}

const ModalContext = createContext({} as ModalContextValue);

export const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const menuItemModalRef = useRef<BottomSheet>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemType | undefined>();

  return (
    <ModalContext.Provider value={{ menuItemModalRef, selectedMenuItem, setSelectedMenuItem }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
