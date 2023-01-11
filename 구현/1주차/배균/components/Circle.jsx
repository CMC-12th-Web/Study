import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { color as theme } from "../common";

//* 필수 props : color, size

//* Pressable로 사용되는 경우
//* 필수 props : buttonText, onPress
//* 선택 props : focused, position

//* View로 사용되는 경우
//* 필수 props : position
//* 선택 props : x
const Circle = (props) => {
  const {buttonText, size, color, position, focused, onPress} = props
  const [style, setStyle] = useState({ borderRadius: 100 })

  useEffect(() => {
    setStyle(ele => ({ ...ele, backgroundColor: color, width: size, height: size }))
    if (position) setStyle(ele => ({ ...ele, position: 'absolute', right: position.right, bottom: position.bottom }))
    if (focused) setStyle(ele => ({ ...ele, backgroundColor: focused }))
    if (buttonText) setStyle(ele => ({ ...ele, justifyContent: 'center', alignItems: 'center' }))
  }, [props.focused])

  
  return (
    <>
      {buttonText ? <Pressable onPress={onPress} style={style}>
        <Text style={[styles.text, color !== theme.main && {color: theme.main}]}>{buttonText}</Text>
      </Pressable> : <View style={style} />}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: theme.sub,
    fontWeight: '600'
  }
})

export default Circle;