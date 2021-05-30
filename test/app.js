// 1
let input = prompt("nhập một chuỗi");
 function reverse(input) {
    var i = input.length,o = '';
    while (i > 0) {
    o += input.substring(i - 1, i);
    i--;
    }
    return o;
 }

 console.log(reverse(input));
// 2
 let str = prompt("nhập một chuỗi");

 function capitalize(str) {
	var strArr=str.split(" ");
	for(var i=0;i<strArr.length;i++){
      var charArr=strArr[i].split("");
	    charArr[0]=charArr[0].toUpperCase();
      strArr[i]=charArr.join("");
	    
	}
	return strArr.join(" ");
}

console.log(capitalize(str));
// 3
let Arr=[1,2,3,3,4,5,4,4,4,5,5];
const uniqueSet = new Set(Arr);
const backToArray = [...uniqueSet];
console.log(backToArray);

// 4

let Staff = [
    { 
        Name : 'John', 
        Age : 27, 
        Salary : 5, 
        Position : 'developer full-stack'
    },
    { 
        Name : 'Linda', 
        Age : 28, 
        Salary : 3,
        Position : 'mentor tester' 
    },
    { 
        Name : 'Paul',
        Age : 32,
        Salary : 8,
        Position : 'CEO'   
    }
];
    

let input = prompt("nhập C/R/U/D");
 let newStaff = {
     Name: name,
     Age: age,
     Salary: salary,
     Position: position
 }

 if (input === 'C') {
     newStaff.Name = prompt("nhập tên");
     newStaff.Age = Number(prompt("nhập tuổi"));
     newStaff.Salary = Number(prompt("lương của bạn"));
     newStaff.Position = prompt("vị trí của bạn");

     Staff.push(newStaff);
     console.log(Staff);
 }else if( input === 'R') {
     console.log(Staff);
 }else if(input === 'U'){
     let inputUpdate = Number(prompt("Vị trí muốn update"));
     if (inputUpdate > Staff.length || inputUpdate < 0) {
         console.log("không có vị trí update");
     }else{
         Staff[inputUpdate].Name = prompt("nhập tên update");
         Staff[inputUpdate].Age = Number(prompt("tuổi update"));
         Staff[inputUpdate].Salary = Number(prompt("LƯƠNG CUA BẠN"));
         Staff[inputUpdate].Position = prompt("vị trí của bạn");

         console.log(Staff);
     }
 }else if(input === 'D'){
    const index = Number(prompt("nhập vị trí index"))
}


// let date = Number(prompt("nhập ngày"));
// let month = Number(prompt("nhập tháng"));
// let year = Number(prompt("nhập năm"));
//  if (date >= 1 && date <= 31) {
     
//  }


// 5
let date = prompt("Nhap ngay thang nam (mm/dd/yy)");
function isValidDate(date) {
    let temp = date.split('/');
    // console.log(temp);
    // let d = new Date(temp[2] + '/' + temp[0] + '/' + temp[1]);
    // return (d && (d.getMonth() + 1) == temp[0] && d.getDate() == Number(temp[1]) && d.getFullYear() == Number(temp[2]));
}
    alert("Ngay " + date + " la ngay hop le \n Va ngay tiep theo la... cái gì đó chưa tìm ra :)) ");
console.log(isValidDate(date));

