import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import logo from '../../../assets/logo.png';
import { theme } from '@components/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.section,
  },
  logo: {
    width: 70,
    height: 60,
  },
});

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}
