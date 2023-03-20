let massMark = 95;
let heightMark = 1.88;

let massJohn = 85;
let heightJohn = 1.76

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);
let markHigherBMI;
if (bmiMark > bmiJohn)
    markHigherBMI = true;
else
    markHigherBMI = false;
console.log(markHigherBMI);