import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AirIcon from '@mui/icons-material/Air';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ForestIcon from '@mui/icons-material/Forest';

export const sceneSounds = {
  "mountain": [
    { name: "music", icon: <MusicNoteIcon color="primary"/>, defaultVolume: 50, soundFile: "" },
    { name: "wind whooshing", icon: <AirIcon color="primary" />, defaultVolume: 10,soundFile: "" },
    { name: "fire crackling", icon: <LocalFireDepartmentIcon color="primary" />, defaultVolume: 45, soundFile: "" },
    { name: "leaves rustling", icon: <ForestIcon color="primary" />, defaultVolume: 20, soundFile: "" }
  ],
}