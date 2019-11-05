const enEvent = require("events");
const emitter = new enEvent.EventEmitter();

emitter.on("minEvent", (beskjed, bruker) => {
    console.log(`${bruker}: ${beskjed}.`);
});

emitter.emit("minEvent", "CPUen sier noe", "CPU");
emitter.emit("minEvent", "Jeg sier noe", "Jørund");

