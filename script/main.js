document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('form_name');
    let button = document.getElementById('btn');
    let altDescription = document.querySelector('.alt_description');
    let maxLengthElement = document.querySelector('.max_lenght'); 

    button.addEventListener('click', () => {
        let value = input.value;
        let checkSpecsAndNumbers = /[0-9!@#$%^&*(),.?":{}|<>]/.test(value);
        let maxLengthCheck = value.length > 5; // 

        if (checkSpecsAndNumbers) {
            altDescription.classList.add('visible');
            console.log('value:', 'SpecSymbol and Numbers used');
            return;
        } else {
            altDescription.classList.remove('visible');
        }

        if (maxLengthCheck) {
            maxLengthElement.classList.add('max_lenght1'); 
            return;
        } else {
            maxLengthElement.classList.remove('max_lenght1'); 
        }
    });
});
/* CHECKING INSTRUCTIONS*/




document.addEventListener('DOMContentLoaded', () => {
    let inputName = document.getElementById('form_name'); 
        inputName.addEventListener('focus', () => {
            inputName.classList.add('animated_border');
        });
        inputName.addEventListener('blur', () => {
            inputName.classList.remove('animated_border')
        });

});

/*ANIMATION NAME FORM*/