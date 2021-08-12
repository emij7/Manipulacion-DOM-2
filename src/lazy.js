//Intersection observer

//Aplicar el Lazy loading imgs


const isIntersecting = (entry) => {
    //200px lejos de la pantalla entonces haz algo EG
    return entry.isIntersecting //True(dentro de la pantalla)
}
const lazyLoading = (entry) => {
    const container = entry.target;
    // const imagen = container.firstChild;
    container.src = container.dataset.src 
    // debugger   
    // console.log(url)
    // debugger
    //Si ya hiciste algo, desregistra la imagen (unlisten)
    imagenesCargadas += 1
    contador2.innerHTML = `Total de imágenes cargadas = ${imagenesCargadas}`
    observer.unobserve(container)
}
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting) //Si está presente en el viewport
        .forEach(lazyLoading)
})

//entries tambien puede ser allElements

export const registerImage = (imagen) => {
    //IntersectionObservador -> Observar(imagen)
    observer.observe(imagen);
}