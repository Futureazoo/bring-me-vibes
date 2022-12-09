import React from 'react';
import RightPanel from './RightPanel';
import SceneLooper from './SceneLooper';

import { sceneData } from './SceneData';

import './Scene.css';

/*
 * Generates and displays the scene contents from SceneData.
 * Also contains the RightPanel component that shows and hides the mixer.
 */

function Scene() {
  const [sceneIndex, setSceneIndex] = React.useState(0);
  const allScenes = Object.keys(sceneData);
  const [scene, setScene] = React.useState(allScenes[sceneIndex]);

  const handleSceneToggle = () => { 
    if (sceneIndex < allScenes.length-1) {
      setScene(allScenes[sceneIndex + 1]);
      setSceneIndex(sceneIndex + 1);
    } else {
      setScene(allScenes[0]);
      setSceneIndex(0);
    }
    
  }

  const backgroundGradient = {
    background: sceneData[scene].gradient,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh'
  }

  const layers = 
    sceneData[scene].layers.map(layer =>
      constructLayer(layer)
  )

  function constructLayer(layerData) {
    let staticLayerStyle = {
      zIndex: layerData.zHeight,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh'
    }

    if (layerData.motion === 'static') {
      return <img style={staticLayerStyle} key={layerData.alt} alt={layerData.alt} src={layerData.src} />; //TODO: stop hardcoding the zHeight
    } else {
      return <SceneLooper key={layerData.alt} alt={layerData.alt} src={layerData.src} zIndex={layerData.zHeight} speed={layerData.speed} />
    }
  }

  return ( 
    <div id="wrapper">
      <div className="components">
        <RightPanel scene={scene} toggleScene={handleSceneToggle} />
      </div>
      <div id='skycolor' style={backgroundGradient}>
        { layers }
      </div>
    </div>
  );
}

export default Scene;