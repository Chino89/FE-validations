window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

let inputTitle = document.getElementById('title');
let inputRating = document.getElementById('rating');
let inputAwards = document.getElementById('awards');
let inputReleaseDate = document.getElementById('release_date');
let inputLength = document.getElementById('length');
let inputGenre = document.getElementById('genre_id');
let errorsList = document.querySelector('article ul.errores');

inputTitle.focus();

const errorAlert = function() {
    errorsList.classList.remove('errores');
    errorsList.classList.add('alert-warning');
};

const titleValidation = function(errors) {
    if (inputTitle.value === '') {
        errors.push('Debes ingresar un Titulo');
        inputTitle.classList.add('is-invalid');
    } else {
        inputTitle.classList.remove('is-invalid');
        inputTitle.classList.add('is-valid');
    };
};

const ratingValidation = function(errors) {
    if (inputRating.value === '' || !(inputRating.value > 0 && inputRating.value <= 10)) {
        errors.push('El Rating debe ser un valor entre 0 y 10');
        inputRating.classList.add('is-invalid');
    } else {
        inputRating.classList.remove('is-invalid');
        inputRating.classList.add('is-valid');    
    };
};

const awardsValidations = function(errors) {
    if (inputAwards.value === '' || !(inputAwards.value > 0 && inputAwards.value <= 10) ) {
        errors.push('El campo "Premios" debe ser un valor entre 0 y 10');
        inputAwards.classList.add('is-invalid');
    } else {
        inputAwards.classList.remove('is-invalid');
        inputAwards.classList.add('is-valid');    
    };
};

const dateValidation = function(errors) {
    if (inputReleaseDate.value === '') {
        errors.push('Debes ingresar una Fecha de Creacion');
        inputReleaseDate.classList.add('is-invalid');
    } else {
        inputReleaseDate.classList.remove('is-invalid');
        inputReleaseDate.classList.add('is-valid');    
    };
};

const lengthValidation = function(errors) {
    if (inputLength.value === '' || !(inputLength.value >= 60 && inputLength.value <= 360)) {
        errors.push('Debes ingresar una Duracion del Film');
        inputLength.classList.add('is-invalid');
    } else {
        inputLength.classList.remove('is-invalid');
        inputLength.classList.add('is-valid');    
    };
};

const genreValidation = function(errors) {
    if (inputGenre.value === '') {
        errors.push('Debes seleccionar un Genero');
        inputGenre.classList.add('is-invalid');
    } else {
        inputGenre.classList.remove('is-invalid');
        inputGenre.classList.add('is-valid');
    };
};

formulario.addEventListener('submit', function(e) {
    errorsList.innerHTML = '';
    const errors = [];

    titleValidation(errors);
    ratingValidation(errors);
    awardsValidations(errors);
    dateValidation(errors);
    lengthValidation(errors);
    genreValidation(errors);

    if (errors.length > 0) {
        e.preventDefault();
        errorAlert();

        for (let i = 0; i < errors.length; i++) {
            errorsList.innerHTML += "<li>" + errors[i] + "</li>";
        }; 

    } else{ 
        window.alert('La película se guardó satisfactoriamente');
    };
});

};