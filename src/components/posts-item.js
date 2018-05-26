import React, { Component } from 'react'

class PostsItem extends Component {
  render () {
    return <div className="post">
      <img className="post-image" src={this.props.post.image} alt=""/>
      <h2>{this.props.post.title}</h2>
      <span className="post-date">{this.props.post.date.slice(0, 10)}</span>
      <p className="post-description">{this.props.post.shortdesc}</p>
      <a href={this.props.post.url} className="readmore">read more ></a>
    </div>
  }
}

export default PostsItem;
