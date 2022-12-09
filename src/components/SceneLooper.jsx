import React from 'react';

import './SceneLooper.css';

function SceneLooper({ alt, src, zIndex, speed }) {

  const layer1Animate = {
    zIndex: zIndex,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    animation: 'motion ' + speed + ' infinite linear',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh'
  }

  const layer2Animate = {
    transform: 'translateX(100%)',
    zIndex: zIndex,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    animation: 'motionStaggered ' + speed + ' infinite linear',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh'
  }

  return ( 
    <div>
      <img style={layer1Animate} id='layer' alt={alt} src={src}/>
      <img style={layer2Animate} id='layerTiled' alt={alt} src={src}/>
    </div> 
  );
}

export default SceneLooper;