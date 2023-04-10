//UC1
let num1 = Math.floor(Math.random()*999)%100+100;
let num2 = Math.floor(Math.random()*999)%100+100;
let num3 = Math.floor(Math.random()*999)%100+100;
let num4 = Math.floor(Math.random()*999)%100+100;
let num5 = Math.floor(Math.random()*999)%100+100;
let num6 = Math.floor(Math.random()*999)%100+100;
let num7 = Math.floor(Math.random()*999)%100+100;
let num8 = Math.floor(Math.random()*999)%100+100;
let num9 = Math.floor(Math.random()*999)%100+100;
let num10 = Math.floor(Math.random()*999)%100+100;
let numArr = new Array(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
function FindSecondLargest(numArr){
    let first = -1,second =-1;
    for(let i=0; i<numArr.length; i++){
        if(numArr[i]>first){
            second = first;
            first = numArr[1];
        }
        else if(numArr[i]>second && numArr[i] != first){
            second = numArr[i];
        }
    }
    console.log("The second largest number without sorting is: " + second);
}

//UC-2
{
FindSecondLargest(numArr)
function FindSecondSmallestAndLargest(numArr){
    let n = numArr.length;
    numArr.sort();
    console.log("The second smallest element is: " + numArr[1]);
    console.log("The second largest element is: " + numArr[8]);
}
FindSecondSmallestAndLargest(numArr);
}

//UC3
function PrimeFactors(n){
    while(n%2==0){
        console.log(2 + " ");
        n = Math.floor(n/2);
    }
    for(let i=3; i<=Math.floor(Math.sqrt(n)); i++){
        while(n%i==0){
            console.log(i + " ");
            n = Math.floor(n/i);
        }
    }
    if(n>2){
        console.log(n + " ");
    }
}
let n = 315;
PrimeFactors(n);

//UC4
let sum = 0;
let array =  [10, 20, 13 ];
for(let i=0; i<array.length; i++){
    sum = sum  + array[i]
}
console.log(sum);

//UC5
{
let arr = new Array();
for(let i=1; i<=100; i++){
    if(i%11==0){  
        arr.push(console.log(i)); 
    } 
}
}