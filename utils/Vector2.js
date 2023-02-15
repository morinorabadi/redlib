export default class Vector2
{
    constructor(_x,_y){
        this.x = _x;
        this.y = _y
    }
    set(_x,_y){
        this.x = _x;
        this.y = _y
    }
    setFromVector(vector){
        this.x = vector.x
        this.y = vector.y
    }
    sort(){
        if (this.x > this.y){
            return this
        } else {
            return {x : this.y, y: this.x}
        }
    }
}