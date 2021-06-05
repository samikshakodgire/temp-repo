const os=require('os')

//info about curr user
// const user=os.userInfo()
// console.log(user)

///method returns uptime of system in seconds
console.log(`system uptime is ${os.uptime()} seconds`);


const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)