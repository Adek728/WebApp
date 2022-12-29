function validateForm(){
    const imieInput = document.getElementById('imie');
    const nazwiskoInput = document.getElementById('nazwisko');
    const wiekInput = document.getElementById('wiek');
    const peselInput = document.getElementById('pesel');

    const imieError = document.getElementById('errorImie');
    const nazwiskoError = document.getElementById('errorNaziwsko');
    const wiekError = document.getElementById('errorWiek');
    const peselError = document.getElementById('errorPesel');
    const summary = document.getElementById('errorsSummary');

    resetErrors([imieInput,nazwiskoInput,wiekInput,peselInput], [imieError, nazwiskoError, wiekError, peselError], summary);
    
    let valid = true;

    if(!checkRequired(imieInput.value)){
        valid = false;
        imieInput.classList.add("error-input");
        imieError.innerText = "Pole jest wymagane";
    }else if(!checkTextLengthRange(imieInput.value,2,60)){
        valid = false;
        imieInput.classList.add("error-input");
        imieError.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if(!checkRequired(nazwiskoInput.value)){
        valid = false;
        nazwiskoInput.classList.add("error-input");
        nazwiskoError.innerText = "Pole jest wymagane";
    }else if(!checkTextLengthRange(nazwiskoInput.value,2,60)){
        valid = false;
        nazwiskoInput.classList.add("error-input");
        nazwiskoError.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if(!checkRequired(wiekInput.value)){
        valid = false;
        wiekInput.classList.add("error-input");
        wiekError.innerText = "Pole jest wymagane";
    }else if(!checkTextLengthRange(wiekInput.value,1,3)){
        valid = false;
        wiekInput.classList.add("error-input");
        wiekError.innerText = "Pole powinno zawierać od 1 do 3 cyfr";
    }

    if(!checkPesel(peselInput.value)){
        valid = false;
        peselInput.classList.add("error-input");
        peselError.innerText = "Pole powinno zawierać 11 cyfr";
    }


    if(!valid){
        summary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}



