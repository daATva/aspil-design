const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click' , () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.


  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


    let sum = 0
    for( let key in salaries){
        sum += salaries[key]
    }

console.log(sum)
    
    // до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  }
  


function multiplyNumeric(obj){
    for( let key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);

console.log(menu)

// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

  

// calculator.read = function(){
//     a = prompt('Введите значение a');
//     b = prompt('Введите значение b'); 
//     this.a = a;
//     this.b = b;
// }
// calculator.sum = function(a,b){
//     const sum = a + b
//     return sum
// }
// calculator.mul = function(a,b){
//     const mult = a * b
//     return mult
// }

// function Calculator () {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// let calculators = new Calculator();
// calculator.read();