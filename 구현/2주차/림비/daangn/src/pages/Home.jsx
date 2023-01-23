import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Post from '../components/Post';
import { postData } from '../data/post';

function Home({navigation}) {
  return (
    <SafeAreaView>
      {
        postData.map((post, idx) => (
          <TouchableOpacity key={idx} style={style.postWrap} onPress={() => navigation.navigate('Detail', {data: post})}>
            <Image style={style.img} source={{ uri: post.img[0] }} />
            <View style={style.info}>
              <Text style={style.title}>{post.title}</Text>
              <Text style={style.price}>{Intl.NumberFormat('ko').format(post.price)}원</Text>
            </View>
          </TouchableOpacity>
        ))
      }
    </SafeAreaView>
  )
}

export default Home;

const style = StyleSheet.create({
  postWrap: {
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 10
  },
  info: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: 15,
    marginBottom: 8,
    marginTop: 5,
    color: '#000000'
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000'
  }
})