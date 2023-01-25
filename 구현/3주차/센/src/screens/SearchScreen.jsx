import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LogContext from '../../contexts/LogContext';
import SearchContext from '../../contexts/SearchContext';
import FeedList from '../../components/feed/FeedList';
import EmptySearchResult from '../../components/search/EmptySearchResult';

function SearchScreen({navigation}) {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }
  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default SearchScreen;
