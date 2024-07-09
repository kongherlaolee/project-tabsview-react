import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

// Sample data for the library
const libraryData = [
  { id: '1', title: 'php, laravel10, vue, ract, python', author: 'ທ່ານ ດຣ ປໍ້ຈົວວ່າງ ກ່າງເສີ' },
  { id: '2', title: 'ນະວະນີຍາຍ', author: 'ທ່ານ ດຣ ກົງໃຫ ເຮີລາວລີ' },
  { id: '3', title: 'ປື້ມ photoshop', author: 'ທ່ານ ດຣ ຢູ້ ເຮີ' },
  { id: '4', title: 'progamer', author: 'ທ່ານ ດຣ ໄຊ ລາວປາວນ້ອຍ' },
  { id: '3', title: 'ປື້ມ php', author: 'ທ່ານ ດຣ ຈີນູ້ ຕົງເນັງ' },
  { id: '3', title: 'ປື້ມ node', author: 'ທ່ານ ດຣ  nodejs' },
];

const LibraryItem = ({ title, author }) => (
  <View style={styles.libraryItem}>
    <Text style={styles.bookTitle}>{title}</Text>
    <Text style={styles.bookAuthor}>{author}</Text>
  </View>
);

const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ຫໍສະໝຸດ</Text>
      <FlatList
        data={libraryData}
        renderItem={({ item }) => <LibraryItem title={item.title} author={item.author} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Library;

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
  libraryItem: {
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
  bookTitle: {
    fontFamily:'Phetsarath OT',
    fontSize: 18,
    fontWeight: '600',
  },
  bookAuthor: {
    fontFamily:'Phetsarath OT',
    fontSize: 16,
    color: '#888',
    marginTop: 4,
  },
});
