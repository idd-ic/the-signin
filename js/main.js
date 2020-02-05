let $signin= document.querySelector('.signin')
let $modal= document.querySelector('.modal')
let $close= document.querySelector('.close')
let $submit= document.querySelector('#submit')
let $user= document.querySelector('#user')
let $pass= document.querySelector('#pass')
let $form= document.querySelector('.getstarted')


$signin.addEventListener(`click`, (event) =>
{
    $modal.style.display=`block`
})


$modal.addEventListener(`click`, (event) =>
{
    $modal.style.display=`none`
})
$user.addEventListener('focus', event => {
    $user.classList.remove(`error`)
})
$pass.addEventListener('focus', event => {
    $pass.classList.remove(`error`)
})

$form.addEventListener('submit', event => {
    event.preventDefault()

    $user.classList.add(`error`)
    $pass.classList.add(`error`)
})

//if ($user.value("")) {
  //     $user.classList.add(`error`)
 //   }
//)