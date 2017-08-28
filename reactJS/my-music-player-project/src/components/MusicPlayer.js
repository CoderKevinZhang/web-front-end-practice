import React from 'react';

// set duration of current music
let duration = '-';

class MusicPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: '-'
    };

    this.changeProgress = this.changeProgress.bind(this);
  }

  componentDidMount() {
    $('#play').bind($.jPlayer.event.timeupdate, (e) => {
      duration = e.jPlayer.status.duration;
      this.setState({
        progress: e.jPlayer.status.currentPercentAbsolute
      });
    });
  }

  componentWillUnmount() {
    $('#play').unbind($.jPlayer.event.timeupdate);
  }

  changeProgress(e) {
    let progressBar = this.refs.progressBar,
      realProgress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;

    $('#play').jPlayer('play', duration * realProgress);
  }

  render() {
    let dotLeft = this.state.progress * this.props.barWidth / 100 + 88;
    return (
      <div className="music-player">

        {/* Widget: Music Player Progress Bar --start */}
        <div className="progress-bar" onClick={this.changeProgress} ref="progressBar"
             style={{width: `${this.props.barWidth}px`, left: `${this.props.barLeft}px`}}>
          <div className="progress" style={{width: `${this.state.progress}%`, background: this.props.barColor}}></div>
        </div>
        <div className="progress-dot" style={{left: `${dotLeft}px`}}></div>
        <div id="play"></div>
        {/* Widget: Music Player Progress Bar --end */}

        {/*Widget: Music Player Play Widgets --start*/}
        <div className="player-widgets">
          <a href="#" className="step-backward"><i className="fa fa-step-backward fa-2x" aria-hidden="true"></i></a>
          <a href="#" className="play"><i className="fa fa-play fa-2x" aria-hidden="true"></i></a>
          <a href="#" className="step-forward"><i className="fa fa-step-forward fa-2x" aria-hidden="true"></i></a>
          <a href="#" className="pause"><i className="fa fa-pause fa-2x" aria-hidden="true"></i></a>
          <a href="#" className="random"><i className="fa fa-random fa-2x" aria-hidden="true"></i></a>
          <a href="#" className="repeat"><img src="../images/repeat.png"/></a>
          <a href="#" className="repeat-one"><img src="../images/repeat-one.png"/></a>
        </div>
        {/*Widget: Music Player Play Widgets --end*/}

      </div>
    );
  }
}

MusicPlayer.defaultProps = {
  barColor: '#d81e06',
  barWidth: 600
};

export default MusicPlayer;
