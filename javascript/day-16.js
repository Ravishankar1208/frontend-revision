// let box = document.querySelector('#box')
// box.innerHTML= 'hlo baby'
// box.style.backgroundColor= 'blue'
// box.addEventListener('click', function(){
//   box.innerHTML= 'hlo ravi'
//   box.style.backgroundColor= 'pink'
// })




// let h1 = document.querySelector('h1')
// let inc = document.querySelector('.inc')
// let dec = document.querySelector('.dec')

// let num = 0

// inc.addEventListener('click', function(){
//   h1.innerHTML="num = "+ num++

// })

// dec.addEventListener('click', function(){
//   h1.innerHTML="num = "+ num++

// })



//  math.random

// let num = Math.random()


// console.log(num * 1000);




// let num = Math.floor(Math.random()*100000 );

// console.log(num);


let btn = document.querySelector('button')

let box = document.querySelector('#box')

btn.addEventListener('click', function(){
  
  let c1 = Math.floor(Math.random()*256)
  let c2 = Math.floor(Math.random()*256)
  let c3 = Math.floor(Math.random()*256)

  box.style.backgroundColor= `rgb(${c1}, ${c2}, ${c3})`; 
  
})