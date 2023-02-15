// utils
import Events from "./utils/Events"
import Clock from './utils/Clock'
import Sizes from './utils/Sizes'
import TouchInput from './utils/TouchInput'
/**
 * available options
 * ----------------------------------------
 * name           ==     default          |
 * ----------------------------------------
 * rootId         ==     app              |
 * fps            ==     60               |
 * 
 * 
 */


/**
 * available events
 * 
 * global events -->
 * 
 * process      -> number   return delta ( times passed from last process event )
 * resize       -> Vector2  ( x and y are sizes of customer view )
 * scroll       -> number
 * touchDrag    -> none
 * touchMove    -> Vector2  base on screen result is always between -1 and 1
 * touchStart   -> Vector2  base on screen result is always between -1 and 1
 * touchEnd     -> none
 * 
 * ------------------
 */

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
