//Declaro elementos en el DOM

const campoTarea = document.getElementById('agregar');
const boton = document.getElementById('boton');
const lista = document.getElementById('lista');
const elementosLi = document.getElementsByTagName('li');
const alerta = document.getElementById('alerta');
const formulario = document.getElementById('formulario');

//Si la tarea esta vacia, damos un mensaje y modificamos el placeholder

//Creamos la tarea

let crearTarea = () => {

    if(campoTarea.value == ""){

        campoTarea.setAttribute('placeholder', 'Ingrese una tarea');
        alerta.textContent = 'Complete el campo de tarea';
        alerta.style.fontWeight = '700';
        alerta.style.color = 'red';
    
    } else  {
    
        //Si el campo esta completo, lo agregamos a la lista
    
        let agregarTarea = document.createElement('li');
        let nodoTexto = document.createTextNode(campoTarea.value);
        agregarTarea.appendChild(nodoTexto);
        let nuevo = lista.appendChild(agregarTarea);
        campoTarea.focus();
        campoTarea.value = '';
        campoTarea.setAttribute('placeholder', 'Agregue su tarea');
        alerta.textContent = '';
        agregarTarea.style.borderBottom = '3px solid black';
        agregarTarea.style.marginTop = '15px';
        agregarTarea.style.paddingBottom = '15px'

        //Eliminamos una tarea al hacer click

        agregarTarea.addEventListener('click', () => {

            lista.removeChild(agregarTarea);

        });
    
    }

}

boton.addEventListener('click', () => {

    crearTarea();

});

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

});

