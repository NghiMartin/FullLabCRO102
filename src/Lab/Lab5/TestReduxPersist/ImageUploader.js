import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../store/imageSlice';

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();
  const image = useSelector(state => state.image);

  const handleImageSubmit = () => {
    if (imageUrl) {
      dispatch(setImage(imageUrl));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={imageUrl}
        onChangeText={text => setImageUrl(text)}
      />
      <Button title="Submit" onPress={handleImageSubmit} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ImageUploader;
