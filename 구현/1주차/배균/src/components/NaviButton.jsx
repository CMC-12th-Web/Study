import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { color } from "../common";

const NaviButton = ({text, navigateTo}) => {
  return (
    <Pressable style={styles.block} onPress={navigateTo}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: color.sub,
    borderRadius: 15,
    marginTop: 12
  },
  text: {
    fontSize: 16,
    color: color.main,
    padding: 19,
    fontWeight: '600'
  },
});

export default NaviButton;