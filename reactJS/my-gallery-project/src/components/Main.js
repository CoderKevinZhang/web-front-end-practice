require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom'; // It's important to add this line in order to use ReactDOM.findDOMNode

// let yeomanImage = require('../images/yeoman.png');

// Get the images data from imagesData.json file
let imagesData = require('../data/imagesData.json');

/* Use self-running function to let imagesData collect every image url*/
let imagesLinks = ((imagesDataArray) => {
  for (let i = 0, j = imagesDataArray.length; i < j; i++) {
    let singleImageData = imagesDataArray[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imagesDataArray[i] = singleImageData;
  }

  return imagesDataArray;
})(imagesData);

class ImgFigure extends React.Component {
  render() {

    let styleObject = {};

    if (this.props.arrange.pos) {
      styleObject = this.props.arrange.pos;
    }

    if(this.props.arrange.rotate){

      let degree = this.props.arrange.rotate;

      (['WebkitT', 'MozT', 'msT', 'OT', 't']).forEach((value) => {
        styleObject[value + 'ransform'] = 'rotate(' + degree +'deg)';
      })
    }

    return (
      <figure className="figure-layout" style={styleObject}>
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.Contans = {
      centerPos: {// center point value
        left: 0,
        top: 0
      },
      hPosRange: {// values of right and left parts
        leftSecX: [0, 0],
        rightSecX: [0, 0],
        y: [0, 0]
      },
      vPosRange: {// values of top part
        x: [0, 0],
        topSecY: [0, 0]
      }
    };

    this.state = {
      imgsArrangeArr: []
    }
  }

  /* Get random range from >=min & <(max - min)
   *
   * @param min: minimum limit, max: maximum limit
   */

  getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /* Get random rotation degree from -deg to deg
   *
   * @param deg: degree of rotation
   */

  getRandomDegree(deg){
    return (Math.random() > 0.5 ? '' : '-') + Math.floor(Math.random() * deg);
  }

  /* Add images to the center
   *
   * @param centerIndex: the index of the image
   */

  reArrange(centerIndex) {
    let imgsArrangeArr = this.state.imgsArrangeArr,
      Constans = this.Contans,
      centerPos = Constans.centerPos,
      hPosRange = Constans.hPosRange,
      vPosRange = Constans.vPosRange,
      hPosRangeLeftScaleX = hPosRange.leftSecX,
      hPosRangeRightScaleX = hPosRange.rightSecX,
      hPosRangeY = hPosRange.y,
      vPosRangeX = vPosRange.x,
      vPosRangeTopY = vPosRange.topSecY;

    // set the position of center image & rotation degree is not required
    let imgArrayCenter = imgsArrangeArr.splice(centerIndex, 1);
    imgArrayCenter[0].pos = centerPos;

    // set the position of top image & rotation degree is required
    let topImgNum = Math.floor(Math.random() * 2), // either one or no img on the top area
      topImgIndex = Math.floor(Math.random() * (imgsArrangeArr.length - topImgNum)),
      topImgArray = imgsArrangeArr.splice(topImgIndex, topImgNum);

    topImgArray.forEach((value, index) => {
      topImgArray[index].pos = {
        left: this.getRandomRange(vPosRangeX[0], vPosRangeX[1]),
        top: this.getRandomRange(vPosRangeTopY[0], vPosRangeTopY[1])
      };

      topImgArray[index].rotate = this.getRandomDegree(30);
    });

    // set the position of left & right images & rotation degree is required
    for (let i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
      let areaLeftorRight = [];

      if (i < k) {
        areaLeftorRight = hPosRangeLeftScaleX;
      } else {
        areaLeftorRight = hPosRangeRightScaleX;
      }

      imgsArrangeArr[i].pos = {
        left: this.getRandomRange(areaLeftorRight[0], areaLeftorRight[1]),
        top: this.getRandomRange(hPosRangeY[0], hPosRangeY[1])
      };

      imgsArrangeArr[i].rotate = this.getRandomDegree(30);
    }

    // put topImgArray and imgArrayCenter into imgsArrangeArr
    if (topImgArray && topImgArray[0]) {
      imgsArrangeArr.splice(topImgIndex, 0, topImgArray[0]);
    }
    imgsArrangeArr.splice(centerIndex, 0, imgArrayCenter[0]);

    // update the state of the component
    this.setState({
      imgsArrangeArr: imgsArrangeArr
    });

  }

  //在首次实例化时初始化contans,为每张图片计算其位置范围
  componentDidMount() {

    //获取舞台的大小
    let stageDOM = ReactDOM.findDOMNode(this.refs.stage),
      stageW = stageDOM.scrollWidth,
      stageH = stageDOM.scrollHeight,
      halfStageW = Math.floor(stageW / 2),
      halfStageH = Math.floor(stageH / 2);

    //获取imgFigure的大小
    let imgFigDOM = ReactDOM.findDOMNode(this.refs.image_0),
      imgFigW = imgFigDOM.scrollWidth,
      imgFigH = imgFigDOM.scrollHeight,
      halfImgW = Math.floor(imgFigW / 2),
      halfImgH = Math.floor(imgFigH / 2);


    //计算中心图片的位置
    this.Contans.centerPos.left = halfStageW - halfImgW;
    this.Contans.centerPos.top = halfStageH - halfImgH;

    //计算左右区域的位置
    this.Contans.hPosRange.leftSecX[0] = -halfImgW;
    this.Contans.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
    this.Contans.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Contans.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.Contans.hPosRange.y[0] = -halfImgH;
    this.Contans.hPosRange.y[1] = stageH - halfImgH;

    //计算上区域的位置
    this.Contans.vPosRange.x[0] = halfStageW - halfImgW;
    this.Contans.vPosRange.x[1] = halfStageW;
    this.Contans.vPosRange.topSecY[0] = -halfImgH;
    this.Contans.vPosRange.topSecY[1] = halfStageH - halfImgH * 3;

    this.reArrange(0);

  }

  render() {

    let imgFigures = [],
      controlUnits = [];

    imagesLinks.forEach((value, index) => {
      if (!this.state.imgsArrangeArr[index]) { // initiate the state of every image
        this.state.imgsArrangeArr[index] = {
          pos: { // initial position of images
            left: 0,
            top: 0
          },
          rotate: 0 // initial rotation degree of images
        }
      }

      imgFigures.push(<ImgFigure data={value} key={index} ref={'image_' + index}
                                 arrange={this.state.imgsArrangeArr[index]}/>)
    });

    return (
      <section className="stage" ref="stage">
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

AppComponent.defaultProps = {};

export default AppComponent;
