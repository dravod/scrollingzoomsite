import React from 'react';
import {Component} from 'react';
import posed from 'react-pose';
import StickyScroll from '../StickyScroll'

const FadeBox = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
const Boxy = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 5,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
})

export default class FadeIn extends Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }
  render() { 
    const { isVisible } = this.state;
    var scene =  (
    <div style={{
      display: "flex",
      alignItems:"center",
      justifyContent: "center",
      height:"100vh",
      width:"100vw"
      }}>
      <div style={{
        display: "flex",
        justifyContent:"space-around",
        width:"100vw"

      }}>

     
        <Boxy
          style={{
        width: "100px",
        height: "100px",
        background: "brown"
        }} pose={isVisible ? 'visible' : 'hidden'} />
        
        <FadeBox style={{
        width: "100px",
        height: "100px",
        background: "#ff1c68"
        }} pose={isVisible ? 'visible' : 'hidden'} />
         </div>
    </div>
    )
    
    return (
      <div>
      {StickyScroll({component:scene})}
      </div>
    )}
}