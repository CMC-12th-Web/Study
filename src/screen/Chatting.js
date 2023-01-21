import React, {useState} from 'react';
import {StyleSheet, Dimensions, View, Text, Image, TextInput, Button, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ChattingData } from '../static/ChattingData';

const appWidth = Dimensions.get('window').width;

const Chatting = () => {
  const [chatting, setChatting] = useState("");

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.box}>
            {ChattingData.map((data, idx)=>{
              return (
                <View 
                  key={idx}
                  style={
                    data.nickname === "yeju"? 
                      styles.chatting1: 
                      styles.chatting2
                  }
                  >
                  {data.nickname !== "yeju"&&
                    <Image source={require("../assets/test.png")} style={styles.img} />
                  }
                  <Text               
                    style={[
                        styles.chatting
                      ,{
                        backgroundColor: (
                          data.nickname === "yeju"? 
                          "skyblue":
                          "#D6D8D9"
                        )
                      }
                    ]}
                    >
                    {data.chatting}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={chatting}
            onChangeText={(text) => {
              setChatting(text);
            }}
          />
          <Button 
            title="보내기" 
            onPress={()=>{
              // setLogin(signInWithKakao)
            }} 
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    // flex: 1,
    height: '90%',
    flexDirection: 'column',
  },

  chatting1: {
    margin: 7,
    flexDirection: 'row',
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  chatting2: {
    margin: 7,
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'flex-start',
  },

  img: {
    width: 40,
    height: 40,

    borderRadius: 50,
  },
  chatting: {
    marginLeft: 7,
    padding: 10,
    borderRadius: 7,
  },

  inputBox: {
    padding: 10,
    flexDirection: 'row',

    position: 'absolute',
    bottom: 0,

    backgroundColor: 'white',
  },
  input: {
    width: "84%",
    marginRight: 7,

    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    height: 35,
  },
});

export default Chatting;
