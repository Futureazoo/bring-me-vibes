import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AirIcon from '@mui/icons-material/Air';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SailingIcon from '@mui/icons-material/Sailing';

export const sceneSounds = {
  "mountain": [
    { name: "music", icon: <MusicNoteIcon color="primary"/>, defaultVolume: 0.5, soundFile: "" },
    { name: "wind whooshing", icon: <AirIcon color="primary" />, defaultVolume: 0.1, soundFile: "sounds/windy_forest.mp3" },
    { name: "fire crackling", icon: <LocalFireDepartmentIcon color="primary" />, defaultVolume: 0.45, soundFile: "sounds/fire.mp3" },
    { name: "waves crashing", icon: <SailingIcon color="primary" />, defaultVolume: 0.2, soundFile: "sounds/waves_crashing_on_rock_beach.mp3" }
  ],
}