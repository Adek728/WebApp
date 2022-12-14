function resetErrors(inputs, errorTexts, errorInfo){
    for(let i = 0; i < inputs.length; i++){
        inputs[i].classList.remove("error-input");
    }
    for(let i = 0; i < errorTexts.length; i++){
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkRequired(value){
    if(!value){
        return false;
    }

    value = value.toString().trim();

    if(value == null){
        return false;
    }

    return true;
}


function checkTextLengthRange(value, min, max){
    if(!value){
        return false;
    }

    value = value.toString().trim();
    const length = value.length;

    if(length > max){
        return false;
    }
    if(length < min){
        return false;
    }
    return true;
}

function checkPesel(value){
    if(!value){
        return true;
    }
    value = value.toString().trim();
    const length = value.length;
    if(length != 11){
        return false;
    }
    return true;
}

function checkNumberRange(value, min, max){
    if(!value){
        return false;
    }

    
    value = parseFloat(value);

    if(value < min){
        return false;
    }

    if(value > max){
        return false;
    }

    return true;
}

function checkDate(value){
    if(!value){
        return false;
    }

    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    return pattern.test(value);
}