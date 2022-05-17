/* Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array. */
{
    let randomArray = new Array();
    for(let i = 0; i < 10; i++) {
        let randNum = (Math.floor(Math.random() * 1000)%900) + 100;
        randomArray.push(randNum);
    }
    console.log(randomArray);

    for(let j = 0; j < 2; j++) {
        for(let k = 0; k < 9; k++) {
            if(randomArray[k] < randomArray[k+1]) {
                let temp = randomArray[k];
                randomArray[k] = randomArray[k+1];
                randomArray[k+1] = temp;
            }
        }
    }
    console.log("The second smallest is : " + randomArray[8]);
    
    for(let j = 0; j < 2; j++) {
        for(let k = 0; k < 9; k++) {
            if(randomArray[k] > randomArray[k+1]) {
                let temp = randomArray[k];
                randomArray[k] = randomArray[k+1];
                randomArray[k+1] = temp;    
            }
        }
    }
    console.log("The second largest is : " + randomArray[8]); 
}

/* Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element. */
{
    let randomArray = new Array();
    for(let i = 0; i < 10; i++) {
        let randNum = (Math.floor(Math.random() * 1000)%900) + 100;
        randomArray.push(randNum);
    }
    console.log(randomArray);

    
    for(let j = 0; j < 9; j++) {
        let swap = 0;
        for(let k = 0; k < 9; k++) {
            if(randomArray[k] < randomArray[k+1]) {
                let temp = randomArray[k];
                randomArray[k] = randomArray[k+1];
                randomArray[k+1] = temp;
                swap++;
            }
        }
        if(swap == 0) {
            break;
        }
    }
    console.log("The second smallest is : " + randomArray[8]);
    console.log("The second largest is : " + randomArray[1]);
    console.log(randomArray);
}

/* Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output. */
{
    const IS_PRIME = 0;
    const IS_NOT_PRIME = 1;

    console.log("Enter the number");
    const readline = require("readline-sync");
    let userNum = Number(readline.question());
    let primeFactors = new Array();
    for(let g = 2; g*g <= userNum; g++) {
        let diviCheck1 = userNum%g;
        if(diviCheck1 == 0) {
            let primeCheck = IS_PRIME;
            for(let i = 2; i < g; i++) {
                let diviCheck = g%i;
                if(diviCheck == 0) {
                    primeCheck = IS_NOT_PRIME;
                    break;
                }
            }
            if(primeCheck == IS_PRIME) {
                primeFactors.push(g);
            }
        }
    }

    console.log("Prime factors of " + userNum + " are " + primeFactors);
}

//Write a Program to show Sum of three Integer adds to ZERO
{
    let intsAddToZero = new Array(1,3,5,-2,-4,-3,7,6,8);
    let zeroPairs = new Array();
    for(let i = 0; i < intsAddToZero.length-2; i++) {
        for(let j = i+1; j < intsAddToZero.length-1; j++) {
            for(let k = j+1; k < intsAddToZero.length; k++) {
                let zeroCheck = intsAddToZero[i] + intsAddToZero[j] + intsAddToZero[k];
                if(zeroCheck == 0) {
                    let combo = new Array(intsAddToZero[i], intsAddToZero[j], intsAddToZero[k]);
                    zeroPairs.push(combo);
                }
            }
        }
    }
    if(zeroPairs.length == 0) {
        console.log("No combos found");
    }else {
        console.log(zeroPairs.length + " combos are found");
        console.log("They are :");
        zeroPairs.forEach(c => console.log(c));
    }
}

/* Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array */
{
    let repeatedDigits = new Array();
    for(let i = 0; i < 101; i++) {
        if(i%11 == 0 && i != 0) {
            repeatedDigits.push(i);
        }
    }
    console.log("The repeated digits are : " + repeatedDigits);
}