import React from 'react';
import RightPanel from './RightPanel';
import './Scene.css';

// Displays the scene, and determines what the Music and Mixer options are

function Scene() {
  const [scene, setScene] = React.useState('oceanside');

  return ( 
    <div className="scene-components">
      <RightPanel scene={scene}/>
    </div>
  );
}

export default Scene;