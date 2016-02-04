/*
Problem Statement

Sorting 
One common task for computers is to sort data. For example, people might want to see all their files on a computer sorted by size. Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms.

Insertion Sort 
These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm. We will first start with an already sorted list.

Insert element into sorted list 
Given a sorted list with an unsorted number e in the rightmost cell, can you write some simple code to insert e into the array so that it remains sorted?

Print the array every time a value is shifted in the array until the array is fully sorted. The goal of this challenge is to follow the correct order of insertion sort.

Guideline: You can copy the value of e to a variable and consider its cell "empty". Since this leaves an extra cell empty on the right, you can shift everything over until V can be inserted. This will create a duplicate of each value, but when you reach the right spot, you can replace it with e.

Input Format 
There will be two lines of input:

Size - the size of the array
Arr - the unsorted array of integers
Output Format 
On each line, output the entire array every time an item is shifted in it.

Constraints 
1≤Size≤1000 
−10000≤e≤10000,e∈Arr

Sample Input

5
2 4 6 8 3
Sample Output

2 4 6 8 8 
2 4 6 6 8 
2 4 4 6 8 
2 3 4 6 8 
Explanation

3 is removed from the end of the array.
In the 1st line 8>3, so 8 is shifted one cell to the right. 
In the 2nd line 6>3, so 6 is shifted one cell to the right. 
In the 3rd line 4>3, so 4 is shifted one cell to the right. 
In the 4th line 2<3, so 3 is placed at position 2.

Task

Complete the method insertionSort which takes in one parameter:

Arr - an array with the value e in the right-most cell.
Next Challenge

In the next Challenge, we will complete the insertion sort itself!

Copyright © 2015 HackerRank.
*/
function processData(input) {
    //Enter your code here
    
    
    var lines = input.split("\n");
    var array = lines[1].split(" ");
    var lastnumber = array[array.length - 1]
    
    //console.log(lines[1][8]);
    list: {
    for (i = 0; i < lines[1].length; i++)
        {
            if (lastnumber < array[array.length - 2 - i])
                {
                    array[array.length - 1 - i] = array[array.length - 2 - i];
                }
            else
                {
                    array[array.length - 1 - i] = lastnumber;
                    break list;
                }
            console.log(array.join(" "));
        }
    
    }
    console.log(array.join(" "));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


