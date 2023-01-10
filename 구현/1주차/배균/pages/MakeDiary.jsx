import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable } from "react-native";
import { color } from "../common";
import DateHead from "../components/DateHead";

const MakeDiary = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.padding}>
          <DateHead />
          <Text style={styles.text}>리액트 네이티브 1주차</Text>
          <Pressable onPress={() => navigation.goBack()} style={styles.circle}>
            <Text style={styles.btnText}>뒤로</Text>
          </Pressable>
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
    backgroundColor: color.main,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: color.main,
    fontWeight: '600'
  },
  btnText: {
    fontSize: 16,
    color: color.sub,
    fontWeight: '600'
  }
});

export default MakeDiary;