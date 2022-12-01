console.log('HELLO')
const csrf = document.getElementsByName('csrfmiddlewaretoken')
console.log(csrf)


const incomplete_btn = document.querySelectorAll('.incomplete')
const complete_btn = document.querySelectorAll('.complete')
console.log(incomplete_btn)
console.log(complete_btn)

function displayDate() {
  console.log('working');
}

incomplete_btn[0].addEventListener('mouseover', displayDate)
