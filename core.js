// utils
import Events from "./utils/Events"
import Clock from './utils/Clock'
import Sizes from './utils/Sizes'
import TouchInput from './utils/TouchInput'

export default class RedLib{
    constructor(options={}){
        /**
        * Options
        */
        const fps             = options.fps             || 60;


        // global event handler
        this.globalEvent = new Events()

        // Clock handler and create process event 
        this.clock = new Clock(fps,this.globalEvent)

        // store window sizes - create and handle resize event
        this.sizes = new Sizes(this.globalEvent)
        
        // handle mobile and desktop, scroll and touch events 
        // create scroll event
        // create touchDrag event
        // create touchStart and touchEnd event
        this.touchInput = new TouchInput(this.globalEvent)
        
    }
}
