//Java Try1?!:
//var - старе, не використовуємо
//let - звичайна зміна
//const - стала зміна

//Primitive Data Types:
//Number
//String
//Boolean - trye, false
//null - пусто
//undefined - не визначено
//Object - об'єкт
//Symbo - унікальний незміний ідентифікатор

let bestGreetings = 'Hello';
alert(bestGreetings);
bestGreetings = 'JavaScript!';
alert(bestGreetings);

const age = Number(prompt('Enter your age'));
alert('Your age is: ' + age);

const nextAge = ageOne(age);
alert('Next year you will be: ' + nextAge);

//logical operators
// > < >= <= != !== == === || &&
if (age >=18) {
    alert('You are adult!');
} else {
    alert('You are underage!');
}

function addOne(num) {
    const incremented = num + 1;
    return incremented;
}