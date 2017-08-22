require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

// Get the images data from imagesData.json file
let imagesData = require('../data/imagesData.json');

/* Use self-running function to let imagesData collect every image url*/
let imagesLinks = (function (imagesDataArray) {
  for(let i=0, j=imagesDataArray.length; i<j; i++){
    let singleImageData = imagesDataArray[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imagesDataArray[i] = singleImageData;
  }

  return imagesDataArray;
})(imagesData);

class ImgFigure extends React.Component{
  render(){
    return (
      <figure className="figure-layout">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

class AppComponent extends React.Component {
  render() {

    let imgFigures = [],
        controlUnits = [];

    imagesLinks.forEach(function (value) {
      imgFigures.push(<ImgFigure data={value}/>)
    });

    return (
      <section className="stage">
        <section className="image-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controlUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
