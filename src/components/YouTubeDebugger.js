// Code YouTubeDebugger Component Here
import React from 'react';
 
export default class YouTubeDebugger extends React.Component {
    constructor() {
        super();
     
        // Define the initial state:
    this.state = {
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
      handleBitClick = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          });

      }

      handleResolutionClick = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                resolution: '720p'
              }
            }
          });
      }


      render() {
        return (
          <div>
          <button onClick={this.handleBitClick} className='bitrate' />
          <button onClick={this.handleResolutionClick} className='resolution' />
          </div>
        )
    }

}