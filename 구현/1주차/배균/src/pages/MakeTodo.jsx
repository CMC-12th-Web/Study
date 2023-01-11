import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { color } from "../common";
import Circle from "../components/Circle";
import DateHead from "../components/DateHead";

const MakeTodo = () => {
  const [todo, setTodo] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [text, setText] = useState('')

  const addClick = () => {
    setIsShow(true)
  }

  const submitClick = () => {
    setTodo(ele => ele.concat(text))
    setIsShow(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <DateHead />
        {todo.length ? todo.map((ele, idx) => <View key={idx} style={styles.list}>
          <Text style={[styles.text, {fontWeight: 'normal'}]}>{ele}</Text>
        </View>) : <Text style={styles.text}>오늘 할일이 없습니다.</Text>}
        {isShow && <TextInput onChangeText={setText} onSubmitEditing={submitClick} style={styles.textInput} returnKeyType='done' placeholder="할일을 입력해주세요" />}
        <Circle color={color.sub} size={100} position={{ bottom: 30, right: 30 }} buttonText="추가" onPress={addClick} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    backgroundColor: color.sub,
    borderRadius: 20,
    marginTop: 20
  },
  textInput: {
    padding: 20,
    backgroundColor: color.main,
    opacity: 0.7,
    color: color.backGround,
    borderRadius: 20,
    marginTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: color.backGround
  },
  padding: {
    flex: 1,
    padding: 30
  },
  text: {
    color: color.main,
    fontWeight: '600',
    fontSize: 16
  }
});

export default MakeTodo;