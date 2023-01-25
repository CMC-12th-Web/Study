import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CircleButton from '../common/CircleButton';

function WriteHeader({onSave, isEditing, onAskRemove}) {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <CircleButton onPress={onGoBack} name="arrow-back" color="#424242" />
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <CircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onAskRemove}
          />
        )}
        <CircleButton name="check" color="#009688" onPress={onSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WriteHeader;
