import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
 
const StickyScroll = (props) => (
  <div>
    <Controller >
      <Scene duration={3000} pin={true}>
        
        {props.component}
    
      </Scene>
    </Controller>
  </div>
);
export default StickyScroll;