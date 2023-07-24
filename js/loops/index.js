//1.Calculate Average Ratings
const movies=[
    { title: "Movie 1", ratings: [8, 7, 9]},
    { title: "Movie 2",ratings: [6, 8, 7]}, 
    { title: "Movie 3", ratings: [9, 9, 10]}
                ]
   
   function avaerages(movies) {
       let averagesArray= [];
   
       for(const movie of movies){
           let sum =0;
           for(const rating of movie.ratings){
               sum +=rating;
           }
           const avaerage= sum/movie.ratings.length;
           averagesArray.push(avaerage);
       } 
       return averagesArray
   }           
   console.log(avaerages(movies))
   //2.Find Top Rated Movies
   let ratedMovies=[
    { title: "Movie 1", rating: 8 },
    { title: "Movie 2", rating: 7}, 
    { title: "Movie 3", rating: 9 }
]
   function findTopRatedMovie(ratedMovie) {
    let highest=0;
    let ratedArray=[];
    for(const movie of ratedMovie) {
if (movie.rating > highest) {
    highest=movie.rating;
    ratedArray=movie.title;
    }

    }
    return ratedArray}
 console.log(findTopRatedMovie(ratedMovies))
 //3.Create Rating Matrix
 let matrixMovie=[
    { title: "Movie 1", ratings: [8, 7, 9]},
    { title: "Movie 2",ratings: [6, 8, 7]}
                 ]
 
 function  createRatingMatrix(matrixMovie){
    let matrixArray=[]
    let tempArray1=matrixMovie[0].ratings
   console.log(tempArray1)
       for(const movie of matrixMovie){
        let tempArray2=[]
           for(const rating of movie.ratings){
            tempArray2.push(rating);
           }
           matrixArray=[tempArray1,tempArray2];
       } 
       return matrixArray
   }                
 console.log(createRatingMatrix(matrixMovie))
 //4.Count Movies with a Rating Above Threshold
 function countMoviesAboveThreshold(ratedMovies,threshold) {
   let countOfMovies=0
   let i=0
    while ( i< ratedMovies.length) {
        if(ratedMovies[i].rating >= threshold){
            countOfMovies++;
        }
       i++ 
    } 
    return countOfMovies;
 }
 let threshold = 8;
console.log(countMoviesAboveThreshold(ratedMovies,threshold))
//5.Find First Movie with a Specific Genre
let genreArray=[
    { title: "Movie 1", genres: ["Action", "Drama"] },
    { title:"Movie 2", genres: ["Drama", "Romance"] },
    { title: "Movie 3",genres: ["Action", "Thriller"] }
              ]
function findFirstMovieSpecific(genreArray,genre){
 let firstmove;
 let i=0
 while (i < genreArray.length) {
        if (genreArray[i].genres.includes(genre)) {
        return firstmove=genreArray[i]; 
        }
    i++;
 }   
return null;
}
let genre='Romance';
console.log(findFirstMovieSpecific(genreArray,genre))
//Draw Movie Rating Chart
function drawMovieRatingChart(ratedMovies){
    let numberofstar=0
    let outputstring=''
    for (let i = 0; i < ratedMovies.length; i++) {
        numberofstar =ratedMovies[i].rating
        let starstring='*'.repeat(numberofstar)
     console.log(`Movie ${i+1} : ${starstring} `)
    } 
}
drawMovieRatingChart(ratedMovies)