# redlib

this small and light weight library created for games and functional web page
contain an event class to call custom signal events  
and some useful global events


# Event class
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

# redlib core globalEvent object

redlib core globalEvent object contain some use full event that you can use in you project

base on fps option process event usually called 60 times per second
this event use "window.requestAnimationFrame" in background 

+ process      -> delta - currentTime (  delta : times passed from last process event )


handel window resize event 

+ resize      -> resize Object contain x : window.innerWidth and y : window.innerHeight and isMobile and currentOrientation and defaultOrientation



handle mobile touch events  
handle desktop mouse events  
handle desktop scroll event


+ scroll       -> return number ( hwo many pixel use scroll )  
+ touchDrag    -> return Vector2  (base on screen result is always between -1 and 1)  
+ touchMove    -> return Vector2  (base on screen result is always between -1 and 1)  
+ touchStart   -> return Vector2  (base on screen result is always between -1 and 1)  
+ touchEnd     -> return none

```javascript

// create redLibCore instance
const redLibCore = new RedLib({  
    // fps : 60 // by default fps is 60  
})

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

// add touch call back
redLibCore.globalEvent.addCallBack('touchStart', (touch) => {
    const { x , y } = touch
    console.log(`on window mouse or touch event x is ${x}, and y is ${y}`);
})


```

# InputConverter class

you can use this function to get touch input -1 to 1
base on object that you pass in

```javascript

// grab test element
const test = document.getElementById('test')

// create InputConverter object
const testConverter = new InputConverter(test)

// add InputConverter resize function to global resize events
redlibcore.addCallBack("resize", () => {
    testConverter.resize()
})

// convert touch object in global touchstart event 
redlibcore.addCallBack("touchstart", (touch) => {
    // convert touch event
    const convertedInput = testConverter.convert(touch)
})

// resize manually once in the end
testConverter.resize()


```
