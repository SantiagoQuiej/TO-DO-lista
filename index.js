let bottones = document.querySelector('#boton-')
let ul = document.querySelector('ul')
let entrada = document.querySelector('#lista')
// creo li
let tareas = []
let filtro = document.querySelector('#filtro')


bottones.addEventListener('click', () => {
    if (String(entrada.value).trim() == "") {
        entrada.value = ''
        entrada.placeholder = 'No se puede guardar un archivo sin nombre'
    } else {
        agregar()
        entrada.placeholder = 'Add a new task'
    }
})
const agregar = () => {
    nuevatarea = {
        texto: entrada.value,
        isCompleted: false,
    }
    let li = document.createElement('li')
    let div = document.createElement('div')
    div.classList.add('from-control')
    let input = document.createElement('input')
    input.setAttribute('readOnly', true)
    input.classList = 'tarea'
    input.value = nuevatarea.texto
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

    tareas.push(nuevatarea)
    console.log(tareas)
}

filtro.addEventListener('change', (event) => {
    filtrotareas(event.target.value)
})
const filtrotareas = (value) => {
    if (value == "Pendiente") {
        filtro = tareas.filter(item => item.isCompleted == false)
    } else if (value == 'Completado') {
        filtro = tareas.filter(item => item.isCompleted == true)
    } else {
        filtro = tareas
    }
    ul.innerHTML = ''
    filtro.forEach(item => {
        let li = document.createElement('li')
        let div = document.createElement('div')
        div.classList.add('from-control')
        let input = document.createElement('input')
        input.setAttribute('readOnly', true)
        input.classList = 'tarea'
        input.value = item.texto
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
    })
}

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

