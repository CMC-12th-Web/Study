import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { color } from "../common";
import Circle from "../components/Circle";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <Text style={styles.text}>안녕하세요, 배균입니다~</Text>
        <Circle size={100} position={{right: 30, bottom: 30}} color={color.main} />
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
  text: {
    fontSize: 24,
    color: color.main,
    fontWeight: '600'
  },
});

export default Profile;