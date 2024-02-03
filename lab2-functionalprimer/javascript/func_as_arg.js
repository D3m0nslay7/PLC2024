const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Create list of ints from a to b, Haskell equivalent [a..b]
function arrFunc(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

function applicatorFunc(inpFunc, arg, a, b) {
    if (arg == 's') {
        const arr = inpFunc(a, b);
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum / 5;
    }
    else {
        const arr = inpFunc(a, b);
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    }
}



readline.question('Input the first integer: ', a => {

    readline.question('Input the second integer: ', b => {
        readline.question('please input s if you want to divide the sum by 5 or anything else if you just want the sum of both integers: ', arg => {

            let x = applicatorFunc(arrFunc, arg, parseInt(a), parseInt(b));
            console.log(x);
            readline.close();
        });
    });
});


