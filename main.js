var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

//Hostname
console.log('host name : ' + os.hostname() );

//CPUS
console.log('cpus : ' + os.cpus() );

//Network interfaces
console.log('networkinterfaces : ' + os.networkInterfaces() );

for (Object obj: os.networkInterfaces()) {
   console.log(ob)
;}