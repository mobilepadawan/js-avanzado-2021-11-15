const doc = document.querySelector('#documento')
const rutaImg = 'cover/tones_and_i.jpg'
const rutaAudio = 'sources/Tones_and_I_Dance_Monkey.mp3'

const titulo = document.createElement('h1')
      titulo.innerText = 'Tiembla Spotify'
      titulo.classList.add('blue-text')
      titulo.id = 'titulo1'

// const imagen = document.createElement('img')
//       imagen.src = rutaImg
//       imagen.setAttribute('width', '400px')
//       imagen.setAttribute('height', '70px')

const br = document.createElement('br')

const imagen = document.createElement('img')
      imagen.src = rutaImg
      imagen.setAttribute('width', '200px')
      imagen.setAttribute('height', '200px')

const audio = document.createElement('audio')
      audio.src = rutaAudio
      audio.controls = true
      audio.volume = 0
      

// doc.appendChild(titulo)
// doc.appendChild(imagen)
// doc.appendChild(br)
// doc.appendChild(audio)

doc.append(br, titulo, imagen, br, audio)

const ul = document.querySelector('ul')

const frutas = ['ananá', 'banana', 'pera', 'manzana']
let html = ''

function cargarFrutas() {
      debugger
      // for (let i = 0; i < frutas.length; i++) {
      //       html += `<li>${frutas[i]}</li>`
      // }

      //for (... in frutas)

      for (elemento of frutas)
            html += `<li>${elemento}</li>`

      ul.innerHTML = html
      //fernando@vidamobile.com.ar 
}