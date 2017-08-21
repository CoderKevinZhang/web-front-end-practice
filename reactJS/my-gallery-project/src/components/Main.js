require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

// Get the images data from imagesData.json file
let imagesData = require('../data/imagesData.json');

/* Use self-running function to let imagesData collect every image url*/
imagesData = (function (imagesDataArray) {
  for(let i=0, j=imagesDataArray.length; i<j; i++){
    let singleImageData = imagesDataArray[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imagesDataArray[i] = singleImageData;
  }

  return imagesDataArray;
})(imagesData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="image-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
