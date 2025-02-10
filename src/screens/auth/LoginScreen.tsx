import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="login" onPress={async () => await AsyncStorage.setItem('accessToken','absd')} />
    </View>
  )
}

export default Login