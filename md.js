const path = require('path');
const EventEmitter = require('events');
const eventemiiter = new EventEmitter();


//register event
eventemiiter.on("message", (message) => { console.log(message) });

eventemiiter.emit("message", "event emitted")




