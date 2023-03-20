const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100)
    console.log('Dolphins win');
else if (dolphinsAverage < koalasAverage && koalasAverage >= 100)
    console.log('Koalas win');
else if (dolphinsAverage === koalasAverage && dolphinsAverage + koalasAverage >= 200)
    console.log('Dolphins and Koalas are draw');
else
    console.log('No team win');