import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { appColors } from '../../contants/appColors';
import { appInfo } from '../../contants/appInfo';
import { globalStyle } from '../../styles/globleStyle';

const OnboardingScreen = ({navigation}: any) => {

    const [index, setIndex] = useState(0)

  return (
    <View style={[globalStyle.container]}>
      <Swiper
        index={index}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        activeDotColor={appColors.white}>
        <Image
          source={require('../../assets/Onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/Onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/Onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
      </Swiper>
      <View
        style={[styles.navigate]}>
        <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
          <Text style={[styles.label]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>index < 2 ?  setIndex(index + 1) : navigation.navigate('LoginScreen')}>
          <Text style={[styles.label]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
    navigate:{
    paddingHorizontal: 16,
    paddingVertical:25,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    label:{
        color: appColors.white
    }
})