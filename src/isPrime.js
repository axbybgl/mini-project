'use strict'

var num;
var a=true;

function foo(num){
    for(var i=2; i<num ;i++){
        if (num%i==0){
           a=false;
        }
    }
}