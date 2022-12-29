function validateForm(){
    const czwiczacyInput = document.getElementById('cw_id');
    const treningInput = document.getElementById('tre_id');
    const cenaInput = document.getElementById('cena');
    const dataInput = document.getElementById('dataWejscia');

    const czwiczacyError = document.getElementById('errorCwiczacy');
    const treningError = document.getElementById('errorTrening');
    const cenaError = document.getElementById('errorCena');
    const dataError = document.getElementById('errorData');

    const summary = document.getElementById('errorsSummary');

    resetErrors([czwiczacyInput,treningInput,cenaInput,dataInput],[czwiczacyError, treningError,cenaError,dataError], summary);
    
    let valid = true;

    if(!checkRequired(czwiczacyInput.value)){
        valid = false;
        czwiczacyInput.classList.add("error-input");
        czwiczacyError.innerText = "Pole jest wymagane";
    }

    if(!checkRequired(treningInput.value)){
        valid = false;
        treningInput.classList.add("error-input");
        treningError.innerText = "Pole jest wymagane";
    }

    

    
    if(!checkRequired(cenaInput.value)){
        valid = false;
        cenaInput.classList.add("error-input");
        cenaError.innerText = "Pole jest wymagane";
    }else if(!checkNumberRange(cenaInput.value,100,200)){
        valid = false;
        cenaInput.classList.add("error-input");
        cenaError.innerText = "Cena powinna być w granicach 100-200";
    }


    if(!checkRequired(dataInput.value)){
        valid = false;
        dataInput.classList.add("error-input");
        dataError.innerText = "Pole jest wymagane";
    }else if(!checkDate(dataInput.value)){
        valid = false;
        dataInput.classList.add("error-input");
        dataError.innerText = "Pole musi mieć format yyyy-mm-dd";
    }
    

    


    if(!valid){
        summary.innerText = "Formularz zawiera błędy";
    }


    return valid;
}