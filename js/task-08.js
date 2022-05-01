const refs = {
    form: document.querySelector('.login-form'),   
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
       return alert('Все поля должны быть заполнены');
    } 
    let theseFormSubmit = {};
    theseFormSubmit.Email = event.currentTarget.elements.email.value;
    theseFormSubmit.Password = event.currentTarget.elements.password.value;
    console.log(theseFormSubmit);
    refs.form.reset();    
}
