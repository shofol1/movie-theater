
// image api
// https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg


fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f21c768c8fcf8ec5e953778305a09cb7')
.then(res=>res.json()
.then(data=>setMovies(data.results)));


const setMovies=movies=>{
    const movieRow=document.getElementById('movie-row')
    const movieSpinnre=document.getElementById('spinner-movie');
    movieSpinnre.style.display='none';
    movies.forEach(movie=> {
        console.log(movie);
        const div=document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML=`
        <div class="shadow rounded p-3 m-2">
        <img class="img-fluid" src=" https://image.tmdb.org/t/p/original/${movie.poster_path}">
        <h6 class="pt-4">${movie.title}</h6>
        <p>${movie.overview.slice(0, 100)}</p>
        <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-success text-white fw-bold">See Details</button>
    </div>
        `
movieRow.appendChild(div)
    })
}

const loadMovieDetails=id=>{
    console.log(id);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f21c768c8fcf8ec5e953778305a09cb7`)
    .then(res=>res.json())
    .then(data=>setMovieDetails(data));



}
const setMovieDetails=detailsMovie=>{
    const movieDetailsField=document.getElementById('movie-details');
    const movieBox =document.createElement('div');
    movieDetailsField.innerHTML='';
    movieBox.innerHTML= `
    <h3 class="p-4 border border-3">${detailsMovie.title}</h3>
    `
    movieDetailsField.appendChild(movieBox);
}