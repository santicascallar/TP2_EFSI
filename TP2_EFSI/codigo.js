const CLAVE_LOCALSTORAGE = "toDoList"; //almacenar elementos con clave y valor, en este caso la clave es toDoList
document.addEventListener("DOMContentLoaded", () => { //este addeventListener espera a que cargue todo el DOM, sería el equivalente al documentReady. Una vez que el dom este listo se ejecuta todo lo de abajo

    let tareas = []; //El array que vamos a utilizar

    const lista = document.querySelector("listaTareas");
    const guardarTarea = document.querySelector("agregarTarea");
    const nuevaTarea = document.querySelector("nuevaTarea");

    guardarTarea.onclick = () => {
        const tarea = nuevaTarea.value;
        if(!tarea){ //si no hay tarea hago un return para que no se ejecute lo de abajo
            return;
        }
        tareas.push({ //pusheamos un objeto dentro del array tareas
            tarea: tarea,
            terminada: false,
        });
        nuevaTarea.value = ""; //se limpia el input
        guardarTareasEnAlmacenamiento(); //guardo el array en el localstorage
        refrescarListaDeTareas();
    }

    //2 funciones del localstorage
    let obtenerTareas = () => {
        const listaTareas = JSON.parse(localStorage.getItem(CLAVE_LOCALSTORAGE)); //obtiene los elementos de localstorage y los intente parsear 
        if(listaTareas){ //en caso de que haya algo regresa la lista sino un array vacio
            return listaTareas;
        }
        else {
            return [];
        }
    }      

    let guardarTareasEnAlmacenamiento = () => {
        localStorage.setItem(CLAVE_LOCALSTORAGE, JSON.stringify(tareas)); //guarda las tareas en localstorage como JSON
    }

let refrescarListaDeTareas = () => {
    lista.innerHTML = ""; //limpiar la lista, la ul
    for (let i = 0; i < tareas.length; i++){ //crear un for para recorrer el array tareas
        //crear un enlace (cruz) para eliminar las tareas
        const eliminarTarea = document.createElement("a");
        eliminarTarea.classList.add("eliminar");
        eliminarTarea.innerHTML = "&times;"; //esto es para agregar la forma de cruz de x
        eliminarTarea.href = "";
        eliminarTarea.onclick = (evento) => {
            evento.preventDefault(); //para que cuando se haga click en la x para eliminar tarea no se refresque la pagina, es decir no haga la funcion del a
            if(!confirm("Eliminar Tarea")){
                return; //sino confirma el usuario hago un return para que no se ejecute lo de abajo
            }
            tareas.splice(i,1); //invoco a la funcion splice indicando el indice (i) y la cant de elementos (1)
            guardarTareasEnAlmacenamiento(tareas);
            refrescarListaDeTareas();
        };
        //marcar tarea como terminada
        const marcarTarea = document.createElement("input");
        marcarTarea.type = "checkbox";
        marcarTarea.onchange = function () { //no es una función flecha porque quiero acceder al elemento a través de this
            if (this.checked) { //esto se refiere al elemento clickeado
                tareas[i].terminada = true;
            } else {
                tareas[i].terminada = false;
            }
            guardarTareasEnAlmacenamiento();
            refrescarListaDeTareas();
        }

        const span = document.createElement("span");
        span.textContent = tarea.tarea; //span que va a contener tarea y es tarea.tarea ya que tenemos un array de objetos con las propiedades tarea y terminada

        const li = document.createElement("li");
        if(tareas.terminada){
            marcarTarea.chcecked = true; //pongo al checkbox marcado
            span.classList.add("tachar"); //agrego la clase
        }

        li.appendChild(marcarTarea);
        li.appendChild(span);
        li.appendChild(eliminarTarea);
        lista.appendChild($li);

    }
};
//llamar a la funcion por primera vez
tareas = obtenerTareas(); //inicializo mi variable
refrescarListaDeTareas();
});

