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

  onProgressChange() {

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
      </div>
    );
  }
}

MusicPlayer.defaultProps = {
  barColor: '#d81e06',
  barWidth: 600
};

export default MusicPlayer;
