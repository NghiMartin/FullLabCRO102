import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const tracks = [
  {
    id: '1',
    url: require('../../tracks/blues.wav'),
    title: 'Blues Beat',
  },
  {
    id: '2',
    url: require('../../tracks/country.mp3'),
    title: 'Country Song',
  },
  {
    id: '3',
    url: require('../../tracks/emiu.mp3'),
    title: 'Andree Song',
  },
  {
    id: '4',
    url: require('../../tracks/mtp.mp3'),
    title: 'MTP Song',
  },
];

const setUpTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(tracks);
    console.log('Tracks added');
  } catch (e) {
    console.log(e);
  }
};

const TrackPlayerApp = () => {
  useEffect(() => {
    setUpTrackPlayer();

    return () => TrackPlayer.destroy();
  }, []);

  const playTrack = async () => {
    await TrackPlayer.play();
  };

  const pauseTrack = async () => {
    await TrackPlayer.pause();
  };

  const skipToNextTrack = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPreviousTrack = async () => {
    await TrackPlayer.skipToPrevious();
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={pauseTrack}>
          <Text style={styles.text}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={playTrack}>
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={skipToPreviousTrack}>
          <Text style={styles.text}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={skipToNextTrack}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  btn: {
    backgroundColor: '#ff0044',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 160,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default TrackPlayerApp;
