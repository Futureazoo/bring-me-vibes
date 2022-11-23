import React from 'react';
import Slider from '@mui/material/Slider';

function SoundSlider() {
  return (
    <div>
      <Slider aria-label="Mixing Slider" defaultValue={50}/>
    </div>
  );
}

export default SoundSlider;