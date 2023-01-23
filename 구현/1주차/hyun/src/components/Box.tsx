import React from 'react';
import {ColorValue, View} from 'react-native';

interface Props {
  rounded?: boolean;
  size: 'small' | 'medium' | 'large';
  color: ColorValue;
}

const Box = ({rounded, size, color}: Props) => {
  const boxSize = {
    small: {width: 40, height: 40},
    medium: {width: 80, height: 80},
    large: {width: 120, height: 120},
  }[size];
  const borderRadius = rounded ? 8 : 0;

  return <View style={[boxSize, {backgroundColor: color, borderRadius}]} />;
};

export default Box;
