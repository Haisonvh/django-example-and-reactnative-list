import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

type Props = {
  index: int,
  iconUri: string,
  title: string,
  author: string,
  date: Date,
  description: string,
};

class ArticleItem extends React.Component {
  static propTypes = {
    index: PropTypes.int,
    iconUri: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.Date,
    description: PropTypes.string,
  };
  static defaultProps = {
    iconUri: '',
    title: 'Title',
    author: 'Author',
    date: new Date(),
    description: 'Description',
  };
  render() {
    const { iconUri, title, author, date, description } = this.props;
    //checking if data has imageURL or not. if not using the default image
    if (iconUri == null) {
      return (
        <View style={styles.container}>
          <ImageBackground
            style={{
              alignSelf: 'stretch',
              width: '100%',
              height: 150,
            }}
            source={require('../assets/news_image.gif')}
            resizeMode="cover">
            <View style={styles.overlay}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.credit} numberOfLines={1}>
            by {author} on {date.toLocaleString()}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            style={{
              alignSelf: 'stretch',
              width: '100%',
              height: 150,
            }}
            source={{ uri: this.props.iconUri }}
            resizeMode="cover">
            <View style={styles.overlay}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.credit} numberOfLines={1}>
            by {author} on {date.toLocaleString()}
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 8,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'rgba(235,59,129,.50)',
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    padding: 8,
  },
  credit: {
    color: '#EB3B81',
    fontSize: 11,
    textAlign: 'right',
    paddingRight: 8,
    paddingBottom: 8,
  },
});

export default ArticleItem;
