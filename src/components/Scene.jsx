import React from 'react';
import RightPanel from './RightPanel';
import './Scene.css';

// Displays the scene, and determines what the Music and Mixer options are

function Scene() {
  return ( 
    <div className="scene-components">
      <RightPanel />
    </div>
  );
}

export default Scene;