//! Examples:

//! 1.Template Literals

// var a = 10;
// var b = 20;
// var c = a+b
// console.log(`the value of "a","b" and "c" is: ${a} ${b} ${c}`)   //the value of "a","b" and "c" is: 10 20 30
// console.log("the value of a ,b and c is "+a,b,c)   //the value of a ,b and c is 10 20 30

// *************************************************************************************************************************

//! 2.this keyword

// const car1 ={
//     Brand: "Hyundai",
//     model: "i20",
//     color: "blue",
//     year: "2023",
//     drive: function(){
//        console.log(`you drive the ${this.Brand}`) 
//     }
// }
// const car2 ={
//     Brand : "Volvo",
//     model: "x90",
//     color: "black",
//     year: "2023",
//     drive: function(){
//         console.log(`you drive the ${this.Brand}`) 
//      }
// }
// car1.drive(); //you drive the Hyundai
// car2.drive(); //you drive the Volvo

// *************************************************************************************************************************

//! 3. Class using method

// class Car{
//     drive(){
//      console.log("Driving the car")
//     }
//     brake(){
//      console.log("applying the brake")
//     }
// }

// we are creating a car object using car class
// let car1 = new Car()                   // let objectname = new classname()
// car1.drive(); //Driving the car
// car1.brake(); //applying the brake

// we can resue the class n number of times
// let car2 = new Car()                   // let car = new classname()
// car2.drive(); //Driving the car
// car2.brake(); //applying the brake

// *************************************************************************************************************************

//! 4. Class using constructor(properties)

// class Car{
//    constructor(brand,model,color,year){
//   this.brand=brand;
//   this.model=model;
//   this.color=color;
//   this.year=year;
//    }
//    drive(){
//         console.log("Driving the car")
//        }
//        brake(){
//         console.log("applying the brake")
//        }
// } 
// let car1 = new Car("Hyundai","i20","red",2023)
// let car2 = new Car("Volvo","X90","black",2022)
// let car3 = new Car("Nexa","Baleno","blue",2023)
// let car4 = new Car("Mahindra","Thar","white",2022)

// console.log(`All the car colors :
// "car1" :${car1.color} 
// "car2": ${car2.color} 
// "car3": ${car3.color} 
// "car4": ${car4.color}`)  // All the car colors :
                           // "car1" :red 
                           // "car2": black 
                           // "car3": blue 
                           // "car4": white


// console.log(car1);
// console.log(car1.name);
// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);    // Car { brand: 'Hyundai', model: 'i20', color: 'red', year: 2023 }

// console.log(car2);
// console.log(car2.brand);
// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);    // Car { brand: 'Volvo', model: 'X90', color: 'black', year: 2022 }

// console.log(car3);
// console.log(car3.brand);
// console.log(car3.model);
// console.log(car3.color);
// console.log(car3.year);    // Car { brand: 'Nexa', model: 'Baleno', color: 'blue', year: 2023 }


// console.log(car4);
// console.log(car4.brand);
// console.log(car4.model);
// console.log(car4.color);
// console.log(car4.year);   //  Car { brand: 'Mahindra', model: 'Thar', color: 'white', year: 2022 }

// *************************************************************************************************************************

//! 5.getter and setters

// var users = {
//     names: "Bob" //get
// }
// users.names ="Alice" //set
// console.log(users.names);    // Alice

// ***********         ****************          ***************         *********

// var users={
//  get name(){
//     console.log("getting a name")
//   return this._name
//  },
//  set name(n){
//   console.log("setting a name"+" "+n)
//   this._name =n
//  }
// }
// users.name ="Alice" 
// console.log(users.name);

// ********* 1.Set the value and 2.Get the value   ********************

// So output "setting a name" Alice
//          "getting a name"
//           Alice 

// *************************************************************************************************************************

//! Real time Example1 for Class:
// class Car{
//     constructor(power){
       
//         this._power = power;
//     }
//     get power(){
       
//         return `${this._power}hp` // 400hp
//     }
//    set power(n){
      
//         retrun `${this._power=n}` // 400
//     }
// }
// let car1 = new Car(400);
// console.log(car1.power)

// *************************************************************************************************************************

//! Real time Example2 for Class:

// class Car{
//     constructor(power){
//         this._gas=25;
//         this._power = power;
//     }
//     get power(){
       
//         console.log(`${this._power}hp`) // 400hp
//     }
//     get gas(){
//         return `${this._gas}l (${this._gas /50*100}%)`;
//     }
//     set gas(value){
//          if(value>50){
//             value = 50;
//          }
//          else if (value<0){
//             value=0;
//          }
//        this._gas=value
//     }
//     set power(n){
      
//         console.log(`${this._power=n}`)  // 400
//     }
// }
// let car1 = new Car(400);
// car1.gas=100;
// console.log(car1.power)
// console.log(car1.gas)

// *************************************************************************************************************************