const os  =  require("os");

//method about user info
const userInfo = os.userInfo();
console.log(userInfo);

//method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const CurrentOS = {
    type : os.type(),
    release : os.release(),
    //totalMem = os.totalmem(),
    //freeMem = os.freemem(),
};

console.log(CurrentOS);