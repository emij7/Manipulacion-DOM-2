/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
// Exportar el metodo creado en lazy.js
import { registerImage } from './lazy'

let contadorClicks = 0

 const API = 'https://randomfox.ca/floof/'
 const containerNode = document.getElementById('images');
 const btnAdd = document.getElementById('addImg');
 const btnDel = document.getElementById('cleanImg')
 const contador = document.createElement('p');
 containerNode.appendChild(contador)
 contador.innerHTML = `Total de imágenes solicitadas = ${contadorClicks}`

//  const btnClean = document.getElementById('clean');
 const fetchImage = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    const url = responseJSON.image;
     
    const containerImg = document.createElement('div');
    containerImg.className = "p-4";
    containerImg.className = "mx-auto bg-gray-200";
    containerImg.style.width = '320px'

     
    const image = document.createElement('img');
    //  image.src = url;
    image.className = "mx-auto bg-gray-200 m-2";
    image.style.width = '320px'
    image.style.minHeight = '320px'
    image.dataset.src = url;
    registerImage(image)
    contadorClicks += 1
    contador.innerHTML = `Total de imágenes solicitadas = ${contadorClicks}`
    containerImg.appendChild(image);
    containerNode.appendChild(containerImg);
 }

 const cleanImg = () =>{        //Funcion que guarda en lista todos los img hijos de container mode. Luego recorre todos y los elimina
    const list = images.querySelectorAll('div')
    list.forEach(node => {
        node.remove()
    })
    contadorClicks = 0
    contador.innerHTML = `Total de imágenes solicitadas = ${contadorClicks}`
    imagenesCargadas = 0
    contador2.innerHTML = `Total de imágenes cargadas = ${imagenesCargadas}`
 }
 btnAdd.addEventListener('click',fetchImage);
 btnDel.addEventListener('click',cleanImg);

