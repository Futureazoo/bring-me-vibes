import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WaterIcon from '@mui/icons-material/Water';

export const sceneSounds = {
  "mountain": [
    { name: "music", icon: <MusicNoteIcon color="primary" />, maxVolume: 0.5, defaultVolume: 0.2, soundFile: "music/9272.mp3" },
    { name: "babbling brook", icon: <WaterIcon color="primary" />, maxVolume: 1, defaultVolume: 0.4, soundFile: "sounds/mountain/storm_drain.mp3" },
    { name: "crickets chirping", icon: <EmojiNatureIcon color="primary" />, maxVolume: 1, defaultVolume: 0.7, soundFile: "sounds/mountain/afternoon_crickets_long.mp3" },
    { name: "fire crackling", icon: <LocalFireDepartmentIcon color="primary" />, maxVolume: 0.8, defaultVolume: 0.2, soundFile: "sounds/mountain/daytime_forrest_bonfire.mp3" },
  ]
}