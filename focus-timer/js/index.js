import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from './events.js'


//desestruturação dos elementos
import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
})


const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,

})
let timerTimeOut

const sound = Sound()

Events({ controls, timer, sound })