import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { color } from "../common";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <Text style={styles.text}>안녕하세요, 배균입니다~</Text>
        <View style={styles.circle} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backGround
  },
  padding: {
    flex: 1,
    padding: 30
  },
  circle: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: color.sub
  },
  text: {
    fontSize: 24,
    color: color.main,
    fontWeight: '600'
  },
});

export default Profile;