//part 1-a

for (let i = 0; i < 7; i++) {
    console.log(i);
    document.write(i);
    
}

//part 1-b

let number = parseInt(prompt("Enter input number ?"));

for (let i = 0; i < number; i++) {
    document.write(i);
    
}

//part 1-c
let number = parseInt(prompt("Enter input number ?"));

for (let i = 3; i < number; i++) {
    document.write(i);
}


//part 1-d
let endNumber = parseInt(prompt("Enter input number end ?"));
let startNumber = parseInt(prompt("Enter input number start ?"));

for (let i = startNumber; i < endNumber; i++) {
    document.write(i);
    
}

//part 1-e

let endNumber = parseInt(prompt("Enter input number end ?"));
let startNumber = parseInt(prompt("Enter input number start ?"));

for (let i = startNumber; i < endNumber; i+=3) {
    document.write(i);
    
}

//part 1-f

let endNumber = parseInt(prompt("Enter input number end ?"));
let startNumber = parseInt(prompt("Enter input number start ?"));
let stepNumber = parseInt(prompt("Enter input number step ?"));

for (let i = startNumber; i < endNumber; i+=stepNumber) {
    document.write(i);
    
}

//part 2

let inputNumber = parseInt(prompt("Enter input number ?"));
giaithua = 1;
for (let i = 1; i <= inputNumber; i++) {
    giaithua = giaithua * i;
    console.log(giaithua);
    
    
}

//part 3

let ageNumber = parseInt(prompt("Enter age number ?"));
 if (ageNumber <= 14) {
     document.writeln("You are not old enough to view this content !");
 } else if(ageNumber > 14){
     document.writeln("Enjoy !");
 }

 //part 4

 let inputNumber = parseInt(prompt("Enter your number ?"));

 if (inputNumber < 4.5) {
     document.writeln("Lower half of 9");
 }else if(inputNumber > 4.5){
     document.writeln("Upper half of 9");
 }

//  part 5
let inputNumber = parseInt(prompt("Enter your number ?"));
let inputNumbercheck = parseInt(prompt("Enter your number check ?"));

if (inputNumber < inputNumbercheck/2) {
    document.writeln(inputNumber + " is in lower half of " + inputNumbercheck);

}else if(inputNumber > inputNumbercheck/2){
    document.writeln(inputNumber + " is higher half of " + inputNumbercheck);
}


//part 6

let inputNumber = parseInt(prompt("Enter your number ?"));

if(inputNumber%2 != 0){
    document.writeln( inputNumber + " is an odd number.");
}else{
    document.writeln(inputNumber + " is an even number");
}

//part 7-a
let number = 6;

L = Math.ceil(number/2);
document.writeln("L = " + L);

H = number - L;
document.writeln("H = " + H);

//part 7-b

let inputNumber = parseInt(prompt("Enter your number ?"));

L = Math.ceil(inputNumber/2);
document.writeln("L = " + L);

H = inputNumber - L;
document.writeln("H = " + H);

//part 7-c

let a = 0;
let b = 1;
for (let i = 0; i < 8; i++) {
    // document.writeln("0 1");
    console.log(a);
    console.log(b);
        
    
}
//part 7-d

let inputNumber = parseInt(prompt("Enter your number ?"));
let a = 0;
let b = 1;

for (let i = 0; i < inputNumber; i++) {
    if (i%2 == 0) {
        console.log(a);
    }else{
        console.log(b);
    }
}

//part 8

let inputHeight = parseInt(prompt("Nhập chiều cao vào. OK?"));
let height = inputHeight/100;
let inputWeight = parseFloat(prompt("Nhập cân nặng vào hiểu chưa ?"));
let BMI = inputWeight/(height*height);

if (BMI < 16 ) {
    document.writeln("Thiếu cân nặng rùi m ưi.");

}else if(BMI >= 16 && BMI < 18.5){
    document.writeln("Thiếu cân nữa m.");

}else if(BMI >= 18 && BMI < 25 ){
    document.writeln("Body chuẩn vãi chưởng nghe bạn");

}else if(BMI >= 25 && BMI < 30){
    document.writeln("Thừa cân nghe mậy");

}else if(BMI > 30){
    document.writeln("Béo phì máu nhiễm mỡ nghe man");
}else{
    document.writeln("Suy dinh dưỡng hoặc một cái gì đó")
}
