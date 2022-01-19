type Combine = number | String;

function add(n1: Combine, n2: Combine, resultIn: 'as-number' | 'as-String') {
    if (resultIn === 'as-number') {
        return +n1 + +n2;
    } else if (resultIn === 'as-String') {
        return n1.toString()+n2.toString();
    }
    
}
 enum Role {'ADMIN', 'USER1', 'USER2'};
const number1 = 10;
const number2 = 2.8;
const person = {
    name : 'vijay',
    age : 10,
    lang : ['Tamil', 'English'],
    role : Role.ADMIN,
    //dept : 'ADMIN' | 'TECH'
};

const result = add(number1, number2, 'as-number');
console.log(result);
console.log(person.name + ' is '+ person.age+' old.');

console.log(add('vijay', 'chandar', 'as-String'));

for (const lan of person.lang) {
    console.log(lan);
}

 