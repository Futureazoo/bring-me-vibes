import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WaterIcon from '@mui/icons-material/Water';

import SailingIcon from '@mui/icons-material/Sailing';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud'; //Seagull Temp

const pathStart = process.env.PUBLIC_URL;

export const sceneData = {
  mountain: {
    sounds: [
      { name: "music", icon: <MusicNoteIcon color="primary" />, maxVolume: 0.5, defaultVolume: 0.2, soundFile: "music/9272.mp3" },
      { name: "babbling brook", icon: <WaterIcon color="primary" />, maxVolume: 1, defaultVolume: 0.4, soundFile: "sounds/mountain/storm_drain.mp3" },
      { name: "crickets chirping", icon: <EmojiNatureIcon color="primary" />, maxVolume: 1, defaultVolume: 0.7, soundFile: "sounds/mountain/afternoon_crickets_long.mp3" },
      { name: "fire crackling", icon: <LocalFireDepartmentIcon color="primary" />, maxVolume: 0.8, defaultVolume: 0.2, soundFile: "sounds/mountain/daytime_forrest_bonfire.mp3" },
    ],
    gradient: 'linear-gradient(180deg, #C6D5E0 24%, #ECF1DF 50%)',
    layers: [
      { alt: 'mountain scene foreground', zHeight: '0',   motion: 'static', speed: '0',    src: pathStart + '/assets/scenes/mountain/foreground.png' },
      { alt: 'mountain scene cloud 1', zHeight: '-50', motion: 'loop', speed: '120s',  src: pathStart + '/assets/scenes/mountain/midground.png' },
      { alt: 'mountain scene cloud 2', zHeight: '-50', motion: 'loop', speed: '240s', src: pathStart + '/assets/scenes/mountain/midground2.png' },
      { alt: 'mountain scene cloud layer top', zHeight: '-75', motion: 'loop', speed: '60s', src: pathStart + '/assets/scenes/mountain/background.png' },
    ]
  },
  sea: {
    sounds: [
      { name: "music", icon: <MusicNoteIcon color="primary" />, maxVolume: 0.6, defaultVolume: 0.2, soundFile: "music/9355.mp3" },
      { name: "boat splashing", icon: <SailingIcon color="primary" />, maxVolume: 0.5, defaultVolume: 0.4, soundFile: "sounds/sea/boat-waves.mp3" },
      { name: "wind blowing", icon: <AirIcon color="primary" />, maxVolume: 1, defaultVolume: 0.9, soundFile: "sounds/sea/wind.mp3" },
      { name: "seagulls calling", icon: <CloudIcon color="primary" />, maxVolume: 0.6, defaultVolume: 0.2, soundFile: "sounds/sea/seagull.mp3" },
    ],
    gradient: 'linear-gradient(180deg, #A8D2C0 0%, #E0F1ED 51.04%)',
    layers: [
      { alt: 'sea scene foreground', zHeight: '0', motion: 'static', speed: '0', src: pathStart + '/assets/scenes/sea/foreground.png' },
      { alt: 'sea scene cloud 1', zHeight: '-50', motion: 'loop', speed: '60s', src: pathStart + '/assets/scenes/sea/midground.png' },
      { alt: 'sea scene cloud 2', zHeight: '-50', motion: 'loop', speed: '90s', src: pathStart + '/assets/scenes/sea/midground2.png' },
      { alt: 'sea scene cloud layer top', zHeight: '-75', motion: 'loop', speed: '30s', src: pathStart + '/assets/scenes/sea/background.png' }
    ]
  }
}
