function validateForm(){
    const strefaInput = document.getElementById('strefa');
    const czasInput = document.getElementById('czas');

    const strefaError = document.getElementById('errorStrefa');
    const czasError = document.getElementById('errorCzas');
    const summary = document.getElementById('errorsSummary');

    resetErrors([strefaInput,czasInput], [strefaError, czasError], summary);
    
    let valid = true;

    if(!checkRequired(strefaInput.value)){
        valid = false;
        strefaInput.classList.add("error-input");
        strefaError.innerText = "Pole jest wymagane";
    }else if(!checkTextLengthRange(strefaInput.value,2,60)){
        valid = false;
        strefaInput.classList.add("error-input");
        strefaError.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if(!checkRequired(czasInput.value)){
        valid = false;
        czasInput.classList.add("error-input");
        czasError.innerText = "Pole jest wymagane";
    }else if(!checkTextLengthRange(czasInput.value,4,10)){
        valid = false;
        czasInput.classList.add("error-input");
        czasError.innerText = "Pole powinno zawierać od 4 do 10 znaków";
    }

    


    if(!valid){
        summary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}