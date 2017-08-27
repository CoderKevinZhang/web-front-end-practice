import React from 'react';

class MusicPlayer extends React.Component {

  render() {
    return (
      <div className="music-player">
        <div className="progress-bar">
          <div className="progress" style={{width: `${this.props.progress}%`}}></div>
        </div>
        <div className="progress-dot"></div>
        <div id="play"></div>
      </div>
    );
  }
}

MusicPlayer.defaultProps = {

};

export default MusicPlayer;
