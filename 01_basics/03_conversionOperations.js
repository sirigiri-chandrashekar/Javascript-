/* IN THIS FILE WE LEARNT ABOUT THE CONVERSION OF OPERATION BY USING NAME OF DATA TYPES EG:- Boolean  ;  String  ; Number ; Obejct and so on 
 
AND ABOUT OPERTION "add, sub , divide, multiplication ............"

*/



let score="55abc"

//console.log(typeof score);
//console.log(typeof(score)); //throught this we tried without string //output=number 

//let valueInNumber= Number(score) //we can convert string in number by using Number in starting. output= number 

//console.log(typeof(valueInNumber));// it has converted in number .!but we dont now the value of it 

//console.log(valueInNumber) //this leads to NaN because score do not have pure number 

//"55"=> 55
//"55abc" => NaN (not a number)
// true = 1 ,false =0

let isLoggedIn= undefined;

let booleanIsLoggedIn= Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

//value 1 => ture , 0=> false
// emptystring => true
//"chandu " => true
// null => false
//undefined => false 

let someNumber=33

let stringNumber= String(someNumber); //by using String command we can convert it into string value eventhough it is number

// console.log(someNumber);
// console.log(typeof(stringNumber));

let someobject =32;

let object = Object(someobject);

// console.log(object);
// console.log(typeof object);


/*******************************operators***************************/

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);  //modules is used to check the remainder
// console.log(2**3); //to the power of


str1 ="hello"
str2 =" chandra shekar"

str3 =str1+str2

// console.log(str3);

// console.log(1+ +"2");
// console.log("1"+2);
// console.log(1+"2" +1);
// console.log("1"+2+1);
// console.log(1+2+"1");

// console.log(+true);// output:- 1
// console.log(+"");// output:0

// let gameCounter=100;
// gameCounter++; //postfix
// ++gameCounter; //prefix
// console.log(gameCounter);


// let x = 3;
// let y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// let b = ++a;  //The value of a is initially set to 3. The ++a is a pre-increment operation, which means that the value of a is incremented by 1 before the assignment to b takes place. Therefore, b will be assigned the value of the incremented a.

// console.log(`a:${a} , b:${b}`);
// // Expected output: "a:4, b:4"