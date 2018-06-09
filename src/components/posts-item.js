import React, { Component } from 'react'

class PostsItem extends Component {
  postImageStyle(a) {
    return {'background-image': 'url(' + a.image + ')'}
  }
  render () {
    return <div className="post">
      <a href={this.props.post.url}>
        <div className="post-image" style={this.postImageStyle(this.props.post)}>
        </div>
      <div class="postDescriptionWrapper">
        <h2>{this.props.post.title}</h2>
        <p className="post-description">{this.props.post.shortdesc}</p>
        {/* <span className="post-date">{this.props.post.date.slice(0, 10)}</span><a href={this.props.post.url} className="readmore">read more ></a>*/}
      </div>
      </a>
    </div>
  }
}

export default PostsItem;
