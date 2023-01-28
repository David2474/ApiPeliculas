
const cargarPeliculas = async() =>{
    try {
    const url =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b110cd9639495c6450af65dc7d2dc62b&language=es-MX');
    console.log(url);


    if(url.status === 200){
        const datosJson = await url.json();

        /* console.log(datosJson); */
    
        let peliculas = '';
        datosJson.results.forEach(pelicula => {
            peliculas = peliculas + `
            <div class='content-movies'>
            <div class="movie"><img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></div>
            <h3>${pelicula.title}</h3>
            <p>Vistas: ${pelicula.popularity}</p>
            <p>Fecha de lanzamiento: ${pelicula.release_date}</p>
            </div>
            `;
        });
        
    document.getElementById('contenedor').innerHTML = peliculas;

    }else if(url.status === 401){
        console.log('algo currio, intenta de nuevo');
    }else if(url.status === 404){
        console.log('lo que buscas no existe intentalo de nueo');
    }

 
    } catch (error) {
        console.log('sucedio algo mal');
    }
}


cargarPeliculas();


