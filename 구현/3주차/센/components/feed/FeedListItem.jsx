import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import React from 'react';
import {Pressable, Platform, Text, StyleSheet, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import {useNavigation} from '@react-navigation/native';

// 정규식을 사용해 모든 줄 바꿈 문자 제거
function truncate(text) {
  const replaced = text.replace(/\n/g, '');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
}

function formatDate(date) {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, {addSuffix: true, locale: ko});
  }
  return format(d, 'PPP EEE p', {locale: ko});
}

function FeedListItem({log}) {
  const {name, title, body, date} = log; 

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
      <Text style={styles.body}>{truncate(body)}</Text>
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
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
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
