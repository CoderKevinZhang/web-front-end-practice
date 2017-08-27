require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import MusicHeader from './MusicHeader';
import MusicPlayer from './MusicPlayer';

class AppComponent extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      progress: '-'
    }
  }

  componentDidMount(){
    $('#play').jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia',{
          mp3: '../sources/mp3/myfriend.mp3'
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });

    $('#play').bind($.jPlayer.event.timeupdate, (e) => {
      this.setState({
        progress: e.jPlayer.status.currentPercentAbsolute
      });
    });
  }

  componentWillUnmount(){
    $('#play').unbind($.jPlayer.event.timeupdate);
  }

  render() {
    return (
      <div>
        <MusicHeader/>
        <MusicPlayer progress={this.state.progress}/>
      </div>
    )
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
