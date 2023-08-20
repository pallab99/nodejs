const EventEmitter = require('events');

const event = new EventEmitter();

const bellRingListener = ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
};
//! registered a listener for bellRing event
event.on('bellRing', bellRingListener);

//! raise an event.Always give a single parameter the callback.If there is multiple parameter send an object
const obj = {
    period: 'first',
    text: 'ended',
};
event.emit('bellRing', obj);
