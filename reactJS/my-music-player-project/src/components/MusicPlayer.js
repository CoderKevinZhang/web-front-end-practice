import React from 'react';

class MusicPlayer extends React.Component {

  render() {

    // this.props.progress is a percentage value
    let leftDistance = this.props.progress * 6 + 88;

    return (
      <div className="music-player">
        <div className="progress-bar">
          <div className="progress" style={{width: `${this.props.progress}%`}}></div>
        </div>
        <div className="progress-dot" style={{left: `${leftDistance}px`}}></div>
        <div id="play"></div>
      </div>
    );
  }
}

MusicPlayer.defaultProps = {

};

export default MusicPlayer;
