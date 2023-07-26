//1.Calculate Average Ratings
const moviesAverageRatingsData=[
    { title: "Movie 1", ratings: [8, 7, 9]},
    { title: "Movie 2",ratings: [6, 8, 7]}, 
    { title: "Movie 3", ratings: [9, 9, 10]}
                ]
   
   function avaerages(moviesAverageRatingsData) {
       let averagesArray= [];
   
       for(const movie of moviesAverageRatingsData){
           let sum =0;
           for(const rating of movie.ratings){
               sum +=rating;
           }
           const avaerage= sum/movie.ratings.length;
           averagesArray.push(avaerage);
       } 
       return averagesArray
   }           
   console.log(avaerages(moviesAverageRatingsData))
  
   //2.Find Top Rated Movies
   const moviesTopRatedData=[
    { title: "Movie 1", rating: 8 },
    { title: "Movie 2", rating: 7}, 
    { title: "Movie 3", rating: 9 }
]
   function findTopRatedMovie( moviesTopRatedData) {
    let highest=0;
    let ratedArray=[];
    for(const movie of  moviesTopRatedData) {
        if (movie.rating > highest) {
            highest=movie.rating;
    ratedArray=movie.title;
    }

    }
    return ratedArray}
 console.log(findTopRatedMovie( moviesTopRatedData))
 //3.Create Rating Matrix
 let  moviesRatingMatrixData=[
    { title: "Movie 1", ratings: [8, 7, 9]},
    { title: "Movie 2",ratings: [6, 8, 7]}
                 ]
 
 function  createRatingMatrix( moviesRatingMatrixData){
    let matrixArray=[]
    let tempArray1= moviesRatingMatrixData[0].ratings
   console.log(tempArray1)
       for(const movie of  moviesRatingMatrixData){
        let tempArray2=[]
           for(const rating of movie.ratings)
           {
            tempArray2.push(rating);
           }
           matrixArray=[tempArray1,tempArray2];
       } 
       return matrixArray
   }                
 console.log(createRatingMatrix( moviesRatingMatrixData))
 //4.Count Movies with a Rating Above Threshold
 function countMoviesAboveThreshold( moviesTopRatedData,threshold) {
   let countOfMovies=0
   let i=0
    while ( i<  moviesTopRatedData.length) {
        if( moviesTopRatedData[i].rating >= threshold){
            countOfMovies++;
        }
       i++ 
    } 
    return countOfMovies;
 }
 let threshold = 8;
console.log(countMoviesAboveThreshold( moviesTopRatedData,threshold))
//5.Find First Movie with a Specific Genre
let moviesCommonGenresData=[
    { title: "Movie 1", genres: ["Action", "Drama"] },
    { title:"Movie 2", genres: ["Drama", "Romance"] },
    { title: "Movie 3",genres: ["Action", "Thriller"] }
              ]
function findFirstMovieSpecific(moviesCommonGenresData,genre){
 let firstmove;
 let i=0
 while (i < moviesCommonGenresData.length) {
        if (moviesCommonGenresData[i].genres.includes(genre)) {
        return firstmove=moviesCommonGenresData[i]; 
        }
    i++;
 }   
return null;
}
let genre='Romance';
console.log(findFirstMovieSpecific(moviesCommonGenresData,genre))
//6.Draw Movie Rating Chart
function drawMovieRatingChart( moviesTopRatedData){
    let numberofstar=0
    let outputstring=''
    for (let i = 0; i <  moviesTopRatedData.length; i++) {
        numberofstar = moviesTopRatedData[i].rating
        let starstring='*'.repeat(numberofstar)
     console.log(`Movie ${i+1} : ${starstring} `)
    } 
}

drawMovieRatingChart( moviesTopRatedData)