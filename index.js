let bottones = document.querySelector('#boton-')
let ul = document.querySelector('ul')
let entrada = document.querySelector('#lista')
// creo li   


bottones.addEventListener('click', () => {
    if(String(entrada.value).trim()=="")
    { 
         entrada.value=''
        alert('Tarea vacia')
    }else{
        agregar()
    }
})
const agregar = () => {
    let li = document.createElement('li')
    let div = document.createElement('div')
    div.classList.add('from-control')
    let input = document.createElement('input')
    input.setAttribute('readOnly', true)
    input.classList = 'tarea'
    input.value = entrada.value
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
    console.log(ul)
    boton1.addEventListener('click', () => {
        ul.removeChild(li)
    })
    boton2.addEventListener('click', () => {
        input.classList = 'lineamedia'
    })
}

entrada.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        if(String(entrada.value).trim()==''){
            entrada.value=''
            alert('Tarea vacia')

        }else{
        agregar()}
    }

 
})

