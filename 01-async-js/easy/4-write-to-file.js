// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs")

fs.readFile("a.txt","utf-8",(err,data)=>{
    data = data + " I am learning coding"
    fs.writeFile("a.txt",data,()=>{
        
    })
})