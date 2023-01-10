import React from "react";
import { SafeAreaView, StyleSheet, View} from "react-native";
import { color } from "../common";
import Button from "../components/Button";
import DateHead from "../components/DateHead";

const Todo = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <DateHead />
        <Button text="할 일" navigation={() => navigation.navigate('MakeTodo')} />
        <Button text="일기" navigation={() => navigation.navigate('MakeDiary')} />
        <View style={styles.circleS} />
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
  circleS: {
    position: 'absolute',
    bottom: 130,
    right: 110,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: color.main
  }
});

export default Todo;