import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FeedList from '../../components/feed/FeedList';
import WriteButton from '../../components/feed/WriteButton';
import LogContext from '../../contexts/LogContext';

function FeedScreen(props) {
  const {logs} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <WriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default FeedScreen;
