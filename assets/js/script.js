const container = document.querySelector('.card-front')
const cardNumber = document.getElementById('card-number');
const cardNameExp = document.querySelector('.card-name-exp')
const dataCardBack = document.querySelector('.data-card-back')
const containerSize = container.offsetWidth;

cardNumber.style.fontSize = (containerSize * 0.065)+'px';
cardNameExp.style.fontSize = (containerSize * 0.03)+'px';
dataCardBack.style.fontSize = (containerSize * 0.04)+'px'; 


// window.addEventListener('resize', () => {
//     containerSize = container.offsetWidth;
//     font = Math.floor(containerSize / 10);
    

// })
