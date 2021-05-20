//part 1



let number = [];
 let inputNumber = prompt("Enter number");
 inputNumber = inputNumber.split(",").map(Number);
    sum = 0;
 for (let i = 0; i < inputNumber.length; i++) {
     sum += inputNumber[i];
     
 }
 console.log(sum); document.write(sum);


//part 2

let number = [];
 let inputNumber = prompt("Enter number");
 inputNumber = inputNumber.split(",").map(Number);
 let sort = inputNumber.sort(function(a, b) {return a-b});
 console.log(sort);
    document.write("so nho nhat la : " + sort[0]);
//   console.log(sort[0]);


//part 3

let number = [3, 4, 5, 6, 7, 8, 9, -88, 2, -9];
let inputNumber = Number(prompt("Enter number "));

for (let i = 0; i < number.length; i++) {
    if (inputNumber === number[i]) {
        document.write("số bạn tìm nằm ở vị trí thứ" + [i]); 
    }
    else{
        document.write(inputNumber + "is NOT found in my array");
    }
    
}

//part 4.1

const number = [3, 9, 15, 36, 17, 6];
for (let i = 0; i < number.length; i++){
    document.write("\n" + number[i])
}

//part 4.2

const number = [3, 9, 15, 36, 17, 6];
document.write(Math.max(...number));

//part 4.3

const number = [3, 9, 15, 36, 17, 6];
// console.log(number.indexOf(36));

let index = number.indexOf(36);
number[index] = 8;
document.write(number + "\n");
// console.log(number);


// //part 4.4
for (let i = 0; i < number.length; i++) {
    number[i] += 50;
 }
 document.write(number + "\n");


// //part 4.5 + 4.6


for (let j = 0; j < 4; j++) {
    sum = 0;
    for (let i = 0; i < number.length; i++) {
        number[i] += 50;

        sum += number[i];
        console.log(sum);
     }
     document.write(number + "\n");

    // sum += number[j];
    // console.log(sum);
}
 console.log(number);

 document.write("\n My flock has size in total :" + sum*2);


 //part 5
 let name = [];   
 let inputName = prompt("Enter your name");
 name.push(inputName);
 let names = '';
 let outputName = '';
 for (let i = 0; i < name.length; i++) {
     names += name[i] + ' , ';
     outputName += '<' + name[i] + '>';
     
 }
 alert(names + " => " + outputName);


 //part 6

 let number = [];
 let inputNumber = prompt("Enter number");
 inputNumber = inputNumber.split(",").map(Number);
 console.log(inputNumber);

 for (let i = 0; i < inputNumber.length; i++) {
    if (inputNumber[i]%2 != 0) {
        console.log(inputNumber[i]);
        document.write( "So le la : " + inputNumber[i] + "\n");
    }   
 }