exports.add = function(a,b){
    return a+b;
}
exports.sub = function(a,b){
    return a-b;
}
exports.mul = function(a,b){
    return a*b;
}
exports.div = function(a,b){
    return a/b;
}
exports.div = function(a,b,callback){
    if(b==0){
        callback("error! division by zero",null)
    }
    else{
        callback(null,a/b)
    }
}
exports.floor = function(a,b){
    return a//b;
}