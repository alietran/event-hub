import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import AuthNavigator from './src/navigtors/AuthNavigator';
import MainNavigator from './src/navigtors/MainNavigator';
import { SplashScreen } from './src/screens';

const App = () => {
  const [isShowSlash, setIsShowSlash] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const {getItem, setItem} = useAsyncStorage('accessToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSlash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getItem();
    token && setAccessToken(token)
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {isShowSlash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {accessToken ? <MainNavigator />  : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
