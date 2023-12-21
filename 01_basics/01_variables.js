const accountId = 5465165
let accountEmail ="chandu@gmail.com"
var accountpassword ="12345"
accountCity ="Hyderabad"  //don't declare any value without let , var,const . This leads to huge problem .
let accountState; //If we declare variable and we dont give any value to it ,then it will print undefined
// accountId = 88  not allowed

accountEmail= "chanskbe@gmail.com"
accountpassword="454654"
accountCity="doodhbowli"

// console.log(accountId);

//  /*
//  prefer not to use var
//  because of issue in block scope and funtional scope
//  */

// console.table([accountId,accountEmail,accountpassword,accountCity,accountState]);

if(true){
    var a=5;
    let b=8;
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);
