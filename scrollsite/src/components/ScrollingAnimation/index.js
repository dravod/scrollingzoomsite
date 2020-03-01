import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import AnimationImage1 from '../../assets/images/Image1.png'
import AnimationImage2 from "../../assets/images/Image2.png"

import "./index.css";


const Sticky2 = () => (
    <div>
      <div/>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration={1000}
          pin
        >
          {(progress) => (
            <div className="sticky">
              <Timeline totalProgress={progress} paused>
                <Tween
                    from={"image-cropped-frame", 0.5,{ x: '-0%', top: '0%', height:"20%", width: "20%", display:"flex"}}
                    to={"image-cropped-frame", 0.5,{ x: '0%', top: '50%', height:"100%", width: "100%", display:"flex" }}
                    
                >
                 
                  <div className="image-cropped-frame">
                        <img id="animation_image1" src={AnimationImage1}/>
                  </div>
                  <div id="croppingFrame">
                    <img id="croppedImage" src={AnimationImage1} />
                  </div>
                  
                </Tween>
            </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
      <div />
    </div>
  );
  
  export default Sticky2;