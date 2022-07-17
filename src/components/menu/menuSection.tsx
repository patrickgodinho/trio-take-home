import { theme } from '@components/theme';
import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { MenuItemType, MenuSectionType } from 'types';
import { MenuItem } from './menuItem';

export interface MenuSectionProps {
  section: MenuSectionType;
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 24,
    letterSpacing: -0.3,
  },
});

const renderItem = ({ item }: { item: MenuItemType }) => <MenuItem menuItem={item} />;

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{section.name}</Text>
      <FlatList data={section.items} horizontal renderItem={renderItem} />
    </View>
  );
}
