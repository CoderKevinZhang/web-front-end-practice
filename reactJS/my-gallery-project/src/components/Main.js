require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

// Get the images data from imagesData.json file
let imagesData = require('../data/imagesData.json');

/* Use self-running function to let imagesData collect every image url*/
let imagesLinks = ((imagesDataArray) => {
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

  getRandomRange(min, max){
    return Math.floor(Math.random()*(max - min) + min);
  }

  /* Add images to the center
   *
   * @param centerIndex the index of the image
   */

  reArrange(centerIndex){
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

    // set the position of center image
    let imgArrayCenter = imgsArrangeArr.splice(centerIndex, 1);
    imgArrayCenter[0].pos = centerPos;

    // set the position of top image
    let topImgNum = Math.floor(Math.random()*2), // either one or no img on the top area
        topImgIndex = Math.floor(Math.random()*(imgsArrangeArr.length - topImgNum)),
        topImgArray = imgsArrangeArr.splice(topImgIndex, topImgNum);

    topImgArray.forEach((value, index) => {
      topImgArray[index].pos = {
        left: this.getRandomRange(vPosRangeX[0], vPosRangeX[1]),
        top: this.getRandomRange(vPosRangeTopY[0], vPosRangeTopY[1])
      }
    });

    // set the position of left & right images
    for(let i=0, j=imgsArrangeArr.length, k=j/2; i<k; i++){
      let areaLeftorRight = [];

      if(i<k){
        areaLeftorRight = hPosRangeLeftScaleX;
      }else{
        areaLeftorRight = hPosRangeRightScaleX;
      }

      imgsArrangeArr[i].pos = {
        left: this.getRandomRange(areaLeftorRight[0], areaLeftorRight[1]),
        top: this.getRandomRange(hPosRangeY[0], hPosRangeY[1])
      }
    }

  }

  //在首次实例化时初始化contans,为每张图片计算其位置范围
  componentDidMount() {

    //获取舞台的大小
    let stageDOM = React.findDOMNode(this.refs.stage),
      stageW=stageDOM.scrollWidth,
      stageH=stageDOM.scrollHeight,
      halfStageW=Math.floor(stageW/2),
      halfStageH=Math.floor(stageH/2);

    //获取imgFigure的大小
    let imgFigDOM = React.findDOMNode(this.refs.image_0),
      imgFigW=imgFigDOM.scrollWidth,
      imgFigH=imgFigDOM.scrollHeight,
      halfImgW=Math.floor(imgFigW/2),
      halfImgH=Math.floor(imgFigH/2);


    //计算中心图片的位置
    this.Contans.centerPos.left=halfStageW-halfImgW;
    this.Contans.centerPos.top=halfStageH-halfImgH;

    //计算左右区域的位置
    this.Contans.hPosRange.leftSecX[0] = -halfImgW;
    this.Contans.hPosRange.leftSecX[1] = halfStageW - halfImgW*3;
    this.Contans.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Contans.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.Contans.hPosRange.y[0] = -halfImgH;
    this.Contans.hPosRange.y[1] = halfStageH - halfImgH;

    //计算上区域的位置
    this.Contans.vPosRange.x[0] = halfStageW - halfImgW;
    this.Contans.vPosRange.x[1] = halfStageW;
    this.Contans.vPosRange.topSecY[0]= -halfImgH;
    this.Contans.vPosRange.topSecY[1]=halfStageH - halfImgH * 3;

    this.reArrange(0);

  }

  render() {

    let imgFigures = [],
        controlUnits = [];

    imagesLinks.forEach((value, index) => {
      if(!this.state.imgsArrangeArr[index]){ // initiate the state of every image
        this.state.imgsArrangeArr[index] = {
          pos: {
            left: 0,
            top: 0
          }
        }
      }

      imgFigures.push(<ImgFigure data={value} ref={'image_'+index}/>)
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
