import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/reducer';
import AppNavigator from './src/AppNavigator';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';

import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);
const persistor = persistStore(store);
function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
