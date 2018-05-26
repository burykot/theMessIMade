import React, { Component } from 'react'
import VideosItem from './videos-item'

class Videos extends Component {
  videoList(data){
    return data.map((video) => {
      return <VideosItem
        key={video.id}
        video={video} />
    })
  }

  render () {
    return <div className="videoWrapper">
      {this.videoList(this.props.data)}
    </div>
  }
}

export default Videos;
