import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ArticleList from './components/ArticleList';
import TopBar from './components/TopBar';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>        
        <View>
          <StatusBar hidden={true} />
        </View>
        <TopBar title="NEWS APP" />
        <ArticleList style={styles.article} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  article: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
