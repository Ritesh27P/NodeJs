// let name = 'Max';

// console.log(name);

// const add = (a, b) => a+b;

// const addOne = a => a + 1;

// console.log(add(5, 6));


// arr = ['hii', 'hello', 'gm', 'gn']

// for(let str of arr){
//     console.log(str);
// }


// const person = {
//     name: 'Ritesh',
//     age: 29,
//     greet(){
//         console.log('Hii, I am ' + this.name);
//     }
// };

// const printName = ( {name} ) => {
//     console.log(name);
// }

// printName(person);

// Async Code And Promises

const fetchData = callback =>{
    const promise = new Promise((resolve, reject) =>{
        setTimeout( ()=>{
            callback('Done');
        }, 1500)
    })

}

setTimeout( ()=>{
    console.log('Timer is done')
    fetchData(text => {
        console.log(text);
    })
}, 2000);

console.log('hii');
console.log('hello');

