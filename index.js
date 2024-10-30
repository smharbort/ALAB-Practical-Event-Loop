// PART ONE
let count = 0;  // I got 8968

function increment (n) {
    
    try {

        n++;
        count++;

        increment(n);

    } catch (err) {
        console.log(err)
        console.log(" counter: " + count)
    }
}
console.log(increment(26))

// PART TWO
/* I would use the .flat() method, but I'm not sure how to implement trampolining yet to achieve the desired result
on a dataset of arbitrary length nesting. Will continue to look into this */

// PART THREE
const holdStuff = document.getElementById("hold-stuff");

function allPrimesBetween (n) {
    
}