"use strict";
function add(n1, n2, resultIn) {
    if (resultIn === 'as-number') {
        return +n1 + +n2;
    }
    else if (resultIn === 'as-String') {
        return n1.toString() + n2.toString();
    }
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER1"] = 1] = "USER1";
    Role[Role["USER2"] = 2] = "USER2";
})(Role || (Role = {}));
;
var number1 = 10;
var number2 = 2.8;
var person = {
    name: 'vijay',
    age: 10,
    lang: ['Tamil', 'English'],
    role: Role.ADMIN,
};
var result = add(number1, number2, 'as-number');
console.log(result);
console.log(person.name + ' is ' + person.age + ' old.');
console.log(add('vijay', 'chandar', 'as-String'));
for (var _i = 0, _a = person.lang; _i < _a.length; _i++) {
    var lan = _a[_i];
    console.log(lan);
}
