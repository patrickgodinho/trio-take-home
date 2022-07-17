import React from 'react';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface BottomSheetProps {
  children: JSX.Element;
  percentageSize: string;
  componentRef: React.RefObject<BottomSheetMethods>;
}

export function BottomSheetComponent({ children, percentageSize, componentRef }: BottomSheetProps) {
  return (
    <BottomSheet
      ref={componentRef}
      index={-1}
      snapPoints={[percentageSize]}
      detached
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          opacity={0.8}
          pressBehavior={'close'}
        />
      )}
      enablePanDownToClose>
      {children}
    </BottomSheet>
  );
}
