const School = require('./school');

const bellRingListener = ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
};
const playFootballListener = () => {
    console.log('We will play football after the school is finished');
};
//! registered a listener for bellRing event
School.on('bellRing', bellRingListener);
School.on('playFootball', playFootballListener);
School.startPeriod();
School.endPeriod();
