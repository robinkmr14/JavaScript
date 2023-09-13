// setTimeOut and setInterval

// setTimeOut (function|code, delay, arg1, agr2,....)

function greeting(){
    console.log("Welcome to family");
}
setTimeout(greeting,5000); // 5000 ms = 5s

setTimeout(function greeting(name){
    console.log(`welcome to home ${name}`);
},5000, "robin");

// setInterval
// setInterval (function|code, delay, arg1, agr2,....)
setInterval(greeting,3000);