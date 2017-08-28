require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import MusicHeader from './MusicHeader';
import MusicPlayer from './MusicPlayer';

let musicData = require('../sources/data/music.json');

class AppComponent extends React.Component {

  componentDidMount(){
    $('#play').jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia',{
          mp3: '../sources/mp3/' + musicData[0].url
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
  }

  render() {
    return (
      <div>
        <MusicHeader/>
        <MusicPlayer/>
      </div>
    )
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
