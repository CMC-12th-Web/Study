import {StyleSheet} from 'react-native';

const styles = props =>
  StyleSheet.create({
    box: {
      borderRadius: props.rounded ? 10 : 0,
      width: props.size === 'large' ? 96 : props.size === 'medium' ? 48 : 24,
      height: props.size === 'large' ? 96 : props.size === 'medium' ? 48 : 24,
      backgroundColor: props.color,
    },
  });

export default styles;
