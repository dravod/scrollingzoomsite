import React, {useEffect, useRef} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import AnimationImage1 from '../../assets/images/Image1.png'
import AnimationImage2 from "../../assets/images/Image2.png"

import "./index.css";


const IntroAnimation = () => {
  return(
    <div>
      <div/>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration={15000}
          pin
        >
          {(progress) => (
            <div className="sticky">
              <Timeline totalProgress={progress} paused>
                <Tween
                    from={{filter: "blur(0px)"}}
                    to={{ y:"-150vh", filter: "blur(10px)" }}      
                >
                  <div className="image-cropped-frame">
                    <img className="mainscreenshot" src={AnimationImage1} />
                  </div>
                </Tween>
                  <Tween
                    from={{ y:"-150vh", display:"none" }}  
                    to={{ y:"0vh", display:"block" }}      
                  >
                    <div className="image-cropped-frame">
                      <img className="mainscreenshot" src={AnimationImage1} />
                    </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  
                    to={{x:"-20vw", y: '-50vh', display: "none" }}      
                >
                  <div id="croppingFrame-bottom">
                    <img id="croppedImage-bottom" src={AnimationImage1} />
                  </div>
                </Tween>
                <Tween
                from={{x:"-20vw", y: '-50vh', display:"none"  }} 
                to={{x:"0", y:"0", display:"block" }}      
                >
                  <div id="croppingFrame-bottom">
                    <img id="croppedImage-bottom" src={AnimationImage1} />
                  </div>
                </Tween>
                
            </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
      <div />
    </div>
  )};
  
  export default IntroAnimation;