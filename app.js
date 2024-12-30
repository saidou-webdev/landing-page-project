function validateForm(){
    const inputEmail = document.getElementById('email')
    const inputError = document.getElementById('email-error')
    if(inputEmail.value === ''){
        inputError.textContent = 'Le champ ne doit pas être vide'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize= '20px'

    }
    else if(inputEmail.value.length <6){
        inputError.textContent = 'le nombre de caractère doit être superieur à 6'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize= '5px'
    }
    else{
        inputError.textContent =''
    }
    inputEmail.addEventListener('input', () => {
        inputError.style.display = inputEmail.value ==='' ? 'block' : 'none';
    });
    inputEmail.addEventListener('blur', () => {
        inputError.style.display = inputEmail.value ==='' ? 'block' : 'none';
    });  

    const texteNom= document.getElementById('Nom')
    const textError = document.getElementById('Nom-error')
    if( texteNom.value === ''){
        textError.textContent = 'Le champ ne doit pas être vide'
        textError .style.textAlign = 'center'
        textError.style.color = 'red'
        textError .style.fontSize= '20px'
        alert('votre soummission a été reçue avec succés')
    }
    else {
        textError.textContent = ''
       
    }
    texteNom.addEventListener('input', () =>{
        textError.style.display = texteNom.value === '' ? 'block' : 'none' ;
    });
     texteNom.addEventListener('blur', () => {
         textError.style.display = texteNom.value === '' ? 'block' : 'none' ;
    });

    return false
    
    }
    
