import React from 'react';
import Stack from '@mui/system/Stack';
import Slider from '@mui/material/Slider';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import IconButton from '@mui/material/IconButton';
// import sound from '../../../public/assets/sounds/fire.mp3'

function SoundSlider({ name, icon, defaultVolume, soundFile }) {
  const [playing, setPlaying] = React.useState(false);
  const audioPath = process.env.PUBLIC_URL + '/assets/' + soundFile;
  const audioInstance = new Audio(audioPath);

  audioInstance.volume=defaultVolume;
  audioInstance.loop=true;

  function togglePlay() {
    const wasPlaying = playing;
    setPlaying(!wasPlaying);

    if (wasPlaying) {
      console.log('attempting pause'); //PAUSING DOESNT WORK. IT MIGHT NOT HAVE TO
      audioInstance.pause();
    } else {
      let playPromise = audioInstance.play();
      if (playPromise !== undefined) {
        playPromise.then(function () {
          console.log('playback started');
        }).catch(function (error) {
          console.log('playback FAILED');
        });
      }
    }
  }

  function changeVolume(e) {
    console.log(e.target.value / 100);
    audioInstance.volume = (e.target.value/100);
    console.log("real volume:" + audioInstance.volume);
  }

  return (
    <Stack direction="row" spacing={2}>
      { icon }
      <Slider aria-label="Mixing Slider" defaultValue={defaultVolume*100} onChange={changeVolume}/>
      <IconButton aria-label="play" onClick={togglePlay}>
        <PlayCircleFilledIcon />
      </IconButton>
    </Stack>
  );
}

export default SoundSlider;