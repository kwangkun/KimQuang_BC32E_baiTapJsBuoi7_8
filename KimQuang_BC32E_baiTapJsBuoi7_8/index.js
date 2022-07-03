var arrN = [];
document.querySelector('#btnAdd').onclick = function () {
    // Input: n = number
    n = Number(document.querySelector('#nhapSo').value);

    // Output: kq = ''
    var kq = '';

    // Process:
    arrN.push(n);
    kq = arrN + ', ';

    document.querySelector('#displayN').innerHTML = kq;
};

// Bài 1:
document.querySelector('#btnB1').onclick = function () {
    // Input: arrN
    // Output: ketQua = 0
    var ketQua = 0;

    // Process:
    for (index = 0; index < arrN.length; index++) {
        if (arrN[index] > 0) {
            ketQua = ketQua + arrN[index];
        };
    };

    document.querySelector('#kqB1').innerHTML = 'Tổng số dương = ' + ketQua;
};

// Bài 2:
document.querySelector('#btnB2').onclick = function () {
    // Input: arrN
    // Output: count = 0
    var count = 0;

    // Process:
    for (index = 0; index < arrN.length; index++) {
        if (arrN[index] > 0) {
            count++;
        };
    };

    document.querySelector('#kqB2').innerHTML = 'Trong mảng có ' + count + ' số dương';
};

// Bài 3:
function timIndexMax(arrNumber) {
    var indexMax = arrNumber[0];
    var max = 0;
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > max) {
            max = arrNumber[index];
            indexMax = index;
        };
    };

    return indexMax;
};

function timIndexMin(arrNumber) {
    var min = arrNumber[0];
    var indexMin = 0;
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] < min) {
            min = arrNumber[index];
            indexMin = index;
        };
    };

    return indexMin;
};

document.querySelector('#btnB3').onclick = function () {
    // Input: arrN
    // Output: ketQua = '', nMin = 0
    var ketQua = '';
    var nMin = 0;

    // Process:
    var indexMin = timIndexMin(arrN);
    nMin = arrN[indexMin];
    ketQua = 'Số nhỏ nhất trong mảng là: ' + nMin;

    document.querySelector('#kqB3').innerHTML = ketQua;
};

// Bài 4: 
document.querySelector('#btnB4').onclick = function () {
    // Input: arrN
    // Output: ketQua = '', nMin = 0
    var ketQua = '';
    var nMin = 0;
    var newArr = [];

    // Process:
    for (index = 0; index < arrN.length; index++) {
        if (arrN[index] > 0) {
            newArr.push(arrN[index]);
        };
    };
    if (newArr.length > 0) {
        for (index = 0; index < newArr.length; index++) {
            var indexMin = timIndexMin(newArr);
            nMin = newArr[indexMin];
            ketQua = 'Số dương nhỏ nhất trong mảng là: ' + nMin;
        };
    } else {
        ketQua = 'Không có số dương trong mảng';
    };

    document.querySelector('#kqB4').innerHTML = ketQua;
};

// Bài 5:
function findEven(arrNumber) {
    var even = 0;
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] % 2 === 0) {
            even = arrNumber[index];
        };
    };

    return even;
};
document.querySelector('#btnB5').onclick = function () {
    // Input: arrN
    // Output: ketQua = ''
    var ketQua = '';

    // Process:
    var even = findEven(arrN);
    ketQua = 'Số chẵn cuối cùng trong mảng là: ' + even;

    document.querySelector('#kqB5').innerHTML = ketQua;
};

// Bài 6:
document.querySelector('#btnB6').onclick = function () {
    // Input: index1, index2 = number
    var index1 = Number(document.querySelector('#soB6_1').value);
    var index2 = Number(document.querySelector('#soB6_2').value);
    var temp = arrN[index1];

    // Output: ketQua = ''
    var ketQua = '';

    // Process:
    arrN[index1] = arrN[index2];
    arrN[index2] = temp;
    ketQua = arrN;

    document.querySelector('#kqB6').innerHTML = ketQua;
};

// Bài 7:
document.querySelector('#btnB7').onclick = function () {
    // Input: arrN
    // Output: ketQua = ''
    var ketQua = '';


    // Process:
    var arrSortNumber = arrN.sort(function (b, a) {
        return b - a;
    });

    ketQua = 'Mảng sau khi sắp xếp tăng dần: ' + arrSortNumber;

    document.querySelector('#kqB7').innerHTML = ketQua;
};

// Bài 8:
function kTSNT(number) {
    var check = true;
    for (var index = 0; index <= number / 2; index++) {
        if (number % index == 0) {
            check = false;
            break;
        };
    };

    return check;
};

document.querySelector('#btnB8').onclick = function () {
    // Input: arrN
    // Output: ketQua = ''
    var ketQua = '';

    // Process:
    for (index = 0; index < arrN.length; index++) {
        var check = kTSNT(arrN[index]);
        if (check) {
            break;
        };
        ketQua = 'Số nguyên tố đầu tiên trong mảng là: ' + arrN[index];
        break;
    };

    document.querySelector('#kqB8').innerHTML = ketQua;
};

// Bài 9:
document.querySelector('#btnB9').onclick = function () {
    // Input: arrN
    // Output: ketQua = '', count = 0
    var ketQua = '';
    var count = 0;

    // Process:
    for (var index = 0; index < arrN.length; index++) {
        if (Number.isInteger(arrN[index])) {
            count++;
        };
    };
    ketQua = 'Mảng có ' + count + ' số nguyên';


    document.querySelector('#kqB9').innerHTML = ketQua;
};

// Bài 10:
document.querySelector('#btnB10').onclick = function () {
    // Input: arrN
    // Output: ketQua = '', am = 0, duong = 0
    var ketQua = '';
    var am = 0;
    var duong = 0;

    // Process:
    for (index = 0; index < arrN.length; index++) {
        if (arrN[index] > 0) {
            duong++;
        } else {
            am++;
        };

        if (duong > am) {
            ketQua = 'Số dương > Số âm';
        } else if (duong < am) {
            ketQua = 'Số âm > Số dương';
        } else {
            ketQua = 'Số âm = Số dương';
        };
    };

    document.querySelector('#kqB10').innerHTML = ketQua;
};