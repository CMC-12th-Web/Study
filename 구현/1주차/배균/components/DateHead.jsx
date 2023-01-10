import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { color } from "../common";
const DateHead = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <View style={styles.margin}>
      <Text style={styles.dateText}>{year}년 {month}월 {day}일</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: 20
  },
  dateText: {
    fontSize: 24,
    color: color.main,
    fontWeight: '600'
  },
});

export default DateHead;