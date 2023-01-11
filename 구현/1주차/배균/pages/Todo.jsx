import React from "react";
import { SafeAreaView, StyleSheet, View} from "react-native";
import { color } from "../common";
import NaviButton from "../components/NaviButton";
import DateHead from "../components/DateHead";
import Circle from '../components/Circle'

const Todo = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <DateHead />
        <NaviButton text="할 일" navigateTo={() => navigation.navigate('MakeTodo')} />
        <NaviButton text="일기" navigateTo={() => navigation.navigate('MakeDiary')} />
        <Circle position={{ bottom: 130, right: 110 }} size={40} color={color.main} />
        <Circle position={{ bottom: 30, right: 30 }} size={100} color={color.sub} />
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
  }
});

export default Todo;