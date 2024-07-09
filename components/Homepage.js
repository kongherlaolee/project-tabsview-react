import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'


const Homepage = ({navigation}) => {
  const locations = [
    { name: 'ວັດພູ ຫຼວງພະບາງ', image: require('../image/5.jpg') },
    { name: 'ປະຕູໄຊ ນະຄອນຫຼວງວຽງຈັນ', image: require('../image/ປະຕູໄຊ.jpg') },
    { name: 'ຕາດກວາງຊີ ຫຼວງພະບາງ', image: require('../image/8.webp') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ຍິນດີຕ້ອນຮັບທຸກຄົນມາທ່ຽວໃນລາວ</Text>
      <ScrollView>
        {locations.map((location, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Details', { location: location.name, image: location.image })}
            style={styles.imageContainer}
          >
            <Image source={location.image} style={styles.image} />
            <Text style={styles.locationText}>{location.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily:'Phetsarath OT',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:'Phetsarath OT',
  },
});