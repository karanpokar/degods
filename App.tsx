import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import appStore from './src/store/store';
import CollectionPage from './src/screens/Collection';
import NFTPage from './src/screens/NFT';
import SplashScreen from './src/screens/Onboarding';

const Stack = createNativeStackNavigator();




const App = () => {
  return (
  <Provider store={appStore}>
      <NavigationContainer
        onStateChange={state => {
          //console.log('State', state);
        }}>
        <Stack.Navigator
        initialRouteName='Onboarding'
          screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name='Onboarding' component={SplashScreen}/>
            <Stack.Screen name='Collection' component={CollectionPage}/>
            <Stack.Screen name='NFTPage' component={NFTPage}/>
            
            
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};

export default App;