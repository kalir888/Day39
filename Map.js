/* Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times */
{
    function rollTheDice() {
        return (Math.floor(Math.random() * 10) % 6) + 1;
    }

    function winCheck(diceRegister) {
        const FOUND = 1;
        const NOT_FOUND = 0;
        let check = NOT_FOUND;
        for(let value of diceRegister.values()) {
            if(value == 10) {
                check = FOUND;
                break;
            }
        }
        if(check == FOUND) {
            return true;
        }else {
            return false;
        }
    }

    function findTheKey(diceRegister,value) {
        let winKey = 0;
        for(let key of diceRegister.keys()) {
            if(diceRegister.get(key) == value) {
                winKey = key;
                break;
            }
        }
        return winKey;
    }

    function findMinimum(diceRegister) {
        let diceArray = new Array();
        for(let value of diceRegister.values()) {
            diceArray.push(value);
        }
        for(let i = 0; i < 5; i++) {
            if(diceArray[i] < diceArray[i+1]) {
                minimum = diceArray[i];
                diceArray[i] = diceArray[i+1];
                diceArray[i+1] = minimum;
            }
        }
        return diceArray[diceArray.length-1];
    }

    let diceRegister = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
    while(!winCheck(diceRegister)) {
        let diceRoll = rollTheDice();
        let value = diceRegister.get(diceRoll);
        value++;
        diceRegister.set(diceRoll,value);
        
    }
    let winKey = findTheKey(diceRegister,10);
    let minimumKey = findTheKey(diceRegister, findMinimum(diceRegister));
    console.log("The max dice rolled number is " + winKey + " and the rolled times is " + diceRegister.get(winKey));
    console.log("The min dice rolled number is " + minimumKey + " and the rolled times is " + diceRegister.get(minimumKey));
}

/* Write a Program to generate a birth month of 50 individuals
between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print. */
{
    function getRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    let birthdays = new Map();
    while(birthdays.size != 50) {
        let birthDay = getRandomDate(new Date(1992,0,1), new Date(1993,11,31));
        let month = birthDay.getMonth();
        birthdays.set(birthDay,month);
    }

    let birthdaysClone = birthdays;
    for(let i = 0; i < 12; i++) {
        console.log("Birthdays in Month " + (i+1));
        let count = 0;
        for(let [key, value] of birthdaysClone) {
            if(value == i) {
                console.log(key);
                birthdaysClone.delete(key);
                count++;
            }
        }
        if(count == 0) {
            console.log("No Birthdays found in Month " + (i+1));
        }else {
            console.log(count + "Birthdays found in Month " + (i+1));
        }
    }
}