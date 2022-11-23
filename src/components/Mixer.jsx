import React from 'react';
import { Card, CardHeader, CardContent, CardActions } from '@mui/material';
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
  <SoundSlider/>
)

function Mixer() {
  return (  
    <Card sx={{ display: 'grid', maxWidth: 400}} >
      <CardHeader
        title = "Mixer"
      />

      <CardContent>
        {mixers}
      </CardContent>
      

      <CardActions>
        <Button variant="contained" disableElevation startIcon={<ArrowBackIosRoundedIcon />}>Back</Button>
        <IconButton aria-label="save">
          <SaveRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Mixer;