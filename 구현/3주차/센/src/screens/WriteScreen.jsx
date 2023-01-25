import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteButton from '../../components/feed/WriteButton';
import WriteEditor from '../../components/feed/WriteEditor';
import WriteHeader from '../../components/feed/WriteHeader';
import {useNavigation} from '@react-navigation/native';
import LogContext from '../../contexts/LogContext';

function WriteScreen({route}) {
  const log = route.params?.log;
  const [name, setName] = useState(log ? log.name : '');
  const [body, setBody] = useState(log ? log.body : '');

  const navigation = useNavigation();

  const {onCreate, onModify, onRemove} = useContext(LogContext);

  const onAskRemove = () => {
    Alert.alert('삭제', '정말로 삭제하시겠어요?', [
      {text: '취소', style: 'cancel'},
      {
        text: '삭제',
        onPress: () => {
          onRemove(log?.id);
          navigation.pop();
        },
        style: 'destructive',
      },
      {
        cancelable: true,
      },
    ]);
  };

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: log.date,
        name: log.name,
        body,
      });
    } else {
      onCreate({
        name,
        body,
        date: new Date().toISOString(),
      });
    }

    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
        />
        <WriteEditor
          name={name}
          onChangeName={setName}
          body={body}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
