import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Video } from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

const ImageCropPickerComponent = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);

  const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
    ImageCropPicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log('received image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch((e) => alert(e));
  };

  const pickSingleBase64 = (cropit) => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true,
      includeExif: true,
    })
      .then((image) => {
        console.log('received base64 image');
        setImage({
          uri: `data:${image.mime};base64,` + image.data,
          width: image.width,
          height: image.height,
        });
        setImages(null);
      })
      .catch((e) => alert(e));
  };

  const cleanupImages = () => {
    ImageCropPicker.clean()
      .then(() => {
        console.log('removed tmp images from tmp directory');
      })
      .catch((e) => {
        alert(e);
      });
  };

  const cleanupSingleImage = () => {
    let img = image || (images && images.length ? images[0] : null);
    console.log('will cleanup image', img);

    ImageCropPicker.cleanSingle(img ? img.uri : null)
      .then(() => {
        console.log(`removed tmp image ${img.uri} from tmp directory`);
      })
      .catch((e) => {
        alert(e);
      });
  };

  const cropLast = () => {
    if (!image) {
      return Alert.alert('No image', 'Before open cropping only, please select image');
    }

    ImageCropPicker.openCropper({
      path: image.uri,
      width: 200,
      height: 200,
    })
      .then((img) => {
        console.log('received cropped image', img);
        setImage({
          uri: img.path,
          width: img.width,
          height: img.height,
          mime: img.mime,
        });
        setImages(null);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const pickSingle = (cropit, circular = false, mediaType) => {
    ImageCropPicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((img) => {
        console.log('received image', img);
        setImage({
          uri: img.path,
          width: img.width,
          height: img.height,
          mime: img.mime,
        });
        setImages(null);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const pickMultiple = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    })
      .then((imgs) => {
        setImages(imgs.map((i) => {
          console.log('received image', i);
          return {
            uri: i.path,
            width: i.width,
            height: i.height,
            mime: i.mime,
          };
        }));
      })
      .catch((e) => alert(e));
  };

  const renderVideo = (video) => {
    console.log('rendering video');
    return (
      <View style={{ height: 300, width: 300 }}>
        <Video
          source={{ uri: video.uri, type: video.mime }}
          style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
          rate={1}
          paused={false}
          volume={1}
          muted={false}
          resizeMode={'cover'}
          onError={(e) => console.log(e)}
          onLoad={(load) => console.log(load)}
          repeat={true}
        />
      </View>
    );
  };

  const renderImage = (img) => {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={img}
      />
    );
  };

  const renderAsset = (img) => {
    if (img.mime && img.mime.toLowerCase().indexOf('video/') !== -1) {
      return renderVideo(img);
    }

    return renderImage(img);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {image ? renderAsset(image) : null}
        {images ? images.map((i, idx) => (
          <View key={idx}>{renderAsset(i)}</View>
        )) : null}
      </ScrollView>

      <TouchableOpacity onPress={() => pickSingleWithCamera(false)} style={styles.button}>
        <Text style={styles.text}>Select Single Image With Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pickSingleWithCamera(false, 'video')} style={styles.button}>
        <Text style={styles.text}>Select Single Video With Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pickSingleWithCamera(true)} style={styles.button}>
        <Text style={styles.text}>Select Single With Camera With Cropping</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pickSingle(false)} style={styles.button}>
        <Text style={styles.text}>Select Single</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => cropLast()} style={styles.button}>
        <Text style={styles.text}>Crop Last Selected Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pickSingleBase64(false)} style={styles.button}>
        <Text style={styles.text}>Select Single Returning Base64</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pickSingle(true)} style={styles.button}>
        <Text style={styles.text}>Select Single With Cropping</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pickSingle(true, true)} style={styles.button}>
        <Text style={styles.text}>Select Single With Circular Cropping</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pickMultiple()} style={styles.button}>
        <Text style={styles.text}>Select Multiple</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => cleanupImages()} style={styles.button}>
        <Text style={styles.text}>Cleanup All Images</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => cleanupSingleImage()} style={styles.button}>
        <Text style={styles.text}>Cleanup Single Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageCropPickerComponent;
