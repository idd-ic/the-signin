let signIn= document.querySelector(`.signin`);
let signInPg= document.querySelector(`.modal`);
let closeBtn= document.querySelector(`.close`);
let submitBtn= document.querySelector(`#submit`);
let userField= document.querySelector(`#user`);
let passfield= document.querySelector(`#pass`);
//let inputErr= document.querySelectorAll(`#field`);


signIn.addEventListener(`click`, (event) =>
{
    signInPg.style.display="block";
})


closeBtn.addEventListener(`click`, (event) =>
{
    signInPg.style.display="none";
})


submitBtn.addEventListener(`click`, (event) =>
{
    userField.classList.add(`error`);
})
