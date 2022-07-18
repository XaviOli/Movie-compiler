// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {  //let result = array.map(movie => movie.director);

  let result = array.map(function (movie) {
      return movie.director;
  });
  console.log("EXERCISE 1 ->", result);

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies) {
  
  let someFilms = movies.filter(value => value.director === director);
  console.log('EXERCISE 2 ->', someFilms);

  return someFilms;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies) {
  
    let data = getMoviesFromDirector(movies);

    let average = data.reduce((acc, el) => acc.score + el.score);
    average = Number((average / data.length).toFixed(1));
    console.log('EXERCISE 3 ->', average);

    return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  
    let movieTitles = movies.map(value => value.title);

    movieTitles.sort((a, b) => (a > b ? 1 : -1));
    movieTitles = movieTitles.splice(0, 20);

    console.log('EXERCISE 4 ->', movieTitles);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
    
    let films = movies.map(e => ({...e}));

    let moviesOrdered = movies.sort((a, b) => {
        if (a.year == b.year) {
          return a.title ? 1 : -1;
        }
        return a.year - b.year;
    });
    console.log('EXERCISE 5 ->', moviesOrdered);
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
