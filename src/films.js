//const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result = array.map (movie => movie.director);

  console.log("EXERCISE 1 ->", result);

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  
  let isDirector = (value => value.director === director)

  let someFilms = array.filter(isDirector);
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

    movieTitles.sort((a, b) => (a > b ? 1 : -1)); //Sort method & Ternary Operator
    movieTitles = movieTitles.splice(0, 20);

    console.log('EXERCISE 4 ->', movieTitles);

    return movieTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const orderedFilmsYearAZ = [...array]; // Making a clone from the original array

  return orderedFilmsYearAZ.sort(function (a, b) { //Sort method
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  console.log('EXERCISE 5 ->', orderedFilmsYearAZ);
}
    
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  let filmScore = array.filter(value => value.score !== ''); 
  let filmGenre = filmScore.filter(value => value.genre.includes(genre));

  let scores = filmGenre.map(value => value.score);

  let genreAverageScore = scores.reduce((a,b) => a + b, 0);
  let averageCategory = parseFloat((genreAverageScore / filmGenre.length).toFixed(2));

  console.log('EXERCISE 6 ->', averageCategory);

  return averageCategory;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let durationFilms = array.map(movies => {
    let stringDuration = movies.duration;
    let duration = 0;

    let value = stringDuration.split(" ");
    value.map(time => {
      let minutes = parseInt(time);

      if (time.includes("h")) {
        duration += minutes * 60;
      } else if (time.includes("min")) {
        duration += minutes;
      }
    })
    let moviesDurationMinutes = {...movies, duration}; return moviesDurationMinutes;
  })
  console.log('EXERCISE 7 ->', durationFilms);
  return durationFilms;
  
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
    
    let filmOfTheYear = array.filter (value => value.year === year);
    filmOfTheYear.sort(function(a, b) {
      if (a.score > b.score) {
        return -1;
      }
      if (a.score < b.score) {
        return 1;
      }
      return 0;
    });
    console.log('EXERCISE 8 ->', filmOfTheYear);
    return filmOfTheYear.splice(0, 1);
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
