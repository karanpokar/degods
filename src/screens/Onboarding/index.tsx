import { View, Text } from 'react-native'
import React from 'react'
import { typography } from '../../utils/theme'

const SplashScreen = () => {
  return (
    <View>
      <Text style={{fontFamily:typography.Bold}}>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen