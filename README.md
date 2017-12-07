Problem:

 Write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).


Solution:

I have come up with a 2 solution to solve this problem the (1)first one is to generate random number then store them in an array
with a condition that if the number doesn't already exist in the array then place the number inside the array else generate another number until the size of the array reach 10,000 to ensure uniqueness. This would be an easy solution since javascript already have a function that can determine wether the number is already in the array (indexOf()). But since we are taking in consideration the efficiency of the solution this is not a good solution or I say efficient because everytime we generate a new number we have to compare them to the ones that is stored in the array where in the long run will grow bigger, hence it will have a complexity of O(n^2). The (2)second solution to solve this problem is to initialized first an array of number from 1 - 10000 which woud have a complexity of O(N) then
after that we perform a swap where in we generate a number to be swapped then switched it with the maximum number where in for every iteration we decrement the maximum number where in the complexity is of O(nlogn).


Notes:

I have written a node.js code utilizing express.js module. The Implementation is base on the second solution explained in Solution section. I decided to create an api and return a json response.


-Installing dependenies:

$ npm install

To run the code just simply go to the folder randomNumberGenerator and run app.js
i.e: /path/randomNumberGenerator/

$ node app.js

This run on the localhost port:8000




on your browser or any  REST Client (i.e. POSTMAN) goto: localhost:8000/randomNumberGenerator


To run unit Test:
go to: randomNumberGenerator/test/ and run mocha randomGeneratorTest.js
