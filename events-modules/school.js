const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class Started');
        //! raise an event.Always give a single parameter the callback.If there is multiple parameter send an object
        const obj = {
            period: 'first period',
            text: 'ended',
        };
        this.emit('bellRing', obj);
    }

    endPeriod() {
        this.emit('playFootball');
    }
}

module.exports = new School();
