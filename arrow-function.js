//1. Print odd numbers in an array

arr = [1,2,3,4,5]
var oddNumbers = (x) => {

    let len = arr.length
    for(var i=0;i<len;i++)
    {
        if(((arr[i])% 2) != 0)
        {
            console.log(arr[i])
        }
        else
        {
            continue;
        }
    }

};

oddNumbers(arr);

// //2. Sum of all numbers in an array

arr1 = [1,2,3,4,5];
let sum = (a) =>{

let len = arr1.length;
let sum = 0;
for(var i=0;i<len;i++)

{
    sum = sum + arr1[i];
}
console.log(sum)
};

sum(arr1);

// //3. List all Prime numbers in an array

arr2 = [1, 2, 3, 4, 5]
let prime = (z) =>
{
    
    let f=0;
    let isPrime = true;
    let len = arr2.length;
    for (var i=0;i<len;i++)
    {   
        if(arr2[i] > 1) 
            {
            for(var j=2;j<arr2[i];j++)
            {
                if((arr2[i] % j) == 0)
                {
                f = f+1;
                break;
                }  
            }
            if(f == 0)
            {
                console.log(arr2[i])
                f = 0;
            }
            else
            {
                f = 0;
            }
            }      
        else
        {
            continue;
        }
    }
};
prime(arr2);

//4. Return median of two sorted arrays of the same size.

let arr1 = [2,1,4,3];
let arr2 = [4,5,6,7];

var median = (x,y) =>{

    let arr1 = [2,1,4,3]
    let arr2 = [4,5,6,7]
    let arr3 = arr1.concat(arr2)
    let arrFinal = arr3.sort();
    let len = arrFinal.length;
    let mid = (len/2);
    let mid1 = mid - 1;
    console.log((arrFinal[mid]+arrFinal[mid1])/2)
};
median(arr1,arr2);

//5. Convert all the strings to title caps in a string array

var arr = ["bhavi", "shanth", "cognizant"];
var titleCap = (z) =>{
    let len = arr.length;
    let B =[]
    for(var i =0;i<len;i++)
    {
        var str = arr[i];
        var len1 = str.length;
        var f = str.charAt(0);
        var fcase = f.toUpperCase();
        var rest = str.slice(1,len1)
        var final = fcase + rest;
        B[i] = final
    
    }
    
    console.log(B)
    
    
    };

    titleCap(arr)

// //6. Rotate an array by k times

var k = prompt("enter the number of times")
var rotate = (z) =>
{
var times = parseInt(k);
let arr = [1,2,3,4,5];
let len = arr.length;
var arr1 = [];
for(var i=0;i<k;i++)
{
    var last = arr[len-1];
     arr.pop()
    arr.unshift(last)
   

}
console.log(arr)
}
rotate(k)

// //7. Remove duplicates from an array

let chars = ['A', 'B', 'A', 'C', 'B'];
var dup = (z) =>
{  
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

};

dup(chars);

// //8. Return all the palindromes in an array

let arr = ["racecar", "ada", "apple", "orange"];
var pal = (z) =>{
    let len = arr.length;
    for (var i=0;i<len;i++)
    {
        var str = arr[i];
        var j = str.length-1;
        for(k=0;k<j;k++)
        {
            if(str[k] == str[j])
               {
                j--
                f=0;
               }
    
            else
            {
                f=1;
                break;
            }   
        }
    
        if(f==0)
        {
            console.log(str)
        }
    }
    };
    pal(arr);