// let date= new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())

// const mydate = new Date(2025,0,4)
// const mydate = new Date(2025,10,4,9,4)
// const mydate = new Date("2025","04","10")
// console.log(mydate.toLocaleString())

let timeStamp = new Date()

console.log(timeStamp.toLocaleString("en-IN" , { timeZone: "Asia/Kolkata" }))