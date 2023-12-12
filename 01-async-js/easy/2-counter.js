// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



setTimeout(callb,1000)


function callb(){
    console.log("Count");
    setTimeout(()=>{
        callb()
    },1000)
}
































































// (Hint: setTimeout)