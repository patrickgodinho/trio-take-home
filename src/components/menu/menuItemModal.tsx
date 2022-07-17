import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useModal } from '@hooks/useModal';
import { BottomSheetComponent } from '@components/layout/bottomSheet';
import { theme } from '@components/theme';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  image: {
    width: '75%',
    height: undefined,
    aspectRatio: 105 / 76,
  },
  titleContainer: {
    marginTop: 26,
    maxWidth: 150,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    textAlign: 'center',
  },
  priceContainer: {
    borderColor: theme.colors.border.black,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 16,
  },
  descriptionContainer: {
    marginTop: 16,
    marginHorizontal: 24,
  },
  description: {
    color: theme.colors.text.primary,
    textAlign: 'center',
    fontSize: 14,
  },
});

export function MenuItemModal() {
  const { menuItemModalRef, selectedMenuItem } = useModal();
  return (
    <BottomSheetComponent componentRef={menuItemModalRef} percentageSize="90%">
      <View style={styles.container}>
        <Image source={{ uri: selectedMenuItem?.url }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{selectedMenuItem?.name}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text>{`$${selectedMenuItem?.price}`}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{selectedMenuItem?.description}</Text>
        </View>
      </View>
    </BottomSheetComponent>
  );
}
