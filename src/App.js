import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Posts from './components/posts'
import Videos from './components/videos'
import Footer from './components/footer'

import ArticleData from './data/articles'
import VideoData from './data/videos'

class App extends Component {
  featuredArticles(data, feat){
    return data.filter(el => el.featured === feat)
  }

  render() {
    return (
      <div className="App">
        <div className="bodywrapper">
          <Header />
          <Posts data={this.featuredArticles(ArticleData, 1)}/>
          <Videos data={VideoData} quantity="3" />
          <Posts data={this.featuredArticles(ArticleData, 0)} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
