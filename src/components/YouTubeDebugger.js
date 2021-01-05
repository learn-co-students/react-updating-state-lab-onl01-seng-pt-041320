import React from 'react' 

class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleClick = () => { 
    this.setState({
      settings: {
      ...this.state.settings, 
        bitrate: 12
      }
    });
  
  };

  handleResClick = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      video:{
        ...this.state.settings.video,
        resolution: '720p'
      }
    }
  });
  }

  render() {
    return (
      <div>
          <button onClick={this.handleClick} className='bitrate'>
           Bitrate mess-a-round
          </button>
  
          <button onClick={this.handleResClick} className="resolution">
            Resolution Shift
          </button>
      </div>
    );
  }
}
export default YouTubeDebugger
