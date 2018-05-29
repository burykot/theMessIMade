import React, { Component } from 'react'

class PostsItem extends Component {
  render () {
    return <div className="post">
      <img className="post-image" src={this.props.post.image} alt=""/>
      <div class="postDescriptionWrapper">
        <h2>{this.props.post.title}</h2>
        <p className="post-description">{this.props.post.shortdesc}</p>
        <span className="post-date">{this.props.post.date.slice(0, 10)}</span><a href={this.props.post.url} className="readmore">read more ></a>
      </div>
    </div>
  }
}

export default PostsItem;
