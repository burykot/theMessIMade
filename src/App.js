import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Posts from './components/posts'
import Videos from './components/videos'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Posts />
        <Videos />
        <Footer />
      </div>
    );
  }
}

export default App;
