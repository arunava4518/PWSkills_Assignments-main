function calculateSimpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    return interest;
}


let principal = 1000; 
let rate = 5;         
let time = 2;       

let simpleInterest = calculateSimpleInterest(principal, rate, time);
console.log(`Simple Interest: $${simpleInterest}`);
