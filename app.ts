function addNumber( n1: number, n2: number) {
    return n1+n2;
}

function printLine(n : number) {
    console.log('Result is ' + n);
}

function addWithCallback (n1: number, n2: number, call: (num: number)  => void) {
    const result = n1 + n2;
    call(result);
}

printLine(addNumber(8,2));

let fun: (a: number, b: number) => number;
fun = addNumber;

addWithCallback(8, 10, (result) => {
    console.log(result);
});

const button = document.querySelector('button')!;
button.addEventListener('click', () => {
    console.log("button clicked");
})

