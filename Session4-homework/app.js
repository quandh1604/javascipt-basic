let product = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'white',
        category: 'Charger'
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone'
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone'
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone'
    }

]

for (let i = 0; i < product.length; i++) {
    // for (const key in product) {
    //     // if (Object.hasOwnProperty.call(object, key)) {
            
    //     // }
    // }

    console.log([i] + '.' + 'Name :' + product[i].name);
    console.log('Price :' + product[i].price);
    console.log('-----------------------------------');
    
}

// part 1.1
let input = parseInt(prompt("Input number"));
    if (input === 0) {
        console.log('Name :' + product[0].name);
        console.log('Brand :' + product[0].brand);
        console.log('Price :' + product[0].price);
        console.log('Color :' + product[0].color);
        console.log('Category :' + product[0].category);
    }else if(input === 1){
        console.log(product[1].name);
        console.log('Brand :' + product[1].brand);
        console.log('Price :' + product[1].price);
        console.log('Color :' + product[1].color);
        console.log('Category :' + product[1].category);
    }else if(input === 2){
        console.log(product[2].name);
        console.log('Brand :' + product[2].brand);
        console.log('Price :' + product[2].price);
        console.log('Color :' + product[2].color);
        console.log('Category :' + product[2].category);
    }else if(input === 3){
        console.log(product[3].name);
        console.log('Brand :' + product[3].brand);
        console.log('Price :' + product[3].price);
        console.log('Color :' + product[3].color);
        console.log('Category :' + product[3].category);
    }else{
        alert("Nhập từ 0 - 3");
    }

    

// part 1.2
    let input = prompt("Input category: ");
    for (let i = 0; i < product.length; i++) {
        if (input === 'Charger' && product[i].category == 'Charger') {
            console.log( 'Name :' + product[i].name);
            console.log( 'Price :' + product[i].price);

        }else if(input === 'Phone' && product[i].category == 'Phone'){
            console.log( 'Name :' + product[i].name);
            console.log( 'Price :' + product[i].price);
        }else{
            alert("Danh mục bạn tìm không có");
        }
        // console.log(product[i].category);
    }

// part 1.3+1.4
for (let i = 0; i < product.length; i++) {
    // const element = array[i];
    // product[i].Providers = "jfkdjfks";
if ([i] == 0) {
    product[i].Providers = "Phukienzero Dientuccc";
}else if([i] == 1) {
    product[i].Providers = "Tgdd";
}else if([i] == 2) {
    product[i].Providers = "Tgdd";
}else if([i] == 3) {
    product[i].Providers = "Tgdd";
}else{
    alert("Một hãng khác")
}
    
}
console.log(product);
console.table(product);

//part 1.4

let input = prompt("Input Providers");
for (let i = 0; i < product.length; i++) {
    if (input === 'Tgdd' && product[i].Providers == 'Tgdd') {
                console.log( 'Name :' + product[i].name);
                console.log( 'Price :' + product[i].price);
                console.log( 'Providers :' + product[i].Providers);
    
            }else if(input === 'Phukienzero Dientuccc' && product[i].Providers == 'Phukienzero Dientuccc'){
                console.log( 'Name :' + product[i].name);
                console.log( 'Price :' + product[i].price);
                console.log( 'Providers :' + product[i].Providers);

            }else{
                console.log("Nhà cung cấp bạn tìm không có");
            }
            // console.log(product[i].category);
}

//part 2
 let learnings = [
     {
         name : 'HTML',
         complate : false,
     },
     {
         name : 'CSS',
         complate : false,
     },
     {
        name : 'Basic of Javascript',
        complate : false,
     },
     {
         name : 'Node Package Manager (npm)',
         complate : false,
     },
     {
         name : 'Git',
         complate : false,
     }
 ]
 console.log('Hi there, this is your learnings tasks to front-end developer career');
 for (let i = 0; i <= learnings.length - 1; i++) {
        // for (const key in product) {
        //     // if (Object.hasOwnProperty.call(object, key)) {
                
        //     // }
        // }
    
        console.log([i] + '.' + 'Name :' + learnings[i].name);
        console.log('Price :' + learnings[i].complate);        
    } 
//part 2.1 + 2 + 3 + 4 + 5
let input = prompt("Nhập 1 trong những (New, Delete, Update, Complate)");
let obj = {
    name : name,
    complete : false
};
if (input === 'New') {
    obj.name = prompt("Nhập tên môn học");
    obj.complate = false;
    learnings.push (obj);
    console.log(learnings);
}else if (input === 'Update') {
    let inputUpdate = Number(prompt("Vị trí update"));
    if (inputUpdate > learnings.length || inputUpdate < 0) {
        alert("Không tìm thấy vị trí update")
    }else{
        learnings[inputUpdate].name = prompt("hãy nhập cái m update");
    }
    console.log(learnings);
}else if(input === 'Complate'){
    let inputComplate = Number(prompt("vi tri hoan thanh"));
    if (inputComplate > learnings.length || inputComplate < 0) {
        console.log("k co vi tri complate");
    }else{
        learnings[inputComplate].complate = true;
    }
    console.log(learnings);
}else if(input === 'Delete'){
    let inputDelete = Number(prompt("Vị trí m muốn xóa"));
    if (inputDelete > learnings.length || inputDelete < 0) {
        console.log("K có vị trí muốn xóa");
    }else{
        learnings.splice(inputDelete, 1);
        // delete learnings[inputDelete];
    }
    console.log(learnings);
}

//part 2.6
console.log('Hi there, this is your learnings tasks to front-end developer career');
for (let i = 0; i < learnings.length; i++) {
       // for (const key in product) {
       //     // if (Object.hasOwnProperty.call(object, key)) {
               
       //     // }
       // }
   
       console.log([i] + '.' + ' [ ] ' + learnings[i].name);
   }

// EM KHÔNG HIỂU YÊU CẦU BÀI 2.6 HY VỌNG ANH CÓ THỂ REVIEW CODE GIÚP EM :D 




