const form = document.getElementsByTagName('form')[0]
const errorPara = document.querySelectorAll('.invalid')
const inputs = document.querySelectorAll('input')
const userName = document.querySelector('[data-userName')
const cardNumber = document.querySelector('[data-cardNumber')
const CVC = document.querySelector('[data-cvc]')
const expDateM = document.getElementById('expMonth')
const expDateY = document.getElementById('expYear')
const  letters = /^[A-Za-z]+$/;


function formValidator(){
    form.addEventListener('submit',(e) => {
        e.preventDefault();

        if(inputs[0].value === ''){
            errorPara[0].innerText = 'Enter your correct name'
        }

        if(inputs[1].value.match(letters)){
           errorPara[1].innerText = 'Wrong format, numbers only'
        }if(inputs[1].value === ''){
            errorPara[1].innerText = `Can't be blank`
        }



        if(inputs[2].value.match(letters) || inputs[3].value.match(letters)){
           errorPara[2].innerText = 'Wrong format, numbers only'
        }
        if(inputs[2].value === '' || inputs[3].value === ''){
           errorPara[2].innerText = `Fill in the correct date`
        }
        // VALIDATING FOR CORRECT DATE INPUT
        if(inputs[2].value > 12 || inputs[3].value <= 0){
            errorPara[2].innerText = 'Enter a valid date'
        }

        if(inputs[4].value === '' ){
            errorPara[3].innerText = `Can't be blank`
        }

        if(inputs[4].value.match(letters)){
          errorPara[3].innerText = 'Wrong format, numbers only'
        }

        if(errorPara[0].innerText === ''
           && errorPara[1].innerText === ''
           && errorPara[2].innerText === ''
           && errorPara[3].innerText === ''){
            completeForm()
        }
    })
}
formValidator()


function completeForm(){
    document.querySelector('.form-components').innerHTML = `
      <div class="completed-msg">
         <img src="images/icon-complete.svg">
         <h1>THANK YOU</h1>
         <h3>We've added your card details!</h3>
         <button class="continue">Continue</button>
      </div>
    `
}
export { formValidator }