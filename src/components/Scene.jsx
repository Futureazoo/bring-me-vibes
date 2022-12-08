import React from 'react';
import RightPanel from './RightPanel';
import SceneLooper from './SceneLooper';

import { sceneData } from './SceneData';

import './Scene.css';

// Displays the scene, and determines what the Music and Mixer options are

function Scene() {
  const [scene, setScene] = React.useState('mountain');

  // Temporary Implementation - change to cycling through 'all' scenes
  const handleSceneToggle = () => { 
    if (scene=='mountain') {
      setScene('sea');
    } else {
      setScene('mountain');
    }
  }

  const backgroundGradient = {
    background: sceneData[scene].gradient,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh'
  }

  //TODO: pull scene data and generate component (make a loop!)
  

  return ( 
    <div id="wrapper">
      <div className="components">
        <RightPanel scene={scene} toggleScene={handleSceneToggle} />
      </div>
      <div id='skycolor' style={backgroundGradient}>
        <img id='foreground' alt="Mountain scene foreground" src={sceneData[scene].layers[0].src} />

        <SceneLooper imagePath={sceneData[scene].layers[1].src} zIndex='-50' speed={sceneData[scene].layers[1].speed} />
        <SceneLooper imagePath={sceneData[scene].layers[2].src} zIndex='-50' speed={sceneData[scene].layers[2].speed} />

        <SceneLooper imagePath={sceneData[scene].layers[3].src} zIndex='-75' speed={sceneData[scene].layers[3].speed} />
      </div>
    </div>
  );
}

export default Scene;