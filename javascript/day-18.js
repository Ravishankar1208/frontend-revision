// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");
// console.log("hello 4");
// console.log("hello 5");
// console.log("hello 6");



// setTimeout(function(){
//   console.log("hello ravi");
//   }, 3000)

// setTimeout(()=>{
//   console.log("hello 1");

// },2000)






// let h1 = document.querySelector('h1')
// let btn = document.querySelector('button')


// btn.addEventListener('click', function() {
//   h1.innerHTML= "Changing USER...."
//   setTimeout(() => {
//     h1.innerHTML= "hello, I am Ravishankar"
//   }, 2000);    
// })


// let a =0;
// let int = setInterval(function() {
//   a++
//   console.log(a);
  
// }, 2000);



// clearInterval(int)










// let a = 0;
// let int = setInterval(() => {
//   a++
//   console.log(a);



//   if(a>=10){
//     clearInterval(int)
//   }
  
// }, 500);









let grow = 0
let h2 = document.querySelector('h2')
let btn = document.querySelector('button')
let inner = document.querySelector('.inner')
btn.addEventListener('click', function () {

let int=  setInterval(() => {
    grow++
    
    h2.innerHTML = `${grow}%`
     inner.style.width= `${grow}%`

     if(grow>=100){
    clearInterval(int)
    btn.innerHTML = "Downloaded"
  }

  
  }, 100);
  
})