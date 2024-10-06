let basicNum = {
    0: '',
    1: ' one',
    2: ' two',
    3: ' three',
    4: ' four',
    5: ' five',
    6: ' six',
    7: ' seven',
    8: ' eight',
    9: ' nine',
    10: ' ten',
    11: ' eleven',
    12: ' twelve',
    13: ' thirteen',
    14: ' fourteen',
    15: ' fifteen',
    16: ' sixteen',
    17: ' seventeen',
    18: ' eighteen',
    19: ' nineteen',
}

let tens = {
    0: '',
    2: ' twenty',
    3: ' thirty',
    4: ' forty',
    5: ' fifty',
    6: ' sixty',
    7: ' seventy',
    8: ' eighty',
    9: ' ninety',
    20: ' twenty',
    30: ' thirty',
    40: ' forty',
    50: ' fifty',
    60: ' sixty',
    70: ' seventy',
    80: ' eighty',
    90: ' ninety',
}
let arr;

module.exports = function toReadable(number) {
    arr = [...number.toString()];
    if (number == 0) { return 'zero' };
    if (number < 20) { return basicNum[number].trimStart() };
    if (number == 20 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90) { return tens[number].trimStart() };
    if (number > 20 && number < 100) { return (`${tens[arr[0]]}${basicNum[arr[1]]}`).trimStart() };
    if (number > 99) {
      if (arr[1] + arr[2] == '00') { return (`${basicNum[arr[0]]} hundred`).trimStart() };
      if (arr[1] == 0) { return (`${basicNum[arr[0]]} hundred${basicNum[arr[2]]}`).trimStart() }
      if (arr[1] + arr[2] < 20) { return (`${basicNum[arr[0]]} hundred${basicNum[arr[1] + arr[2]]}`).trimStart() }
      else { return (`${basicNum[arr[0]]} hundred${tens[arr[1]]}${basicNum[arr[2]]}`).trimStart() };
    }
}
