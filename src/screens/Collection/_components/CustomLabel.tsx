import { View, Text } from 'react-native'
import React from 'react'
import { colors, typography } from '../../../utils/theme';

const CustomTabBarLabel = ({label}:any) => (
    <Text style={{ fontFamily: typography.Medium, fontSize: 16,color:colors.primaryFont }}>
      {label}
    </Text>
  );

export default CustomTabBarLabel