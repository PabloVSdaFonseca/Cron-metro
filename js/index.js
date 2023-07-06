import Controls from "./controls.js";
import Events from "./events.js";
import Timer from "./timer.js";
import {  
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay, 
} from "./elements.js";
import Sound from "./sounds.js";


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
});

const sound = Sound();

Events({controls, timer, sound})

