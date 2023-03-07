// QUESTION No. 1


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






