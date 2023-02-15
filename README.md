# redlib

this small library create for web games

# options
1.fps

# Event calss
```javascript

// create event object 
const event = new Events()

// add new event to object
event.addEvent("test")

// add call back
event.addCallBack("test", () => {
    console.log("test number 1");
})

// add call back 2
const testEventId =  event.addCallBack("test", (params) => {
    console.log("test number 2");
    console.log(params);
})

event.callEvent("test", "events are good")

// output : 
//test number 1
//test number 2
//events are good

// you can remove callBack
event.removeCallBack("test", testEventId)

event.callEvent("test", "are events good?")

// output : 
//test number 1

```

# redlib core global event events
base on option call process event useally 60 times per second
process      -> number   return delta ( times passed from last process event )

handele window resize event 
resize      -> resize Object contain x : window.innerWidth and y : window.innerHeight and isMobile and currentOrientation and defaultOrientation

handle mobile and desktop, scroll and touch events 

scroll       -> number
touchDrag    -> Vector2  base on screen result is always between -1 and 1
touchMove    -> Vector2  base on screen result is always between -1 and 1
touchStart   -> Vector2  base on screen result is always between -1 and 1
touchEnd     -> none

```javascrip

// create redLibCore instance
const redLibCore = new RedLib()

// add process event
redLibCore.globalEvent.addCallBack('process', (delta, currentTime) => {
    console.log("process event 1 delta is :", delta);
})

// add another process event
redLibCore.globalEvent.addCallBack('process', (delta, currentTime) => {
    console.log("process event 2 currentTime is :", currentTime);
})

// add resize call back
redLibCore.globalEvent.addCallBack('resize', (resizeObject) => {
    const { x , y} = resizeObject
    console.log(`on window resize event screen width is ${x}, screen height is ${y}`);
})

```
