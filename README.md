# Roman Numeral Converter
A project to facilitate learned material. 
Converts numbers the user inputs into roman numerals. 
The tricky part in making this was how to convert the numbers to numerals in javascript. I ended up doing it through multiple arrays, all of which held the different numeral letters next to their associated number value, like this: ```['['X', 10], ['IX', 9]```. The  solution I found was to make a new array, use a ```.forEach()``` method to iterate through every numeral/number array object in a while loop until all of them had been gone through.   
The code looked like this: 
```
const inNum = []
    num.forEach((arr) => {
        while (i >= arr[1]) {
            inNum.push(arr[0]);
            i -= arr[1];
```
Note: It took me a while to find out, but I used ```-=``` on the input and the numeral/number pair at the end to make sure the while loop ended, as not including that made the browser crash.
