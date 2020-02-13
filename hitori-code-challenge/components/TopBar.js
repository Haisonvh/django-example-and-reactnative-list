import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      //header with image and title
      <View style={styles.container}>
        <Image
          style={{
            width: 32,
            height: 32,
            alignSelf: 'center',
            marginRight:8,
          }}
          source={require('../assets/icon.gif')}
          
        />

        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>
          {this.props.title || 'TITLE'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#2DB800',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar;
