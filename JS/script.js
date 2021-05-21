const isParentOfMovieList = document.getElementById("lijst-films");

const removeAllChildNodes = parent => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const addMoviesToDom = function(movieslist) {
    movieslist.map(movie => {
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const newImg = document.createElement('img');

        newA.href = `https://www.imdb.com/title/${movie.imdbID}`;
        newImg.src = movie.Poster;
        
        isParentOfMovieList.appendChild(newLi);
        newLi.appendChild(newA);
        newA.appendChild(newImg);
    });
};

addMoviesToDom(movies);

let filterMovies = function(wordInMoviesTitle) {  
    let isFilterdMovies = movies.filter(movie => movie.Title.includes(wordInMoviesTitle));
 
    console.log(isFilterdMovies);
    removeAllChildNodes(isParentOfMovieList);
    addMoviesToDom(isFilterdMovies);
};

let filterLatestMovies = function() {
    let isFilterdLatestMovies = movies.filter(movie => parseInt(movie.Year) >= 2014);

    console.log(isFilterdLatestMovies);
    removeAllChildNodes(isParentOfMovieList);
    addMoviesToDom(isFilterdLatestMovies);
}

let handleOnChangeEvent = event => {
    //console.log(event.target);
    let filterChoice = event.target.value;
    
    switch (filterChoice) {
        case 'filter-since-year2014':
            console.log("hey ik ben sinceyear");
            filterLatestMovies();
            break;
        case 'filter-avengers':
            console.log("hey ik ben the avengers");
            filterMovies("Avengers");
            break;
        case 'filter-x-men':
            console.log("hey ik ben xmen");
            filterMovies("X-Men");
            break;
        case 'filter-princess':
            console.log("hey ik ben princess");
            filterMovies("Princess");
            break;
        case 'filter-batman':
            console.log("hey ik ben batman");
            filterMovies("Batman");
            break;
        default: 
            console.log("choose a filter");
    }
};

const filmFilter = document.querySelectorAll(".film-filter");

filmFilter.forEach(filter => {
    filter.addEventListener("change", handleOnChangeEvent);
});


    




     


