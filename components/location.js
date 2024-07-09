import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Location = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="map-marker" size={32} color="red" />
      <Text style={styles.text}>Location</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
