//https://webdesign.tutsplus.com/es/tutorials/to-do-app-with-vanilla-javascript--cms-35258
//hacer un objeto tarea que tenga (id,titulo y estado) --> el estado siempre en false y cuando la se marque en true

let listaTarea = document.querySelector('input[type="text"]');
let vacio = document.getElementById("vacio");
let contador = 0;
let tarea = {

}

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
    if(evento.srcElement.nodeName == 'IMG'){
        eliminarTarea(evento.srcElement.parentNode,id);
    }
})

let eliminarTarea = () => {
    let tareaEliminada = document.getElementById(id);
    formulario.removeChild(tareaEliminada);
}