// Select all the necessary elements from the DOM
const container = document.querySelector('.card-front');
const cardNameExp = document.getElementById('cardnameExp');
const inputName = document.getElementById('inputName');
const cardName = document.getElementById('cardName');
const inputNumber = document.getElementById('inputNumber');
const cardNumber = document.getElementById('cardNumber');
const inputYY = document.getElementById('inputExpiryDataYY');
const inputMM = document.getElementById('inputExpiryDataMM');
const cardMM = document.getElementById('cardMM');
const cardYY = document.getElementById('cardYY');
const cardCvv = document.getElementById('cardCvv');
const inputCvv = document.getElementById('inputCvv');
const cardLogo = document.getElementById('cardLogo');
const cardThankYou = document.getElementById('thank-you');
const cardForm = document.getElementById('form');
const bottonConfirm = document.getElementById('buttonConfirm');
const bottonContinue = document.getElementById('buttonContinue');
const messageError = document.querySelector('.message-error')

// Add event listener for input event on inputName element
inputName.addEventListener('input', () => {
    cardName.innerText = inputName.value;
    if (inputName.value.length === 0) {
        cardName.innerText = 'Jane Appleseed'
    }
});

// Initialize Cleave library for inputNumber element
var cleave = new Cleave('#inputNumber', {
    creditCard: true,
    onCreditCardTypeChanged: function(type){
        console.log(type)   
        cardLogo.src = `assets/images/logo/${type}-logo.svg`
    }
});

// Add event listener for input event on inputNumber element
inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;
    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
    }
})

// Add event listener for input event on inputYY element
inputYY.addEventListener("input", () => {
    cardYY.innerText = inputYY.value;
    if (inputYY.value.length === 0) {
        cardYY.innerText = "00";
    }
})

// Add event listener for input event on inputMM element
inputMM.addEventListener("input", () => {
    cardMM.innerText = inputMM.value;
    if (inputMM.value.length === 0) {
        cardMM.innerText = "00";
    }
})

// Add event listener for input event on inputCvv element
inputCvv.addEventListener("input", () => {
    cardCvv.innerText = inputCvv.value;
    if (inputCvv.value.length === 0) {
        cardCvv.innerText = "000";
    }
})

// Function to toggle between cardForm and cardThankYou elements
function toggleCards(){
    cardThankYou.classList.toggle("hidden")
    cardForm.classList.toggle("hidden")
}


 // Function to check and show or hide error message in inputName
const nameInputConfirm = function(input){
    const regex = /^[a-zA-Z\s]+$/;
    const classElement = input.id;
    console.log(`${classElement}-error`);
    const errorMessage = document.getElementById(`${classElement}-error`)
    console.log(input.value);
    if (input.value.match(regex)) {
        input.classList.remove('input-error');
        errorMessage.innerText = '';
        return true
    }else{
        input.classList.add('input-error');
        errorMessage.innerText = 'El nombre no debe contener números';
        return false
    }
}


 // Function to check and show or hide error message in card data 
const dateInputConfirm = function(input){
    const classElement = input.id;
    const errorMessage = document.getElementById(`${classElement}-error`);  
    if(input.value === ''){
        input.classList.add('input-error');
        errorMessage.innerText = 'El campo se encuentra vacio';
        return false
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){  
        input.classList.add('input-error');
        errorMessage.innerText = 'El campo debe contener solo números';
        return false
    }else{
        input.classList.remove('input-error');
        errorMessage.innerText = '';
        return true;
    }
}


// Add event listener for click event on bottonContinue element
bottonConfirm.addEventListener('click',() =>{
    
    if (nameInputConfirm(inputName) && dateInputConfirm(inputYY) && dateInputConfirm(inputMM) && dateInputConfirm(inputCvv)){
        toggleCards();
    }
});

bottonContinue.addEventListener('click', () => {
    inputName.innerText = 'fwfwqefqw';
    inputNumber.innerText = '';
    inputMM.innerText = '';
    inputYY.innerText = '';
    inputCvv.innerText = '';
    toggleCards();
})


// Set font size for cardNumber, cardName, cardMM, and cardYY elements based on container width
const containerSize = container.offsetWidth;

cardNumber.style.fontSize = (containerSize * 0.06) + 'px';
cardName.style.fontSize = (containerSize * 0.03) + 'px';
cardMM.style.fontSize = (containerSize * 0.03) + 'px';
cardYY.style.fontSize = (containerSize * 0.03) + 'px';