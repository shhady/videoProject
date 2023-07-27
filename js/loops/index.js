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
    return ratedArray // CR - your code code is perfect but you must format your document to be more readable. Ask Shhady today to show you how to easily format your code
 console.log(findTopRatedMovie(ratedMovies))
 //3.Create Rating Matrix
 let  moviesRatingMatrixData=[
    { title: "Movie 1", ratings: [8, 7, 9]},
    { title: "Movie 2",ratings: [6, 8, 7]}
                 ]
 
//  function  createRatingMatrix( moviesRatingMatrixData){
//     let matrixArray=[]
//     let tempArray1= moviesRatingMatrixData[0].ratings
//    console.log(tempArray1)
//        for(const movie of  moviesRatingMatrixData){
//         let tempArray2=[]
//            for(const rating of movie.ratings)
//            {
//             tempArray2.push(rating);
//            }
//            matrixArray=[tempArray1,tempArray2];
//        } 
//        return matrixArray
//    }                
//  console.log(createRatingMatrix( moviesRatingMatrixData))
function createRatingMatrix(matrixMovie){
    let matrixArray=[]; 
    let tempArray1=matrixMovie[0].ratings; // CR - This line limits the function to handle only the first and one other movie in the array
    console.log(tempArray1); // CR - Console logging the first movie's ratings, might not be needed in the final version
    
    for(const movie of matrixMovie){ 
        let tempArray2=[]; 
        for(const rating of movie.ratings){ 
            tempArray2.push(rating); 
        }
        matrixArray=[tempArray1,tempArray2]; // CR - Reassigning matrixArray in each loop iteration, which overwrites the previous value and does not accommodate for more than two movies
    } 
    return matrixArray; 
}
/*
    CR - Here's a correct version of the solution:
    function createRatingMatrix(matrixMovie){
        let matrixArray = [];    
        for(const movie of matrixMovie){
            let tempArray = [];
            for(const rating of movie.ratings){
                tempArray.push(rating);
            }
            matrixArray.push(tempArray);
        } 
        return matrixArray;
    }

*/
               
 console.log(createRatingMatrix(matrixMovie))
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
// function findFirstMovieSpecific(moviesCommonGenresData,genre){
//  let firstmove;
//  let i=0
//  while (i < moviesCommonGenresData.length) {
//         if (moviesCommonGenresData[i].genres.includes(genre)) {
//         return firstmove=moviesCommonGenresData[i];
//         }
//     }
    //        }
function findFirstMovieSpecific(genreArray,genre){
 let firstmove; // CR - this is not needed
 let i=0
 while (i < genreArray.length) {
        if (genreArray[i].genres.includes(genre)) {
        return firstmove=genreArray[i]; // CR - here you could just write return genreArray[i];
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
    for (let i = 0; i < ratedMovies.length; i++) {
        numberofstar =ratedMovies[i].rating
        let starstring='*'.repeat(numberofstar) // CR - here you could just write so the previousline is not needed - const starstring='*'.repeat(ratedMovies[i].rating) - I used 'const' because it is a new string in each iteration
     console.log(`Movie ${i+1} : ${starstring} `)
    } 

drawMovieRatingChart(ratedMovies)
