let arr  = ['a','b','c'];

//tanpa menggunakan arrow
//arr.forEach(function (m,i) {
//    console.log('item  :' + m + ' index ke : '  + i)
//});


//menggunakan arrow (2 parameter) pada javascript
//arr.forEach((item,index)=>{
//   console.log("item-arrow : " + item + " index-arrow : " + index);
//});

//cara-pertama =>  pada javascript
//arr.forEach(item =>{
//   console.log('item-arrow : ' + item);
//});

//cara-kedua => menggunakan arrow
//arr.forEach((item,index) => console.log('item : ' + item + ' index ke : ' + index));


/*menggunakan map tanpa arrow */
//let arrMap = arr.map(function(t,number){
//    return t  + "" + number;
//});
//console.log(arrMap);

/*menggunakan map menggunakan arrow*/
//let arrMap = arr.map((t,number)=> {return t + " "  + number});
//console.log(arrMap);


let helloWorld = () => {
    return "hello World";
}

console.log(helloWorld())

let parFunction = (a = helloWorld() , nama  = "arief") => {
    console.log('ini parFunction || nilai param = ' + a);
    console.log('nama user : ' + nama);
}

parFunction();

let obj = {
    item : ['Item A','Item B','Item C'],
    sayHello : function (){
        return this.nama;
    },
    getItem(){
        this.item.map((t)=>{
           console.log(t);
        });
    },
    nama : "arief"
};


console.log(obj.nama);
console.log(obj.sayHello());
obj.getItem();


//console.log(obj.sayMaps);



