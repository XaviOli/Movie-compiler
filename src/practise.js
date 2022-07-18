const netflix = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    }
];

/* const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.map(number => number + 1);

console.log(originalArray);
console.log(newArray);*/

/*const newNetflix = netflix.map (value => value.duration);*/

// Exercise 1: Get the array of all directors.

function getAllDirectors(netflix) {  //let result = array.map(movie => movie.director);

  let result = netflix.map(function (movie) {
      return movie.director;
  });
  console.log("EXERCISE 1 ->", result);

  return result;
}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(netflix, director){
  
  const esCoppola = (value => value.director === 'Francis Ford Coppola');
  const arrayMovies = netflix.filter (esCoppola);
  return arrayMovies;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(netflix) {
  
  let data = getMoviesFromDirector(netflix);

  let average = data.reduce((acc, el) => acc.score + el.score);
  average = Number((average / data.length).toFixed(1));
  console.log('EXERCISE 3 ->', average);

  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(netflix) {

  let movieTitles = netflix.map(value => value.title);

  movieTitles.sort((a, b) => (a > b ? 1 : -1));
  movieTitles = movieTitles.splice(0, 20);

  console.log('EXERCISE 4 ->', movieTitles);
}

// Exercise 5: Order by year, ascending
function orderByYear(netflix) {
  
  let films = netflix.map(e => ({...e}));

  let moviesOrdered = netflix.sort((a, b) => {
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
