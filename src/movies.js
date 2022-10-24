// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let newArray = moviesArray.map(element => element.director);
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let filteredArray = moviesArray.filter(function(element){
    return element.genre.includes('Drama') &&
    element.director === 'Steven Spielberg';
  })
  return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// should return the average score of 2 movies with score 8 each

function scoresAverage(moviesArray) {
  if(moviesArray.length === 0) return 0;
  let res = moviesArray.reduce((acum, current) => {
    if(!current.score) return acum;
    return current.score + acum;
  }, 0);
  let final = res / moviesArray.length;
  return Number(final.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(element => element.genre.includes('Drama'));
    if(dramaMovies.length === 0) return 0;
    let sumMovies = dramaMovies.reduce(function(acum, movie) {
        return acum + movie.score;
    }, 0)
   return Number((sumMovies / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let arrayCopy = JSON.parse(JSON.stringify(moviesArray));
    arrayCopy.sort(function(a, b){
      return a.year - b.year
    });
    arrayCopy.sort(function(a, b){
      if(a.year === b.year){
      return a.title.localeCompare(b.title)};
    });
    return arrayCopy;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    let arrayCopy = JSON.parse(JSON.stringify(moviesArray));
    arrayCopy.sort(function(a, b){
      return a.title.localeCompare(b.title)
    });
    let first20 = arrayCopy.slice(0, 20);
    return first20.map(element => element.title);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



