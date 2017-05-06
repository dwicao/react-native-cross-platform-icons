import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CrossPlatformIcon = ({ name, size, color, outline }) => {
  let iconName = Platform.OS === 'android' ? `md-${name}` : `ios-${name}`;
  
  if (Platform.OS === 'ios' && outline) {
    iconName = `${iconName}-outline`;
  }

  return <Icon name={iconName} size={size} color={color} />;
};

module.exports = CrossPlatformIcon;