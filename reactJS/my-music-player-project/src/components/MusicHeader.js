import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
let headerImage = require('../images/icon-music-note.png');

class MusicHeader extends React.Component {
  render() {
    return (
        <header style={{opacity: 0}}>
          <img src={headerImage} />
          <h1>Music Player</h1>
        </header>
    );
  }
}

MusicHeader.defaultProps = {
};

export default MusicHeader;
