import React from 'react';
import Stack from '@mui/system/Stack';
import Slider from '@mui/material/Slider';

function SoundSlider({ icon, defaultVolume }) {
  return (
    <Stack direction="row" spacing={2}>
      { icon }
      <Slider aria-label="Mixing Slider" defaultValue={defaultVolume}/>
    </Stack>
  );
}

export default SoundSlider;