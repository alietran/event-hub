import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigtors/AuthNavigator';
import { SplashScreen } from './src/screens';

const App = () => {

const [isShowSlash, setIsShowSlash] = useState(true);

useEffect(()=>{
  const timeout = setTimeout(() => {
    setIsShowSlash(false)
  }, 1500);

  return ()=> clearTimeout(timeout)
},[])

  return isShowSlash ? <SplashScreen /> : <NavigationContainer>
    <AuthNavigator/>
  </NavigationContainer>
}

export default App