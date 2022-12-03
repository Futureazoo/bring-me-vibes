import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AirIcon from '@mui/icons-material/Air';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SailingIcon from '@mui/icons-material/Sailing';

export const sceneSounds = {
  "mountain": [
    { name: "music", icon: <MusicNoteIcon color="primary"/>, defaultVolume: 50, soundFile: "" },
    { name: "wind whooshing", icon: <AirIcon color="primary" />, defaultVolume: 10, soundFile: "sounds/windy_forrest.ogg" },
    { name: "fire crackling", icon: <LocalFireDepartmentIcon color="primary" />, defaultVolume: 45, soundFile: "sounds/fire.ogg" },
    { name: "waves crashing", icon: <SailingIcon color="primary" />, defaultVolume: 20, soundFile: "sounds/waves_crashing_on_rock_beach.ogg" }
  ],
}