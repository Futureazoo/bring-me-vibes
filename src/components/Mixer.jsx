import React from 'react';
import { Card, CardHeader, CardContent, CardActions } from '@mui/material';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import SoundSlider from './SoundSlider';
import { sceneSounds } from './SceneSounds';
import './Mixer.css';

// Contains all of the mixers for the current scene

const sceneName = "mountain";
const mixers = sceneSounds[sceneName].map(mixer =>
  <SoundSlider
    key={mixer.name} 
    icon={mixer.icon}
    defaultVolume={mixer.defaultVolume}
  />
)

function Mixer() {
  return (  
    <Card sx={{ display: 'grid', maxWidth: 400}} >
      <CardHeader style={{ textAlign: 'center' }}
        title = "Mixer"
      />

      <CardContent>
        <Stack spacing={2}>
          {mixers}
        </Stack>
      </CardContent>
      

      <CardActions>
        <Button variant="contained" disableElevation startIcon={<ArrowBackIosRoundedIcon />}>Back</Button>
        <IconButton color="primary" aria-label="save">
          <SaveRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Mixer;