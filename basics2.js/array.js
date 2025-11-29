const array = [1,2,3,4,5]
// console.log(array[1])

// array.push(10,11)  //pushes elemnt to the last 
// array.pop()      //pops the last element 

// array.unshift(9)    //unshifts  -> sends 9 to front 
// array.shift()       // just like pop() shift => removes the first element without any parameters
// console.log(array.includes(1))
// console.log(array.indexOf(3))


// const newarray = array.join()   converts array into string ;
// console.log(newarray)

// console.log("A = ",array)

// const slice = array.slice(1,3)  //slice doesnt take limit element from array
// console.log("B = " ,slice)

// const splice =array.splice(1,3)  //Wheras splice does take 3 indexing elemnent
// console.log("B = " ,splice)

const Marvelhero =["hulk","spiderman","ironman"];
const Dchero=["superman","joker","batman"];

// const bothHeroes =Marvelhero.concat(Dchero)
// const bothHeroes =Marvelhero.concat(Dchero)
// console.log(bothHeroes)

// const Heroes = [...Marvelhero,...Dchero]    //also combine two strings
// console.log(Heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));