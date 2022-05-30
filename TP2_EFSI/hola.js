//https://webdesign.tutsplus.com/es/tutorials/to-do-app-with-vanilla-javascript--cms-35258
//hacer un objeto tarea que tenga (id,titulo y estado) --> el estado siempre en false y cuando la se marque en true

let listaTarea = document.querySelector('input[type="text"]');
let contador = 0;
let tareas = {

}

formulario.addEventListener('submit', (evento)=>{
    //evento = preventDefault();
    agregarTarea();
})

let agregarTarea = () => {
    contador ++;
    let valor = listaTarea.value;

    lista.innerHTML += `
    <div id=${contador}>
        <label>
            <input type="checkbox">
            ${valor}
        </label>
        <img src="./img/trash2.jpg" class="trash">
    </div>`
    listaTarea.value = '';
}

lista.addEventListener('click', (evento)=>{
    if(evento.srcElement.nodeName == 'IMG'){
        eliminarTarea(evento.srcElement.parentNode.id);
    }
    else if(evento.srcElement.nodeName == 'INPUT'){
        marcarTarea();
    }
})

let eliminarTarea = (id) => {
    let tareaEliminada = document.getElementById(id);
    lista.removeChild(tareaEliminada);
}

let marcarTarea = () => {
    check.innerHTML = `
    <p class="checkTarea">
        <label>
            <input type="checkbox">
            ${valor} 
        </label>
    </p>`
}