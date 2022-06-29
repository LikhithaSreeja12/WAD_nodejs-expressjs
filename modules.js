var fs = require('fs')

fs.readFile("./text.txt","utf-8",function(err,data){
    if(err){
        console.log("error in reading the file");
    }
    else{
        console.log(data.toUpperCase());
    }

})

var os = require('os')

os.hostname()
console.log(os.hostname ())
os.getPriority()
console.log(os.getPriority())
os.version()
console.log(os.version())
os.homedir()
console.log(os.homedir())

var cowsay = require('cowsay')
console.log(cowsay.say({text:"example text",e:"%%",T:"&&"}))


 var chalk = require('chalk')

console.log(chalk.red('hello world !'));

var calc = require('./calc')
console.log(calc.add(12,23))
console.log(calc.sub(12,23))
console.log(calc.mul(12,23))
console.log(calc.div(12,0,(err,result) =>{
 if(err){
     console.log(err);
 }
 else{
     console.log(result);
     }
 }))
 
 var book = {title:"core java",author : "herbert shield " ,price : 500,piblisher : " tata mcgrill",pages : 550}
 var jsonbook = JSON.stringify(book) 
console.log(jsonbook)

var bookobj = JSON.parse(jsonbook)
for(ele in bookobj){
    console.log(ele)
}
var bookobj = JSON.parse(jsonbook)
for(ele in bookobj){
    console.log(ele+" : "+bookobj[ele])
}