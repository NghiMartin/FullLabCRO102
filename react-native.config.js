module.exports = {
    dependencies: {
        'react-native-vector-icons': {
          platforms: {
            ios: null,
          },
        },
          'react-native-google-signin': {
            platforms: {
              android: null
            }
          }
      },
    project : {
        ios: {},
        android: {},
    },
    assets: ['./src/assets'],
}