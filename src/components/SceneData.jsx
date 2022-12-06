import SceneLooper from './SceneLooper';

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WaterIcon from '@mui/icons-material/Water';

const pathStart = process.env.PUBLICURL;

export const scenes = [
  'mountain',
  'sea'
]

export const sceneGraphics = {
  'mountain': {
    gradient: 'linear-gradient(180deg, #C6D5E0 24%, #ECF1DF 50%)',
    layers: [
      { alt: 'mountain scene foreground', height: '0',   motion: 'static', speed: '0',    src: pathStart + '/assets/scenes/mountain/foreground.png' },
      { alt: 'mountain scene cloud 1',    height: '-50', motion: 'loop', speed: '90s',  src: pathStart + '/assets/scenes/mountain/midground.png' },
      { alt: 'mountain scene cloud 2',    height: '-50', motion: 'loop', speed: '120s', src: pathStart + '/assets/scenes/mountain/midground2.png' },
      { alt: 'mountain scene cloud layer top', height: '-75', motion: 'loop', speed: '40s', src: pathStart + '/assets/scenes/mountain/background.png' }
    ]
  },
  'sea': {
    gradient: 'linear-gradient(180deg, #A8D2C0 0%, #E0F1ED 51.04%)',
    layers: [
      { alt: 'sea scene foreground', height: '0', motion: 'static', speed: '0', src: pathStart + '/assets/scenes/sea/foreground.png' },
      { alt: 'sea scene cloud 1', height: '-50', motion: 'loop', speed: '90s', src: pathStart + '/assets/scenes/sea/midground.png' },
      { alt: 'sea scene cloud 2', height: '-50', motion: 'loop', speed: '120s', src: pathStart + '/assets/scenes/sea/midground2.png' },
      { alt: 'sea scene cloud layer top', height: '-75', motion: 'loop', speed: '40s', src: pathStart + '/assets/scenes/sea/background.png' }
    ]
  }
}

export const sceneSounds = {
  "mountain": [
    { name: "music", icon: <MusicNoteIcon color="primary" />, maxVolume: 0.5, defaultVolume: 0.2, soundFile: "music/9272.mp3" },
    { name: "babbling brook", icon: <WaterIcon color="primary" />, maxVolume: 1, defaultVolume: 0.4, soundFile: "sounds/mountain/storm_drain.mp3" },
    { name: "crickets chirping", icon: <EmojiNatureIcon color="primary" />, maxVolume: 1, defaultVolume: 0.7, soundFile: "sounds/mountain/afternoon_crickets_long.mp3" },
    { name: "fire crackling", icon: <LocalFireDepartmentIcon color="primary" />, maxVolume: 0.8, defaultVolume: 0.2, soundFile: "sounds/mountain/daytime_forrest_bonfire.mp3" },
  ]
}
