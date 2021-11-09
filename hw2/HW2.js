let integer = prompt('Enter integer number:', '3');

const fibonacci = (f0, f1, n) => {
    if (n === 0 || n === 1) return f0;
    if (n === 2) return f1;
    if (n >= 3) {
        return fibonacci(f0, f1, n - 1) + fibonacci(f0, f1, n - 2);
    }
}
// console.log( fibonacci(0, 1, 7))
document.write( fibonacci(0, 1, 7))