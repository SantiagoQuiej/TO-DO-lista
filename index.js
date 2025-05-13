let bottones = document.querySelector('#boton-')
let ul = document.querySelector('ul')
let entrada = document.querySelector('#lista')
let tareas = []
let filtro = document.querySelector('#filtro')
let buscar = document.querySelector('#Buscar')
let tareayfiltros=[]
// Cuando se le da un click en el boton de agregar realiza todo lo que esta dentro de bottones.
bottones.addEventListener('click', () => {
    if (String(entrada.value).trim() == "") {
        entrada.value = ''
        entrada.placeholder = 'No se puede guardar un archivo sin nombre'
    } else {
        agregar()
        entrada.placeholder = 'Add a new task'
    }
})

// Crea todo lo que se realiza en createElementYrenderisar
const agregar = () => {
    let nuevatarea = {
        texto: entrada.value,
        isCompleted: false,
    }
    createElementYrenderisar(nuevatarea)
    tareas.push(nuevatarea)

}
// Se realiza para poder encontrar una busqueda 
buscar.addEventListener('keyup', (event) => {
    let resultado = []
    resultado = tareas.filter(item => item.texto.includes(event.target.value))
    ul.innerHTML = ''
    resultado.forEach(item => {
        createElementYrenderisar(item)
    });
})

// Realiza todo el proceso de agregar nuevos elementos 
const createElementYrenderisar = (tarea) => {
    let li = document.createElement('li')
    let div = document.createElement('div')
    div.classList.add('from-control')
    let input = document.createElement('input')
    input.setAttribute('readOnly', true)
    input.classList = 'tarea'
    input.value = tarea.texto
    if (tarea.isCompleted == true) {
        input.classList = 'lineamedia'
    }
    entrada.value = ""
    let boton1 = document.createElement('button')
    boton1.classList = 'red'
    boton1.innerText = 'Eliminar'
    let boton2 = document.createElement('button')
    boton2.classList = 'verde'
    boton2.innerText = 'Marcar como completado'
    ul = document.querySelector('ul')
    ul.appendChild(li)
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(boton1)
    div.appendChild(boton2)
    boton1.addEventListener('click', (event) => {
        ul.removeChild(li)
        tareas = tareas.filter(item => item.texto != event.target.previousElementSibling.value)
        console.log(tareas)
    })
    boton2.addEventListener('click', (event) => {
        input.classList = 'lineamedia'
        tareas = tareas.map(item => {
            if (item.texto == event.target.previousElementSibling.previousElementSibling.value) {
                item.isCompleted = true;
            }
            return item;
        })
        console.log(tareas)
        boton2.remove()
    })
}
// Llama al elemenot de filtrotareas
filtro.addEventListener('change', (event) => {
    filtrotareas(event.target.value)
})
// para cuando se seleciona todo completado o pendientes.
const filtrotareas = (value) => {
    let filtro = []
    if (value == "Pendiente") {
        filtro = tareas.filter(item => item.isCompleted == false)
    } else if (value == 'Completado') {
        filtro = tareas.filter(item => item.isCompleted == true)
    } else {
        filtro = tareas
    }
    ul.innerHTML = ''
    filtro.forEach(item => {
        createElementYrenderisar(item)
    })
}

// Cuando se le da enter agrega una nueva tarea
entrada.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        if (String(entrada.value).trim() == '') {
            entrada.value = ''
            entrada.placeholder = 'No se puede guardar un archivo sin nombre'
        } else {
            entrada.placeholder = 'Add a new task'
            agregar()
        }
    }


})

