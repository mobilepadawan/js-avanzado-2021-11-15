const parrafo2 = `<p class="parrafo-quote" onclick="miFuncion('unString')">Otro tipo de párrafo HTML.</p>`

'alert()'
'prompt()'
'confirm()'

// function saludar() { //función convencional
//     let nombre = prompt('Ingrese su nombre:')    
//         //console.log('Bienvenido ' + nombre)
//         console.log(`Bienvenido ${nombre}`)
// }

// function saludo(nom, mid) { //función con parámetros
//     //console.log('Bienvenido ' + nom + ' ' + mid)
//     console.log(`Bienvenido ${nom} cualquier otra cosa ${mid}`)
// }

// function devuelvoSaludo() {
//     let nombre = prompt('Ingrese su nombre:')
//         return nombre
// }

//ARROW FUNCTIONS

const saludar = ()=> {
    let nombre = prompt('Ingrese su nombre:')
        console.log(`Bienvenido ${nombre}`)
}

const saludo = (nom)=> {
    console.log(`Bienvenido ${nom}`)
}

const devuelvoSaludo = ()=>  nombre = prompt('Ingrese su nombre:')

