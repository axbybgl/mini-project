'use strict'




function foo(num){
    var a=true;
    for(var i=2; i<num ;i++){
        if (num%i==0){
           a=false;
        }
    }
    if(a){
        console.log(x)
    }
}

module.exports=foo;