import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ArticleItem from '../components/ArticleItem';
class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      isLoading: false,
      responseCode: '',
      total: 0,
    };
  }

//call API to get data after Mounting
  componentDidMount() {
    this.getArticleDatas();
  }

// call API to get data
  async getArticleDatas() {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=a563e910722c48888110232f95f87bb7'
      );
      const responseJson = await response.json();
      await this.setState({
        total : responseJson.totalResults,
        responseCode : responseJson.status,
        datas: responseJson.articles,
        isLoading: false,
      });
    } catch (error) {
      console.error('_getArticleDatas', error);
        this.setState({        
        responseCode : error,        
        isLoading: false,
      });
    }
  }

//create article item for each data
  renderItem = ({ item }) => {
    const { author, description, title, urlToImage, publishedAt } = item;
    return (
      <ArticleItem
        iconUri={urlToImage}
        title={title}
        author={author}
        date={new Date(publishedAt)}
        description={description}
      />
    );
  };


//using FlatList to render list of artical
  render() {
    const { datas, isLoading } = this.state;
     return (        
        <FlatList
          data={datas}          
          renderItem={this.renderItem}
          refreshing={isLoading}//allow to pull to refesh  
          onRefresh={this.getArticleDatas} 
          maxToRenderPerBatch={10}// each bactch has max 10 item
          initialNumToRender={10} //reder 10 item at first time
        />
      );    
  }  
}

export default ArticleList;
