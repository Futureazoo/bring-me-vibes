import React from 'react';
import Stack from '@mui/system/Stack';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import ReactAudioPlayer from 'react-audio-player';

/*
 * The audio-playing component for the scene's sounds. Is also a slider that enables
 * fine control of the sound's audio. Includes an icon describing the audio content.
 * Has a debugging feature to pause/play the sound by clicking the icon.
 */

function SoundSlider({ name, icon, defaultVolume, maxVolume, soundFile }) {
  const [volume, setVolume] = React.useState(defaultVolume * maxVolume);
  const [playing, setPlaying] = React.useState(false);

  function changeVolume(e) {
    setVolume(e.target.value / 100);
  }

  function playAudio() {
    document.getElementById( name + '-player').play()
  }

  function pauseAudio() {
    document.getElementById( name + '-player').pause()
  }

  function togglePlay() {
    if (playing) {
      pauseAudio();
    } else {
      playAudio();
    }
    setPlaying(!playing);
  }

  return (
    <Stack 
      sx={{
        alignItems: 'center'
      }}
      direction="row" 
      spacing={2}
    >
      <IconButton aria-label={"Toggle Audio for " + name} onClick={togglePlay}>
        {icon}
      </IconButton>
      <Slider
        key={name+'-slider'}
        aria-label={"Mixing Slider for" + name}
        value={volume*100} 
        max={maxVolume*100}
        onChange={changeVolume}
      />
      <ReactAudioPlayer
        id={name + '-player'}
        src={process.env.PUBLIC_URL + '/assets/' + soundFile}
        controls={false}
        autoPlay={true}
        loop={true}
        volume={volume}
      />
    </Stack>
  );
}

export default SoundSlider;