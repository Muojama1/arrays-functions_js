// QUESTION No. 1
Mutating methods are ones that change the object after the method has been used. While Non-mutating methods do not change the object after the method has been used.
// mutating method
array.push
array.unshift
array.pop()
array.shift()
array splice method

// non-mutating method
array.concat() 
…array spread operator
array.filter()
array.slice()
array.map()



// QUESTION NO. 2
// 1. ADD 'Kotlin' to the end of the array
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages.splice (5, 0, 'Kotlin')
console.log (languages)

// 2. Add 'Java' after 'Ruby' 
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages.splice (3, 0, 'Java')
console.log (languages)

// 3. Remove the first item in the Array
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages.splice (0, 1,)
console.log (languages)

// 4. Add 'Scala' and 'Swift' to the beginning of the Array
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages.splice (0, 0, 'Scala', 'Swift')
console.log (languages)

// 5. Replace 'PHP' with 'Go' and 'Rust'
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages.splice (3, 1, 'Go', 'Rust')
console.log (languages)


// QUESTION No. 3
let fruit = ['apple', 'mango', 'banana',];
function changeFruit(fruit) {
    fruit[2] = 'orange';
    return fruit;
}
console.log(changeFruit(fruit))

value of fruit = [ 'apple', 'mango', 'orange' ]



// QUESTION No. 4
function findMaxValue(values) {
    let maxValue = values[0];
    for (let index = 1; index < values.length; index++) {
        if (values[index] > maxValue) {
            maxValue = values[index];
        }
    }
    return maxValue;  
}
const someValues = [32, 54, 87, 30, 29, 72, 66, 12, 85, 43, 98];
console.log(findMaxValue(someValues));








