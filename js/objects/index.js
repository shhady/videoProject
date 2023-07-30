//1: Creating the Movie Database
movieDatabase ={
movies:[],

//ex 1.3
addMovie : function(MovieTitle){
  this.movies.push({title:MovieTitle, ratings:[],averageRatings:0})
                               },
//ex 1.4
removeMovie : function (MovieTitle) {
 //this.movies.filter(movie => movie.title !==MovieTitle)
  this.movies=this.movies.filter(movie => movie.title !== MovieTitle)
                                    },  
//ex 2.1
addRating : function (MovieTitle,rating) {
  const movie = this.movies.find((movie)=> movie.title === MovieTitle)
  console.log(movie)
  if(movie){
    movie.ratings.push(rating)
   this.calculateAverageRating(MovieTitle) //ex 3.2
  }
//  for(let movie of this.movies) {
//     if(movie.title==MovieTitle){movie.ratings.push(rating)}
//                                }
                                         },
//ex 2.2
removeRating : function (MovieTitle,ratingMovie) {
    for(let movie of this.movies) {
                  if(movie.title==MovieTitle){
                     movie.ratings =movie.ratings.filter( rating => rating !== ratingMovie)
                     this.calculateAverageRating(MovieTitle) //ex 3.2
                    }
                                  }
                                                 },

 //ex 3.1                                    
 calculateAverageRating : function (MovieTitle){
    const movie = this.movies.find((movie)=> movie.title === MovieTitle)
    if(movie){
       const sum = movie.ratings.reduce((acc, ra)=> acc + ra ,0)
       movie.averageRatings = movie.ratings.length > 0 ? sum/movie.ratings.length : 0;
             }
                                               },     

  //ex 4 
 

  searchingMovies : function (stringToSearch){
    const array=[]
    for (const movie of this.movies) {
      const array1 =movie.title.split(''); 
           if(array1.includes(stringToSearch)){
               array.push(movie.title)
                  return array
                             }
      
                 else{const str="no searching results";
                 return str;}
                                     }
                                              } ,
 //ex 5.1  Sorting Movies
 SortingMoviesByRatings : function () {

  this.movies.sort((movie1, movie2) => {
   
    if (movie2.averageRatings !== movie1.averageRatings) {
      return movie2.averageRatings - movie1.averageRatings;
    } 
    if (movie1.title < movie2.title) return -1;
    if (movie1.title > movie2.title) return 1;
    return 0;
  });
 // return this.movies.sort((movie1, movie2) => movie2.averageRatings - movie1.averageRatings);
 },

  SortingMoviesByTitle : function () {

   this.movies.sort((movie1, movie2) => {
      const title1 = movie1.title.toUpperCase(); 
      const title2 = movie2.title.toUpperCase(); 
      if (title1< title2) {
        return -1;
      }
      if (title1 > title2) {
        return 1;
      }
      return 0;
    });
  
 },                                                
                                            }                                         
   

                                
                                        
console.log("ex 1.3")                                        
movieDatabase.addMovie("abc")
console.log(movieDatabase.movies)

console.log("ex 1.4")  
movieDatabase.removeMovie("abc")
console.log(movieDatabase.movies)

//add element to array to use in the next ex
console.log("add element to array to use in the next ex")  
movieDatabase.addMovie("abc")
console.log(movieDatabase.movies)

console.log("ex 2.1")  

movieDatabase.addRating("abc",6)
console.log(movieDatabase.movies)

console.log("ex 2.2")  
movieDatabase.removeRating("abc",6)
console.log(movieDatabase.movies)

////add element rating
movieDatabase.addRating("abc",2)
movieDatabase.addRating("abc",4)

console.log("ex 3.1")  
movieDatabase.calculateAverageRating("abc")
console.log(movieDatabase.movies)


console.log("ex 4")
console.log(movieDatabase.searchingMovies("a"))
console.log(movieDatabase.searchingMovies("f"))

movieDatabase.addMovie("xyz")
console.log(movieDatabase.movies)
movieDatabase.addRating("xyz",10)
movieDatabase.addRating("xyz",8)
movieDatabase.addMovie("efg")
movieDatabase.addRating("efg",6)
movieDatabase.addRating("efg",4)
console.log(movieDatabase.movies)
//ex 5.1
console.log("ex 5.1")
movieDatabase.SortingMoviesByRatings ()
console.log(movieDatabase.movies)

console.log("ex 5.2")
movieDatabase.SortingMoviesByTitle ()
console.log(movieDatabase.movies)
