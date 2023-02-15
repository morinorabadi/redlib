export default class Clock{
  constructor(_fps,_events) {
    this.fps = _fps;
    this.rfps = 1000 / _fps;

    this.start = Date.now();
    this.current = this.start;
    this.timeNow = Date.now()
    this.elaped = 0;
    this.lastFramecalled = this.start+this.rfps;

    this.events = _events;
    this.events.addEvent("process");

    window.requestAnimationFrame(() => 
    {
      this.process();
    });
  }
  process() {
    this.current = Date.now()

    // Next frame
    window.requestAnimationFrame(() => 
    {
      this.process();
    })

    if ( this.lastFramecalled < this.current)
    {
      const delta = this.current + this.rfps - this.lastFramecalled
      this.lastFramecalled = this.current + this.rfps;
      this.elaped += delta
      this.timeNow += delta
      this.events.callEvent("process",delta,this.timeNow)
    }
}
}