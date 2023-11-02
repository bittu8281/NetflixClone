import { FortTwoTone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function Task6() {
    const [sat, setSat] = useState(0)

    useEffect(() =>{
    // console.log('Hello ' ,sat)
    // setSat('Bittu')
    },[sat])

    const Change = ()=>{
        setSat(sat +1);
    }
    
    // useEffect(() =>{
    // console.log(sat)
    // },[])
   
    // useEffect(() =>{
    // console.log(sat)
    //  setSat("helloo")
    // },[sat])

     // reverse string using loop
    //  let str = [1,2,3,4,5,6]
    // let str = "Bittu"
    //  let newStr = ""
    //  for (let i = str.length-1;i>=0;i--){
    // newStr += str[i]
    //  }
    
    // console.log(newStr);

    //map function
    // let a [1,2,3,4,5,6]
    // let b = str.map((x)=>{
    //     return x*10
    // })
    // console.log(b)

  //print nth no in array
    // let array = ['Bittu','Raju','Shrithi','Vidhi']
    //  console.log(array[2])

  // print array element
//   let arry = ["b", "i", "t", "t", "u"];
//     for (let i = 0; i < arry.length; i++) {
//         console.log(arry[i]);
//   }

// even or odd no
//  for(let n=1;n<=10;n++){
//     if(n%2==0){
//         console.log("This is even number = " + n);
//     }
//     else{
//         console.log( "This is odd number = " + n)
//     }
//  }

    
    // let x = 552
    // let y = 55
    // {
    //     if(x===y){
    //         console.log('yes')
    //     }
    //     else{
    //         console.log('no')
    //     }
    // }

//   Fibonacci series
    // let x = 0;
    // let y = 1;
    // let f = x+y;
    
    // for(f=1; f<100 ; f++){
    // // while (f<100){
    //   console.log(x)
    //   f=x+y;
    //   x=y;
    //   y=f;
    // }

    //let n = 1212
 
 //Palindrome no and syring
//   let n= 121
//     let p = ""
//  n=n.toString()
 
//       for(let j=n.length-1;j>=0;j--){
//             p+=n[j]
//  }
//  if(n==p){
//      console.log(' Yes it is a Palindrome Number')
//  }
//  else{
//      console.log('No it"s not a Palindrome Number')
//  }

// two Sum
// let nums = [2,7,11,15]
// let target = 18
// let f = []
// for(i=0;i<nums.length;i++){
//    for(j=i+1;j<nums.length;j++){
//        if(nums[i]+nums[j]==target){
//           f= [i,j]
//        }
//    }

// }
// console.log(f)

// Add two Number
// let l1 = [2,4,3]
// let l2 = [5,6,4]
// let i
// let l1s=''
// let l2s=''
// let f

// let g = []

// for( i=0;i<l1.length;i++){
//     l1s += l1[i]
// }

// for(i=0;i<l2.length;i++){
//     l2s += l2[i]
// }
//  f = parseInt(l1s) + parseInt(l2s)
//  f= f.toString()
// //  console.log(f, f.length)
// for(i=f.length-1;i>=0;i--){
//     g.push(parseInt(f[i]))
// }
// console.log(g)


// Add the array of element and print
// let l = [2,4,3]
// let n=0
// for(let i=0;i<l.length;i++){
//     n += l[i]
    
// }
// console.log(n)


//Add of array elemnet index0+index1 and print max no

// let l = [2,4,23,7,191,5]
// let s=[]

// for(let i=0;i<l.length-1;i++){
//         // s =l[i]+l[i+1]
//         s.push(l[i]+l[i+1])
//     }
//     console.log(s)
//     let g=s[0]
// for(let j=0;j<s.length;j++){
//   if(g>s[j]){
//     g = s[j]
// }
// }
// console.log(g)

// Divided array element by 2 and print
// let x = [4,5,6,7,8,24,27,29,28,26,22,20]
// let y = []
// for(let i=0;i<x.length;i++){
//     if(x[i]%4==0){
//         y.push(x[i])
//             // console.log(y)
//     }
//     // console.log(y)
// }
//     console.log(y)


// Maximum and minimum of an array using minimum number of comparisons
// let x =[3,4,5,1,9,21]
// let p=x[0]
// let k=x[0]
// for(let i=0;i<x.length;i++){
//     if(p>x[i]){
//         p = x[i]
//     }
//     if(k<x[i]){
//         k = x[i]
//     }
// }
// console.log(p, 'min')
// console.log(k, 'mAX')


// Kadane's Algorithm

// let arr = [-1,-2,-3,-4]
// let x= arr.length
// let sum = 0
// let e =[]

// for(let i=0;i<x; i++){
//         sum += arr[i]
//         // console.log(sum)
//         e.push(sum)
// }
// // console.log(e)

// let s = e[0]
// for(let j=1;j<e.length;j++){
//         // console.log(s)
//          if(s<e[j]){
//              s = e[j]
//         }
// }
// console.log(s)
    
// let k=3
// let arr= [3, 9, 12, 16, 20]

let K=2
let arr= [1,5,8,10]

let index= K-1
let newArr= []
let newArr1= []
let newArr2= []
let finalArr= []
let www=[]

    for(let c=0; c<=index-1; c++){
        www = arr[c]+K
        newArr.push(www)
    }
     
for(let j=index; j<arr.length; j++){
     newArr1= arr[j]-K
    newArr2.push(newArr1)
   }
   
   finalArr= [...newArr,...newArr2]
      console.log(finalArr, 'line no. 33')

let max = finalArr[0]
let min = finalArr[0]


for(let s=1; s<=finalArr.length; s++){
     if(max<finalArr[s]){
         max = finalArr[s]
    }
   else if(min>finalArr[s]){
        min = finalArr[s]
    }
   
    
}
let output = max-min 
console.log("OP = ", output)



  return (
    <div>
      <button onClick={Change}>count{sat}</button>
    </div>
  );
}

export default Task6;
