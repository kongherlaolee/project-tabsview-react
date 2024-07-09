import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';



const AddPerson = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);

  const handleAddPerson = () => {
    console.log('Location added:', { name, age, address, image });
    // You can add logic here to handle the added person, such as updating a list or sending data to an API.
  };

  const pickImage = async () => {
    // Ask for permission to access the media library
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ເພີມສະຖາທີ່</Text>
      <TextInput
        style={styles.input}
        placeholder="ຊື່ສະຖາທີ່"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="ສະຖາທີ"
        value={age}
        onChangeText={setAge}
        
      />
      <TextInput
        style={styles.input}
        placeholder="ທີ່ຢູ່ຂອງສະຖາທີ່"
        value={address}
        onChangeText={setAddress}
      />
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>ເລືອກຮູບ</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="ສົງ" onPress={handleAddPerson} />
    </View>
  );
};

export default AddPerson;

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
  input: {
    height: 40,
    fontFamily:'Phetsarath OT',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  imagePicker: {
    backgroundColor: '#900C3F',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 12,
  },
  imagePickerText: {
    
    color: '#fff',
    fontSize: 16,
    fontFamily:'Phetsarath OT',
    
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 12,
  },
});
