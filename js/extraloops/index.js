 
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
  
  
 //1. Calculate Average Rating
function calculateAverageRating(moviesAverageRatingsData,NameMovie){
      let sum=0;
      let avg=0;
      for (const movie of moviesAverageRatingsData) {
          if (movie.title === NameMovie) {
              for (const rating of movie.ratings) {
                    sum = + rating; 
              } return avg=movie.ratings.length;
            
          } else {return null }
      }
  }
  let NameMovie='Movie 1';
  console.log('ex1:')
  console.log(calculateAverageRating(moviesAverageRatingsData,NameMovie));
  
  ////////////////////////////////////////////////////////////
   //2.Find Highest Rated Movie
   const highestRatedMovieData= [
     { name: "Movie 1", ratings: [5, 6, 7]},
     { name: "Movie 2", ratings:[8, 9, 9]}, 
     { name: "Movie 3", ratings: [6, 8, 8]}
    ]
   function findHighestRatedMovie( highestRatedMovieData) {
    let highestRated=0;
    let rated;
       for (let i = 0; i < highestRatedMovieData.length; i++) {
        let sum=0
        for (let j = 0; j < highestRatedMovieData[i].ratings.length; j++) {
          sum += highestRatedMovieData[i].ratings[j]
        } if (sum > highestRated) {
           highestRated=sum
           rated= highestRatedMovieData[i];
           
        }
        
       } return rated;
   }
   console.log('ex2:')
   console.log(findHighestRatedMovie(highestRatedMovieData));
    
  //3. Find Most Rated Movie
  let mostRatedMovieData=[
    { name: "Movie 1", ratings: [5, 6, 7, 6]},
    { name: "Movie 2",ratings: [8, 9, 9]}, 
    { name: "Movie 3", ratings: [6, 8, 8]}
  ]

  function findMostRatedMovie(mostRatedMovieData){
    let mostrated; 
    for (let i = 0; i < mostRatedMovieData.length; i++) {
     let lengthOfratings=0;
     
      for (let j = 0; j < mostRatedMovieData[i].ratings.length; j++) {
        
        if (mostRatedMovieData[i].ratings.length > lengthOfratings)
         {
          lengthOfratings=mostRatedMovieData[i].ratings.length;
          mostrated=mostRatedMovieData[i];
        }
        
      }return mostrated;
      
    }
  }
  console.log('ex3:')
  console.log(findMostRatedMovie(mostRatedMovieData));

  //4. Remove Lowest Rating
  let removeLowestRatingData=[
    { name: "Movie 1", ratings: [5, 6, 7]},
     { name: "Movie 2", ratings:[4, 2, 9]}
    ]
  function removeLowestRating(removeLowestRatingData,movieName){ 
    
    let Lowestrated; 
    for (const movie of removeLowestRatingData) {
      if (movie.name == movieName) {
        movie.ratings.sort().shift() ;
        Lowestrated=movie;
      }
      
    } return Lowestrated
  }
  let movieName='Movie 1';
  console.log('ex4:')
  console.log( removeLowestRating(removeLowestRatingData,movieName))
  
  //5. Movie Rating Histogram
  let movieRatingHistogramData=[
    { name: "Movie 1", ratings: [5, 6, 7, 7]},
    { name: "Movie 2",ratings: [8, 9, 9]}
    ]
    function movieRatingHistogram(movieRatingHistogramData,movieName){
       let movieHistogram={};
       let checkrating
      
       for (const movie of movieRatingHistogramData) {
        if (movie.name == movieName) {
        let num=0;
          for (const rating of movie.ratings) {
            
           
           movieHistogram[rating] =(movieHistogram[rating] || 0) +1;
          }
        }
        
       }return movieHistogram;
    }
    let movieNameH="Movie 1";
    console.log(movieRatingHistogram(movieRatingHistogramData,movieNameH))