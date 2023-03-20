let massMark = 95;
let heightMark = 1.88;

let massJohn = 85;
let heightJohn = 1.76

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);
let markHigherBMI;
if (bmiMark > bmiJohn)
    console.log(`Mark's BMI is higher than John`)
else
    console.log(`John's BMI is higher than Mark`);