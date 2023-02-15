import Vector2 from "./Vector2";

export default class TouchInput
{
    constructor(_event){
        // save global event for scrol event
        this.events = _event

        // add events
        this.events.addEvent("scroll")

        this.events.addEvent('touchDrag')
        this.events.addEvent('touchMove')

        this.events.addEvent('touchStart')
        this.events.addEvent('touchEnd')

        // add event listener
        this.sizes = new Vector2(600,600)
        this.events.addCallBack("resize", sizes => (this.sizes.setFromVector(sizes)))

        /**
         * add Event listeners
         */
        
        //whell
        window.addEventListener('wheel',(event)=> {
            this.scroll(event.deltaY)
        })
        
        /**
         *touch and mouse stuff
         */
        // decleare some variable
        this.firstpos = new Vector2(0,0)
        this.lastpos = null
        this.isTouched = false
        
        /**
         * add event listenr for mobile touch
         */
        // Touch start
        window.addEventListener('touchstart',event => {
            this.touchstart(event.touches[0].clientX,event.touches[0].clientY)
        }) 
        // Touch move
        window.addEventListener('touchmove',event => {
            this.touchmove(event.touches[0].clientX,event.touches[0].clientY)
            this.events.callEvent("touchMove",this.resizePoints(new Vector2(event.touches[0].clientX,event.touches[0].clientY)))
        })
        // Touch end
        window.addEventListener('touchend',() => {
            this.touchend()
        })

        /**
         * add event listenr for desktop mouse 
         */
        // mouse start
        window.addEventListener('mousedown', event => {
            this.touchstart(event.clientX,event.clientY)
        })
        // mouse move
        window.addEventListener('mousemove', event => {
            this.events.callEvent("touchMove",this.resizePoints(new Vector2(event.clientX,event.clientY)))
            if (!this.isTouched){
                return
            }
            this.touchmove(event.clientX,event.clientY)
        })
        // mouse end
        window.addEventListener('mouseup', () => {
            this.touchend()
        })
    }
    // custom scroll event (replace width window scroll)
    scroll(pix){   
        this.events.callEvent('scroll',pix)
    }

    touchstart(x,y){
        this.isTouched = true
        this.firstpos.set(x,y)
        this.events.callEvent('touchStart',this.resizePoints(this.firstpos))
    }
    touchmove(x,y){
        if (this.lastpos){
            if ( Math.abs(this.firstpos.x - x) < Math.abs(this.firstpos.y - y) ){
                this.scroll(this.lastpos.y - y)
            }
        } else {
            this.lastpos = new Vector2(0,0)
        }
        this.lastpos.set(x ,y)
        this.events.callEvent('touchDrag', this.resizePoints(this.lastpos))
    }
    touchend(){
        this.isTouched = false
        this.lastpos = null
        this.events.callEvent('touchEnd')
    }
    // for other class to chech if customer is touch or not 
    getIsTouched(){
        return this.isTouched
    }
    resizePoints(points){
        return new Vector2(
            points.x / this.sizes.x * 2 - 1,
            points.y / this.sizes.y * 2 - 1
        )
    }
}