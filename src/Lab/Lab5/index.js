import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import ImageUploader from './TestReduxPersist/ImageUploader';

const MainImageUpload = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ImageUploader />
      </PersistGate>
    </Provider>
  );
};

export default MainImageUpload;
