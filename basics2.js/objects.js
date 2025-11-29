const mySym =Symbol("key1")

const Obj = {
    "name" : "Parth",
    age: 19,
    email : "parth@microsoft.com",
    [mySym] : "mykey1",
    isLoggedIn : true,
};

// console.log(Obj.name)
// console.log(Obj["name"])
// console.log(Obj[mySym])
// Obj.email="parth@chatgpt.com"
// console.log(Obj.email)
// Object.freeze(Obj)
// Obj.email="parth@heleo.com"
// console.log(Obj.email)

Obj.greeting =function(){
    console.log("Hello user !!");
}
 Obj.greetingTwo= function(){
    console.log(`Hello user !! ${this.name}`)
 }

//  console.log(Obj.greeting())
//  console.log(Obj.greetingTwo())
 
 console.log(Object.keys(Obj))
 console.log(Object.values(Obj))
 console.log(Object.entries(Obj))

 console.log(Obj.hasOwnProperty("isLoggedIn"))