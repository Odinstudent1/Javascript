var c = 30
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Pratyaksh"

    function two(){
        const website = "youtube"
        console.log(username +" " + website);
    }
    // console.log(website);

     two()

}

one()

// if (true) {
//     const username = "Parth"
//     if (username === "Parth") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     else{
//         console.log("Please Enter Your Username : " )
//     }
    // console.log(website);
// }

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++++


// console.log(addone(5))              // works fine

// function addone(num){
//     return num + 1
// }



// addTwo(5)                         //this doesnt work with variable
// const addTwo = function(num){
//     return num + 2
// }