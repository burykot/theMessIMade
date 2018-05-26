import React, { Component } from 'react'

class VideosItem extends Component {
  render () {
    return <div className="video">
      <iframe
        src={'https://www.youtube.com/embed/' + this.props.video.id}
        title={this.props.video.id}
        frameBorder="0">
      </iframe>
      <h2 className="video-title">{this.props.video.title}</h2>
      <span className="video-description">{this.props.video.date}</span>
    </div>
  }
}

export default VideosItem;
