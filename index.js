console.log("Hello World");

//JavaScript Variables

//What are variables? - Containers to store data values
//To store int string boolean types of values
var number = 34;
var number1 = 26;
//console.log(number+number1);

//datatypes in javascript
//String
var str = " This is a string";
var str1 = "This is a string";
//console.log(concat(str,str1));

//Objects-refernce datatype
var marks = {
  Srinjoy: 90,
  Raisa: 99,
  Rik: 90,
};
//console .log(marks);
//boolean datatype
var a = true;
//console.log(a);
// undefined datatype
var undef;
//console.log(undef);
//null datatype
var n = null;
//console.log(n);
/*
There are two types of high level datatypes in Js
1 Primitive datatype : undefined,null,number,string,boolean,symbol
2.reference datatype : Arrays and Objects 

*/

//reference datatype -Arrays
arr = [1, 2, "String", 3, 4, 5];
var ar = [1, 2, 3, 3, 4];
//relational operations basically if else
/*if(arr[3]==ar[3])
{
    console.log("same")
}
else
{
    console.log("not same")
}

console.log(arr[2]);

*/
//for loop
//for(var i =0;i<ar.length;i++)
//{
//    console.log(ar[i],arr[i])
//}

// foreach loop
//ar.forEach(function(element)
//{
//    console.log(element);
//})

//while loop
let j = 0;
//while (j < ar.length) {
//  console.log(ar[j]);
//  j++;
//}


//do while loop
//do{
//    console.log(ar[j]);
//    j++;
//}while(j<ar.length);

//date and time in js

// let myd = new Date();
// console.log(myd);
// console.log(myd.getDay());
// console.log(myd.getMinutes());
// console.log(myd.getFullYear());
//-----------------------------------------------
//dorm manipulation
g=document.getElementById('click');
console.log(g);
g=document.getElementsByClassName("container")
console.log(g);
g[1].classList.add("bgp")
// console.log(g[0].innerHTML)
// console.log(g[1].innerText)
tn = document.getElementsByTagName('div')
console.log(tn);
ce=document.createElement('p');
ce.innerText = "i changed this :)"
tn[0].append(ce);
ce2=document.createElement('b');
ce2.innerText = "vag:)"
tn[0].replaceChild(ce2,ce);
tn[0].removeChild(ce2);  

