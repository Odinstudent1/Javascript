//Immediately Invoked Function Expressions 


(function  hello(){
    console.log(`Db connected`)
}) ();

( (name)=>{
    console.log(`Db connected ${name}`)
}) ('parth');
