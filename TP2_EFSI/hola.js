//https://webdesign.tutsplus.com/es/tutorials/to-do-app-with-vanilla-javascript--cms-35258

let contador = 0;
let tarea = document.querySelector('input[type="text"]');
let vacio = document.getElementById("vacio");

formulario.addEventListener('submit', (evento)=>{
    //evento = preventDefault();
    /*if(contador == 0){
        vacio.innerHTML = `No hay tareas`
    }*/
    agregarTarea();
})

let agregarTarea = () => {
    contador ++;
    let valor = tarea.value;

    lista.innerHTML += `
    <div id=${contador}>
        <label>
            <input type="checkbox">
            ${valor}
        </label>
    </div>`
    tarea.value = '';
}

formulario.addEventListener('click', (evento)=>{
    let check = document.querySelectorAll('input type=["checkbox"]:checked');
    if(evento.srcElement.nodeName == 'INPUT'){
        
    }
})

let eliminarTarea = () => {
    let tareaEliminada = document.getElementById(id);
    formulario.removeChild(tareaEliminada);
}