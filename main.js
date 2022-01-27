// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")
// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT HAS LOADED")
  errorModal.classList.add("hidden")
  findLikes()
})

function hideError(){
  errorModal.classList.add("hidden")
}

function findLikes(){
const likeArr = document.querySelectorAll(".like-glyph")

likeArr.forEach((singularLike) => {
  singularLike.addEventListener("click", (event) => {
    mimicServerCall() 
    .then(() => {
      if (event.target.innerText === EMPTY_HEART){
      event.target.classList.add('activated-heart')
      event.target.innerText = FULL_HEART
      }
      else if (event.target.innerText === FULL_HEART){
        event.target.classList.remove('activated-heart')
        event.target.innerText = EMPTY_HEART
      }
    })

    .catch(error => {
      setTimeout(() => {
        hideError()
      },3000)
  })
})
})
}

// document.addEventListener('click', (event) => {
//   if(event.target.classList.value === 'like-glyph'){

//     mimicServerCall() 
//     .then(() => {
//       if (hearts.target.innerText === EMPTY_HEART){
//       hearts.target.classList.add('activated-heart')
//       hearts.target.innerText = FULL_HEART
//       }
//       else if (hearts.target.innerText === FULL_HEART){
//         hearts.target.classList.remove('activated-heart')
//         hearts.target.innerText = EMPTY_HEART
//       }
//     })

//     .catch(error => {
//       setTimeout(() => {
//         hideError()
//       },3000)
//   })
// }
// })
// }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
