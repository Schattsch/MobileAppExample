import React, {useEffect} from 'react';

import { Image } from "react-native";

import { colors } from './src/utils/colors';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';

import Config from 'react-native-config';
import ProductDetails from './src/screens/app/ProductDetails';

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="CreateListing" component={CreateListing} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator();

const isSignedIn = true

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size }) => {
        let icon;
        if (route.name === 'Home') {
          icon = focused 
          ? require('./src/assets/tabs/home_active.png') : require('./src/assets/tabs/home.png');
        } else if (route.name === 'Favorites') {
          icon = focused 
          ? require('./src/assets/tabs/bookmark_active.png') : require('./src/assets/tabs/bookmark.png');
        } else if (route.name === 'Profile') {
          icon = focused 
          ? require('./src/assets/tabs/profile_active.png') : require('./src/assets/tabs/profile.png');
        }

        return <Image style={{width: 24, height: 24}} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGray}
  })}
  >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites}/>
      <Tab.Screen name="Profile" component={ProfileStack}/>
    </Tab.Navigator>
  );
}


const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, 
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID
    })
  }, [])

  const theme = {
    colors: {background: colors.white},

  }

  return (
    <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          isSignedIn ? (
            <>
            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}/>
            </>
          ) : (
            <>
        <Stack.Screen name="SplashScreen" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
};

export default App