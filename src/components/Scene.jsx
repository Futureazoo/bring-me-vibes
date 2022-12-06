import React from 'react';
import RightPanel from './RightPanel';
import SceneLooper from './SceneLooper';

import { sceneGraphics } from './SceneData';

import './Scene.css';

// Displays the scene, and determines what the Music and Mixer options are



function Scene() {
  const [scene, setScene] = React.useState('mountain');

  const backgroundGradient = {
    background: sceneGraphics[scene].gradient,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh'
  }

  //TODO: pull scene data and generate component
  

  return ( 
    <div id="wrapper">
      <div className="components">
        <RightPanel scene={scene} />
      </div>
      <div id='skycolor' style={backgroundGradient}>
        <img id='foreground' alt="Mountain scene foreground" src={process.env.PUBLIC_URL + '/assets/scenes/mountain/foreground.png'} />

        <SceneLooper imagePath='/assets/scenes/mountain/midground.png' zIndex='-50' speed='90s'/>
        <SceneLooper imagePath='/assets/scenes/mountain/midground2.png' zIndex='-50' speed='120s' />

        <SceneLooper imagePath='/assets/scenes/mountain/background.png' zIndex='-75' speed='40s' />
      </div>
    </div>
  );
}

export default Scene;