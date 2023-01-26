import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
const windowWidth = Dimensions.get('window').width;

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <View style={styles.view}>
      <TextInput value={search} onChangeText={t => setSearch(t)} style={styles.input} placeholder="검색어 입력" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    width: windowWidth - 40,
    height: 60,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20
  }
})

export default Search;