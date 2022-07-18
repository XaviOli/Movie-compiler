//const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result = array.map(function (movie) {
      return movie.director;
  });
  console.log("EXERCISE 1 ->", result);

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  
  let someFilms = movies.filter(value => value.director === director);
  console.log('EXERCISE 2 ->', someFilms);

  return someFilms;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  
    let data = getMoviesFromDirector(movies, director);

    let average = data.reduce((acc, el) => acc.score + el.score);
    average = Number((average / data.length).toFixed(2));
    console.log('EXERCISE 3 ->', average);

    return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
    let movieTitles = array.map(value => value.title);

    movieTitles.sort((a, b) => (a > b ? 1 : -1));
    movieTitles = movieTitles.splice(0, 20);

    console.log('EXERCISE 4 ->', movieTitles);

    return movieTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderedFilmsYearAZ = [...array];

  orderedFilmsYearAZ.sort((a,b) => {
    if (a.year > b.year){
      return 1; 
    } else if (b.year > a.year) {
      return -1;
    }
    else { 
      if (a.title > b.title) {
        return 1;
    } else if (b.title > a.title) {
      return -1;
    }
    return 0;
}})

  console.log('EXERCISE 5 ->', orderedFilmsYearAZ);
  return orderedFilmsYearAZ;
}
    

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
