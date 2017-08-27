import React from 'react';

class MusicPlayer extends React.Component {

  constructor(props){
    super(props);

    this.changeProgress = this.changeProgress.bind(this);
  }

  changeProgress(e){
    let progressBar = this.refs.progressBar,
      progress_bar_left = progressBar.offsetLeft,
      realProgress = (e.clientX - progress_bar_left) / progressBar.clientWidth;

    this.props.onProgressChange(realProgress);
  }

  render() {
    let leftDistance = this.props.progress * 6 + 88;
    return (
      <div className="music-player">
        <div className="progress-bar" onClick={this.changeProgress} ref="progressBar">
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
