import React from 'react';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import { SpaceComponent } from '../components';
import { appColors } from '../contants/appColors';
import { appInfo } from '../contants/appInfo';

const SplashScreen = () => {
  return (
    <ImageBackground
      imageStyle={{flex: 1}}
      source={require('../assets/splash-image.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../assets/logo.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={20} />
      <ActivityIndicator color={appColors.primary} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;
