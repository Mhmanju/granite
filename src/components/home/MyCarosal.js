import { Avatar } from "@material-ui/core";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
  },
  slide: {
   // padding: 15,
    height: 260,
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

class DemoAutoPlay extends React.Component {
  state = {
    index: 0
  };

  handleChangeIndex = (index) => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;
    const { className,image1,image2,image3 } = this.props;
    return (
      <div style={styles.root} className={className}>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
        >
          <div style={styles.slide}>
            <Avatar src={image1} variant='square' style={{height:'100%',width:'100%',objectFit:'contain'}}/>
            </div>
            <div style={styles.slide}>
            <Avatar src={image2} variant='square' style={{height:'100%',width:'100%',objectFit:'cover'}}/>
            </div>
            <div style={styles.slide}>
            <Avatar src={image3} variant='square' style={{height:'100%',width:'100%',objectFit:'contain'}}/>
            </div>
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

export default DemoAutoPlay;
