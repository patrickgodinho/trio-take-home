import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder';

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  title: {
    marginTop: 12,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  items: {
    flexDirection: 'row',
  },
  item: {
    marginHorizontal: 12,
  },
});

export function MenuPlaceholder() {
  return (
    <Placeholder Animation={Fade}>
      <View style={styles.section}>
        <PlaceholderLine height={30} style={styles.title} width={40} noMargin />
        <View style={styles.items}>
          <PlaceholderMedia size={90} style={styles.item} />
          <PlaceholderMedia size={90} style={styles.item} />
          <PlaceholderMedia size={90} style={styles.item} />
          <PlaceholderMedia size={90} style={styles.item} />
        </View>
      </View>
    </Placeholder>
  );
}
