import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardHeader, CardContent, CardActions } from '@mui/material';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import SoundSlider from './SoundSlider';
import { sceneSounds } from '../SceneData';

import './Mixer.css';

// Contains all of the mixers for the current scene

function Mixer({ scene }) {
  const mixers = sceneSounds[scene].map(mixer =>
    <SoundSlider
      key={mixer.name}
      name={mixer.name}
      icon={mixer.icon}
      maxVolume={mixer.maxVolume}
      defaultVolume={mixer.defaultVolume}
      soundFile={mixer.soundFile}
    />
  )

  return (  
    <Card
      sx={{
        display: 'grid',
        borderRadius: '20px 0px 0px 20px',
        minWidth: 275,
        backdropFilter: "blur(3px)"
      }}
    >

      <CardHeader
        sx={{
          disableTypography: true,
          textAlign: 'center',
          marginTop: '16px'
        }}
        title={<Typography type="header" style={{ fontSize: 40, fontFamily: "'Lobster', cursive" }}>Mixer</Typography>}
      />

      <CardContent>
        <Stack spacing={1.5}>
          {mixers}
        </Stack>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '30px'
        }}
      >
        <Button
          variant="contained"
          disableElevation
          startIcon={<ArrowBackIosRoundedIcon />}
          sx={{ borderRadius: "20px" }}
        >
          Back
        </Button>
        <IconButton color="primary" aria-label="save">
          <SaveRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Mixer;