import React from 'react';
import {Component} from 'react';
import posed from 'react-pose';

const ClickBox = posed.div({
    pressable: true,
    init: { scale: 1 },
    transition: { duration: 1000 },
    press: {
      transition: { duration: 1000 }, scale: 10, color: '#f00'}
  });
const DragBox = posed.div({
draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 },
  dragEnd: { scale: 0.5 }
  });

const Label = posed.span({
    init: { color: '#000' },
    onPress: { color: '#f00' }
});


export default class ClickAndDragBoxes extends Component {
  state = { isVisible: true };

  render() { 
    const { isVisible } = this.state;
    return (
    
      <div style={{
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        height:"100vh",
        width:"100vw"
        }}>
        <div style={{
          display: "flex",
          justifyContent:"center",
          width:"100vw"

        }}>

       
          <ClickBox
            style={{
          width: "100px",
          height: "100px",
          background: "blue",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
          }}>
              <label>ClickBox</label>
        </ClickBox>
          
          <DragBox style={{
          width: "100px",
          height: "100px",
          background: "green"
          }}/>
           </div>
      </div>
    )}
}