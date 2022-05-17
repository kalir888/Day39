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