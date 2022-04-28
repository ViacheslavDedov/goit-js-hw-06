const refs = {
    form: document.querySelector('.login-form'),   
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    if (event.currentTarget.elements[0].value === '' || event.currentTarget.elements[1].value === '') {
       return alert('Все поля должны быть заполнены');
    } 
    let theseFormSubmit = {};
    theseFormSubmit.Email = event.currentTarget.elements[0].value;
    theseFormSubmit.Password = event.currentTarget.elements[1].value;
    console.log(theseFormSubmit);
    refs.form.reset();    
}
