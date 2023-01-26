import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
const windowWidth = Dimensions.get('window').width;

const StoryItem = () => {
  return (
    <View style={styles.view}>
        <View style={styles.image}>
          <Icon style={styles.heart} name="heart-o" size={24} color="#fff" />
        </View>
        <View style={[styles.star, {justifyContent: 'space-between'}]}>
          <Text style={styles.title}>Title</Text>
          <View style={styles.star}>
            <Icon name="star" size={14} color="#000" />
            <Text style={styles.content}>4.9</Text>
          </View>
        </View>
        <Text style={styles.content}>₩321,771 /박</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  image: {
    width: windowWidth - 40,
    height: 240,
    backgroundColor: '#e2e2e2',
    position: 'relative',
    borderRadius: 10
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 14,
  },
  star: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  heart: {
    position: 'absolute',
    right: 10,
    top: 10
  }
})

export default StoryItem;