const input = document.getElementById('number');
const output = document.getElementById('output');
const button = document.getElementById('convert-btn');

button.addEventListener('click', check);
let str = ''

function outputEmerg() {
    output.style.backgroundColor = '#9a4700';
    output.style.fontWeight = 'bold';
    output.style.boxShadow = '5px 5px black'
}
function outputReg() {
    output.style.backgroundColor = '#9a4700';
    output.style.color = 'black';
    output.style.fontWeight = 'default';
}
function check() {
    output.style.display = 'block';
    str = document.getElementById('number').value;

    if (str == '') {
        output.innerText = 'Please enter a valid number';
        outputEmerg()
        return
    } else if (str == 0) {
        output.innerText = 'Please enter a number greater than or equal to 1';
        outputEmerg();
        return
    } else if (str >= 4000) {
        output.innerText = 'Please enter a number less than or equal to 3999';
        outputEmerg();
    } else if (str < 0) {
        output.innerText = 'Please enter a number greater than or equal to 1';
        outputEmerg();
    } else {

        outputReg()
        const int = parseInt(str, 10);
        console.log(int);
        convert(str);
        return
    }
}

function convert(i) {
    const num = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    const inNum = []
    num.forEach((arr) => {
        while (i >= arr[1]) {
            inNum.push(arr[0]);
            i -= arr[1];

            output.innerText = `${inNum.join('')}`
        }
    })
}
