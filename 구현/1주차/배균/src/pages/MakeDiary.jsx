import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable } from "react-native";
import { color } from "../common";
import Circle from "../components/Circle";
import DateHead from "../components/DateHead";

const MakeDiary = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <DateHead />
        <Text style={styles.text}>리액트 네이티브 1주차</Text>
        <Circle color={color.main} size={100} position={{ bottom: 30, right: 30 }} buttonText="뒤로" onPress={() => navigation.goBack()} />
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
    fontSize: 16,
    color: color.main,
    fontWeight: '600'
  }
});

export default MakeDiary;