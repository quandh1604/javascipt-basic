    function startWith(str){
    return str.indexOf("Java")===0;
  }
 console.log(startWith("Java"));

 //
 
    let arr = [5, -29, 6, 18, -10, 5];
  function findMaxDiff(arr) {
    if(arr.length<2)
      return 0;
    else{
        var maxDiff=0;
        for(var i=1;i<arr.length;i++)
          maxDiff=(maxDiff<Math.abs(arr[i]-arr[i-1]))? Math.abs(arr[i]-arr[i-1]): maxDiff;
        return maxDiff;
    }
  }
  console.log(findMaxDiff(arr));

  //

  let array = [1, 2, 3, 4, 5, 6, 7];
  let n = Number(prompt("Input number"));
  function first(array, n) {
    if(n===undefined)
     return [array[0]];
    else if(n<=0)
     return [];
    else if(n<=array.length)
        return array.splice(0,n);
    else 
    return array;
  }
console.log(first(array, n));

// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
// - array: mảng gốc
// - n: số phần tử trả về

//  Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
//  Nếu có 1 số âm và một số dương thì trả về true. 
// Các trường hợp khác trả về false. 
// Số 0 là số không âm cũng không dương
// Tham số:
//  - number1: số nguyên thứ nhất
// - number2: số nguyên thứ hai

// Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
// nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
// Example: 
// n = 20 // return 14
// n = 5 // return 8


// Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số

// Input: là một dãy số.
// Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

// Ví dụ:

// Input: [1, 2, 3, 8, 9]
// Output: 8 (là hiệu của 9 và 1)

//checkInt

let number1 = Number(prompt("Enter number 1"));
let number2 = Number(prompt("Enter number 2"));

function checkInt(number1, number2) { 
  if (number1*number2 < 0) {
    return true;
  }else{
  return false;
  }

  //or
  return (number1*number2 < 0) ? true:false;
}
console.log(checkInt(number1, number2));

//function Js

  let inputNumber = Number(prompt("Enter number"));
function difference(inputNumber){
    if (inputNumber > 13) {
      return Math.abs(inputNumber - 13)*2;
    }else{
      return Math.abs(inputNumber - 13);
    }

    //or

    return (n>13)? Math.abs((inputNumber-13))*2:Math.abs(inputNumber-13);
}
console.log(difference(inputNumber));


//

let arr = [];
let inputNumber = prompt("Enter number: ").split(",").map(Number);
arr.push(inputNumber);

console.log(arr);

function findMaxDiff(arr){
  let maxDiff = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (maxDiff < Math.abs(arr[i] - arr[j]))
        maxDiff = Math.abs(arr[i] - arr[j]);
    }
    return maxDiff;
    
  }
}

console.log(findMaxDiff(arr));
