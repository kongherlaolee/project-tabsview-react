import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const favoritesData = [
  { id: '1', name: 'ຮ້ານອາຫານທີ່ມັກ', description: 'ສະຖານທີ່ທີ່ຍິ່ງໃຫຍ່ສໍາລັບຄ່ໍາ', rating: 75 },
  { id: '2', name: 'ປື້ມທີ່ມັກ', description: 'ນະວະນິຍາຍທີ່ມີສ່ວນຮ່ວມໂດຍຜູ້ຂຽນທີ່ມັກ', rating: 85 },
  { id: '3', name: 'ຮູບເງົາທີ່ມັກ', description: 'ຮູບເງົາຄລາສສິກທີ່ມີ scenes memorable', rating: 80 },
  { id: '4', name: 'ສະຖາທີມັກ', description: 'ສະຖາທີຕາດກວ້າງຊີ, ຕາດແຊ ແລະ ວັດພູສີ', rating: 90.5 },
  { id: '5', name: 'ຮູບເງົາທີ່ມັກ', description: 'ຮູບເງົາຄລາສສິກທີ່ມີ scenes memorable', rating: 80 },
  { id: '6', name: 'ຮູບເງົາທີ່ມັກ', description: 'ຮູບເງົາຄລາສສິກທີ່ມີ scenes memorable', rating: 80 },
  { id: '7', name: 'ຮູບເງົາທີ່ມັກ', description: 'ຮູບເງົາຄລາສສິກທີ່ມີ scenes memorable', rating: 80 },
  { id: '8', name: 'ຮູບເງົາທີ່ມັກ', description: 'ຮູບເງົາຄລາສສິກທີ່ມີ scenes memorable', rating: 80 },
  { id: '9', name: 'ຮູບເງົາທີ່ມັກ', description: 'ຮູບເງົາຄລາສສິກທີ່ມີ scenes memorable', rating: 80 },

];

const FavoriteItem = ({ name, description, rating }) => (
  <View style={styles.favoriteItem}>
    <Text style={styles.favoriteName}>{name}</Text>
    <Text style={styles.favoriteDescription}>{description}</Text>
    <Text style={styles.favoriteRating}>ຄະແນນ: {rating}/5</Text>
  </View>
);

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ລາຍການທີ່ມັກ</Text>
      <FlatList
        data={favoritesData}
        renderItem={({ item }) => <FavoriteItem name={item.name} description={item.description} rating={item.rating} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Favorites;

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
  favoriteItem: {
    fontFamily:'Phetsarath OT',
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
  favoriteName: {
    fontSize: 18,
    fontFamily:'Phetsarath OT',
    fontWeight: '600',
  },
  favoriteDescription: {
    fontSize: 16,
    fontFamily:'Phetsarath OT',
    color: '#888',
    marginTop: 8,
  },
  favoriteRating: {
    fontSize: 14,
    fontFamily:'Phetsarath OT',
    color: '#666',
    marginTop: 8,
  },
});
