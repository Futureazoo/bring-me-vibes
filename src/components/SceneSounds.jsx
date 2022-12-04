import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AirIcon from '@mui/icons-material/Air';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SailingIcon from '@mui/icons-material/Sailing';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export const sceneSounds = {
  "oceanside": [
    { name: "music", icon: <MusicNoteIcon color="primary" />, defaultVolume: 0.5, soundFile: "music/11768.mp3" },
    { name: "beach chatter", icon: <BeachAccessIcon color="primary" />, defaultVolume: 0.1, soundFile: "sounds/summer_beach_ambience.mp3" },
    { name: "waves crashing", icon: <SailingIcon color="primary" />, defaultVolume: 0.2, soundFile: "sounds/waves_crashing_on_rock_beach.mp3" },
    { name: "fire crackling", icon: <LocalFireDepartmentIcon color="primary" />, defaultVolume: 0.45, soundFile: "sounds/fire.mp3" },
  ],
  "forest": [
    { name: "music", icon: <MusicNoteIcon color="primary" />, defaultVolume: 0.5, soundFile: "" },
    { name: "wind whooshing", icon: <AirIcon color="primary" />, defaultVolume: 0.1, soundFile: "sounds/windy_forest.mp3" },
  ]
}