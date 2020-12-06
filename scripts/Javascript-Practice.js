// test for bill 275,40,430
const bill=40;
let tip;
//console.log('hello');

const final = ((bill >= 50 && bill <= 300) ?  tip = bill*.15 :  tip = bill*.20) + bill;

console.log(`Bill is :  \$${bill}`);
console.log(`Tip is: \$${tip}`);
console.log(`Final cost is:  \$${final}`);