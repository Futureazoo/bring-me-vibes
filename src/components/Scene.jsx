import React from 'react';
import Mixer from './Mixer';
import './Scene.css';

// Displays the scene, and determines what the Music and Mixer options are

function Scene() {
  return ( 
    <div className="scene-components">
      <Mixer/>
    </div>
  );
}

export default Scene;