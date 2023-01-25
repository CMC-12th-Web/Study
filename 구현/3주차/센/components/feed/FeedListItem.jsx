import React from 'react';
import {Pressable, Platform, Text, StyleSheet, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import {useNavigation} from '@react-navigation/native';
import textTruncate from './textTruncate';
import formatDate from './formatDate';

function FeedListItem({log}) {
  const {name, body, date} = log; 

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Write', {
      log,
    });
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={onPress}>
      <View style={styles.wrapper}>
        <UserAvatar size={50} name="SEIN HYUN" bgColors={['#ccc']} />
        <View style={styles.wrapper2}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{formatDate(date)}</Text>
        </View>
      </View>
      <Text style={styles.body}>{textTruncate(body)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper2: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  date: {
    paddingVertical: 3,
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  body: {
    paddingHorizontal: 10,
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default FeedListItem;
