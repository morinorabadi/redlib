/**
 * 
 * this class use to convert touch events
 * base on configured view 
 * return Vector2 that x and y are allways between -1 and 1
 * 
 */


import Vector2 from "./Vector2"

export default class InputConverter
{
    constructor(_view){
        this.view = _view
        this.viewInfo = {}
    }
    resize(){
        const boundingClientRect = this.view.getBoundingClientRect()

        this.viewInfo.xOffset = ((window.innerWidth - boundingClientRect.width )  - boundingClientRect.x * 2 ) / window.innerWidth
        this.viewInfo.xRatio = window.innerWidth /  boundingClientRect.width
        
        this.viewInfo.yOffset = ((window.innerHeight - boundingClientRect.height )  - boundingClientRect.y * 2 ) / window.innerHeight
        this.viewInfo.yRatio = window.innerHeight /  boundingClientRect.height
        
    }
    convert(input){
        let y,x;
            x =( input.x + this.viewInfo.xOffset )* this.viewInfo.xRatio
            y =( input.y + this.viewInfo.yOffset )* this.viewInfo.yRatio
            return new Vector2(x,y)
    }
}