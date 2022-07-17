import React from 'react';
import { FlatList } from 'react-native';
import { useMenu } from '@hooks/useMenu';
import { MenuPlaceholder } from './menuPlaceholder';
import { MenuSectionType } from 'types';
import { MenuSection } from './menuSection';

function Menu() {
  const { data, isLoading } = useMenu();

  const renderItem = ({ item }: { item: MenuSectionType }) => <MenuSection section={item} />;

  if (isLoading) return <MenuPlaceholder />;

  return <FlatList renderItem={renderItem} data={data?.menus} />;
}

export default Menu;
