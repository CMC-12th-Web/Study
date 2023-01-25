import { View, Text, SafeAreaView, Image, StyleSheet, Pressable, Button, FlatList, Dimensions, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';

function Detail({ navigation: { navigate }, route }) {
  const data = route.params.data;
  const imgData = data.img;
  const imgLength = Dimensions.get('window').width;

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <FlatList
          data={imgData}
          horizontal
          renderItem={({ item }) => (
            <Image style={imgStyle(imgLength).img} source={{ uri: item }} key={item} />
          )}
        />
        <View style={style.userInfo}>
          <Pressable><Icon name='person-circle-outline' size={30} color='gray' /></Pressable>
          <Text style={style.user}>{data.user}</Text>
        </View>
        <View style={style.contentInfo}>
          <Text style={style.title}>{data.title}</Text>
          <Text>{data.content}</Text>
        </View>
        <View style={style.bottomTab}>
            <Icon name='heart-outline' size={25} />
            <Text style={style.price}>{Intl.NumberFormat('ko').format(data.price)}원</Text>
          <Pressable style={style.joinBtn}><Text style={style.btnText}>참여하기</Text></Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Detail;

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    paddingVertical: 8
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 8,
    color: '#000000'
  },
  contentInfo: {
    paddingLeft: 8,
    paddingBottom: 40
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#000000'
  },
  bottomTab: {
    position: Platform.select({ ios: 'absolute' }),
    bottom: 0,
    left: Platform.select({ ios: 0 }),
    right: Platform.select({ ios: 0 }),
    bottom: Platform.select({ ios: -170 }),
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 70,
    paddingLeft: 10,
    alignItems: 'center',
    width: '100%'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 16
  },
  joinBtn: {
    borderWidth: 1,
    borderColor: '#e78111',
    backgroundColor: '#e78111',
    padding: 10,
    borderRadius: 6,
    position: 'absolute',
    right: 30,
    top: 16
  },
  btnText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 16
  }
});

const imgStyle = (imgLength) => StyleSheet.create({
  img: {
    width: imgLength,
    height: imgLength
  }
});