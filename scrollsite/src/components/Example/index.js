import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


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
                    from={{ x: '-20%', top: '60%', height:"100px", width: "100px"}}
                    to={{ x: '60%', top: '10%', height:"400px", width: "400px" }}
                    
                >
                  
                    <div style={{backgroundColor: "brown", height: "100px", width:"100px"}} />              
                  
                </Tween>
                <Tween
                    from={{ x: '60%', top: '10%', height:"400px", width: "400px" }}
                    to= {{ x: '-20%', top: '60%', height:"100px", width: "100px"}}
                    
                >
                  
                    <div style={{backgroundColor: "brown", height: "100px", width:"100px"}} />              
                  
                </Tween>
                <Timeline 
                  target={
                    <div className="heading">
                      <h2>This is cool!</h2>
                    </div>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                  />
                  <Tween
                    to={{ x: '110%' }}
                  />
                    <Tween
                    from={{ x: '60%', top: '10%', height:"400px", width: "400px" }}
                    to= {{ x: '-20%', top: '60%', height:"100px", width: "100px"}}
                    
                >
                  
                    <div style={{backgroundColor: "brown", height: "100px", width:"100px"}} />              
                  
                </Tween>
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
      <div />
    </div>
  );
  
  export default Sticky2;