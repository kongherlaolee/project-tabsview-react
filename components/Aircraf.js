import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const aircraftData = [
  { id: '1', model: 'ສາຍການບີນ 737', type: 'ເຮືອບິນການຄ້າ', seats: 220 },
  { id: '2', model: 'ສາຍການບີນ 172', type: 'ເຮືອບິນເບົາ', seats: 400 },
  { id: '3', model: 'ສາຍການບີນ A380', type: 'ເຮືອບີນຜຜູ້ໂດສານ', seats: 250 },
];

const AircraftItem = ({ model, type, seats }) => (
  <View style={styles.aircraftItem}>
    <Text style={styles.aircraftModel}>{model}</Text>
    <Text style={styles.aircraftType}>{type}</Text>
    <Text style={styles.aircraftSeats}>ບ່ອນນັ້ງ: {seats}</Text>
  </View>
);

const Aircraft = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ສະໝາມບີນ</Text>
      <FlatList
        data={aircraftData}
        renderItem={({ item }) => <AircraftItem model={item.model} type={item.type} seats={item.seats} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Aircraft;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontFamily:'Phetsarath OT',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  aircraftItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  aircraftModel: {
    fontSize: 18,
    fontFamily:'Phetsarath OT',
    fontWeight: '600',
  },
  aircraftType: {
    fontSize: 16,
    fontFamily:'Phetsarath OT',
    color: '#888',
    marginTop: 8,
  },
  aircraftSeats: {
    fontSize: 14,
    fontFamily:'Phetsarath OT',
    color: '#666',
    marginTop: 8,
  },
});
