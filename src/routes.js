import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feed from './pages/Feed';

import logo from './assets/instagram.png';

const Stack = createNativeStackNavigator();

function createAppContainer() {

  function LogoTitle() {
    return (
      <Image
        style={{ width:'95%', resizeMode:'contain' }}
        source={logo}
      />
    );
  }

  return (
    <NavigationContainer>

      <Stack.Navigator>
          
        <Stack.Screen 
          name="Feed" 
          component={Feed} 
          options={{
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
            headerTitle: (props) => <LogoTitle {...props} />
          }}
        />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default createAppContainer;