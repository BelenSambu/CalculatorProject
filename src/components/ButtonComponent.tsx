import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  label: string;
  color?: string;
  width?: boolean;
  action: (number: string) => void;
}

export const ButtonComponent = ({
  label,
  color = '#2D2D2D',
  width = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => action(label)}
    >
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.btnText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
