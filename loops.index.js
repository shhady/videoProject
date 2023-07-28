// Mock data for Exercise 1: Calculate Average Ratings
const moviesAverageRatingsData = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] },
    { title: "Movie 3", ratings: [9, 9, 10] },
  ];
  
  // Mock data for Exercise 2 and 5
  const moviesTopRatedData = [
    { title: "Movie 1", rating: 8 },
    { title: "Movie 2", rating: 7 },
    { title: "Movie 3", rating: 9 },
  ];
  
  // Mock data for Exercise 3: Create Rating Matrix
  const moviesRatingMatrixData = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] },
  ];
  
  // Mock data for Exercise 4: Find Common Genres
  const moviesCommonGenresData = [
    { title: "Movie 1", genres: ["Action", "Drama"] },
    { title: "Movie 2", genres: ["Drama", "Romance"] },
    { title: "Movie 3", genres: ["Action", "Thriller"] },
  ];
//   1. Calculate Average Ratings
function moviesAverageRatings(moviesAverageRatingsData){
    let AverageRatting=[];
    for(let i=0;i<moviesAverageRatingsData.length;i++){
        // const movie = moviesAverageRatingsData[i];
        let sumOfRatting = 0;
        for (let j=0;j<moviesAverageRatingsData[i].ratings.length ;j++){
sumOfRatting +=moviesAverageRatingsData[i].ratings[j];
        }
   const    Average=sumOfRatting/moviesAverageRatingsData[i].ratings.length;
AverageRatting.push(Average);
  }
  return AverageRatting ; 
}
AverageRatting=moviesAverageRatings(moviesAverageRatingsData)
console.log(AverageRatting);

// 2. Find Top Rated Movies
// Task: Write a function that finds the movies with the highest ratings in the given array
// and returns an array with their titles.
// Inputs: An array of movie objects.
// Example:
// Input:
// [{ title: "Movie 1", rating: 8 }, { title: "Movie 2", rating: 7
// }, { title: "Movie 3", rating: 9 }]
// Output: ["Movie 3"]
// Tip: Implement a loop to compare the ratings of each movie and keep track of the toprated movies.

const topRated = (moviesTopRatedData)=>{
  let maxRating = 0;
  for(let i = 0; i < moviesTopRatedData.length; i++){
      if(moviesTopRatedData[i].rating > maxRating){
          maxRating = moviesTopRatedData[i].rating;
      }
  }
  const topRatedMovie = [];
  for(let i = 0; i < moviesTopRatedData.length; i++){
      if(moviesTopRatedData[i].rating === maxRating){
          topRatedMovie.push(moviesTopRatedData[i].title);
      }
  }
  return topRatedMovie;
}

console.log(topRated(moviesTopRatedData))
// 3. Create Rating Matrix
// Task: Write a function that creates a 2D array (matrix) where each row represents a
// movie and each column represents a rating.
// Inputs: An array of movie objects.
// Example:
// Input:
// [{ title: "Movie 1", ratings: [8, 7, 9]}, { title: "Movie 2",
// ratings: [6, 8, 7]}]
// Output: [[8, 7, 9], [6, 8, 7]]
// Tip: Use loops to populate the matrix with the ratings of each movie.
const ratingOnly=(moviesRatingMatrixData)=>{
  const ratingarr=[];

  for(let i=0;i<moviesRatingMatrixData.length;i++){
    
  ratingarr.push(moviesRatingMatrixData[i].ratings);}
  return ratingarr;
}
console.log(ratingOnly(moviesRatingMatrixData))
// 4. Count Movies with a Rating Above Threshold
// Task: Write a function that counts the number of movies in the given array that have a
// rating above a specified threshold.
// Inputs: An array of movie objects, a rating threshold.
// Example:
// Input:
// [{ title: "Movie 1", rating: 8 }, { title: "Movie 2", rating: 7
// }, { title: "Movie 3", rating: 9 }]
// , rating threshold: 8
// Output: 2
// Tip: Use a while loop to iterate over the movies, increment a counter variable for each
// movie with a rating above the threshold, and return the final count.
const moviesCounter=(moviesTopRatedData,threshold)=>{
  let i=0;
  let counter=0;

  while (i<moviesTopRatedData.length){
    const threshold=8;
    if(moviesTopRatedData[i].rating>=threshold){
      counter ++;
    }
    i++; 

  }
  return counter
}
console.log(moviesCounter(moviesTopRatedData))

// 5. Find First Movie with a Specific Genre
// Task: Write a function that finds the first movie in the given array that has a specific
// genre.
// Inputs: An array of movie objects, a genre.
// Example:
// Input:
// [{ title: "Movie 1", genres: ["Action", "Drama"] }, { title:
// "Movie 2", genres: ["Drama", "Romance"] }, { title: "Movie 3",
// genres: ["Action", "Thriller"] }]
// , genre: "Romance"
// Output: { title: "Movie 2", genres: ["Drama", "Romance"] }
// Tip: Use a while loop to iterate over the movies, check if the current movie has the
// specified genre, and return the first movie that matches the genre.

const specificGenre=(moviesCommonGenresData,genres)=>{
  let i=0;
  const genre="Romance";

  while(i<moviesCommonGenresData.length){
    if(moviesCommonGenresData[i].genres===genre)  
i++;
return moviesCommonGenresData[i]; }
}
console.log(specificGenre(moviesCommonGenresData));

// 6. Draw Movie Rating Chart
// Task: Write a function that draws a chart or graph representation of the movie ratings
// using loops.
// Inputs: An array of movie objects.
// Example:
// Input:
// [{ title: "Movie 1", rating: 8 }, { title: "Movie 2", rating: 7
// }, { title: "Movie 3", rating: 9 }]
// Output:
// Movie 1: ********
// Movie 2: *******
// Movie 3: *********
// Tip: Use loops to iterate over the movies and their ratings to visualize the ratings in a
// meaningful way.

const movieChart=(moviesTopRatedData)=>{
  const stars="*".repeat(moviesTopRatedData.rating)

  for(const Movie of moviesTopRatedData)
  
  return stars;
}
console.log(movieChart(moviesTopRatedData));

