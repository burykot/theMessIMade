import React, { Component } from 'react'

class VideosItem extends Component {
  render () {
    return <div className="video" id={this.props.video.id} onClick={this.props.videoIdHandler}>
      <img src={'https://img.youtube.com/vi/' + this.props.video.id + '/hqdefault.jpg'} alt={'Video: ' + this.props.video.title} />
      <h2 className="video-title">{this.props.video.title}</h2>
      <span className="video-description">{this.props.video.date}</span>
    </div>
  }
}

export default VideosItem;
