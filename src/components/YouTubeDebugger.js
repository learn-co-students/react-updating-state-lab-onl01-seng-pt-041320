import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
    this.state= {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateOnClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionOnClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
      video: {
        ...this.state.settings.video,
        resolution: '720p'
        }
      }
    })
  }
  render() {
    return (
      <div>
      <button onClick={this.handleBitrateOnClick} className="bitrate">Change Bitrate</button>
      <p>{this.state.settings.bitrate}</p>
      <button onClick={this.handleResolutionOnClick} className="resolution">Resolution</button>
      <p>{this.state.settings.video.resolution}</p>
      </div>
      )
  }
}

