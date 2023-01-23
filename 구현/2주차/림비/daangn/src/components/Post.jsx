import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles';

function Post({ data }) {
  console.log(data.title);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image style={style.img} source={{ uri : data.img }}/> */}
    </SafeAreaView>
  )
}

export default Post;