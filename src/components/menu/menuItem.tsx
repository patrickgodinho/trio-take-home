import { theme } from '@components/theme';
import React from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';
import { MenuItemType } from 'types';
import { useModal } from '@hooks/useModal';

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.border.primary,
    borderWidth: 1,
    padding: 8,
    flex: 1,
    maxWidth: 150,
    marginRight: 8,
    marginTop: 12,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: undefined,
    aspectRatio: 105 / 76,
  },
  name: {
    color: theme.colors.text.primary,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
  },
});

interface MenuItemProps {
  menuItem: MenuItemType;
}
export function MenuItem({ menuItem }: MenuItemProps) {
  const { menuItemModalRef, setSelectedMenuItem } = useModal();
  const onPress = () => {
    setSelectedMenuItem(menuItem);
    menuItemModalRef.current?.expand();
  };
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: menuItem.url }} style={styles.image} />
      <Text style={styles.name}>{menuItem.name}</Text>
    </Pressable>
  );
}
