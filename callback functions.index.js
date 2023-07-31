function convertToUpperCase(movie, callback) {      /////   1
    if (!movie.genre) {
      console.log("This movie doesn't have a genre")
    } else {
      movie.genre = callback(movie.genre)
      console.log(movie)
    }
  }
  
  let movie1 = { title: "Movie 1", genre: "action" };  
  convertToUpperCase(movie1, genre => genre.toUpperCase());


  function ratingisNumber(movie,callback){       ///////   2
  return callback(movie);
}
  let movie2= { title: "Movie 1", rating:8};
  console.log(ratingisNumber(movie2,rating=> (typeof (movie2.rating)!=="number"?"This movie doesn't have rating" : 
  `${movie2.title} has a numerical rating of ${movie2.rating}`)));
  


  function addExclamation(title,callback){      /////    3
    return callback(title);
  }
console.log(addExclamation(movie1,title=>`${movie1.title}!`));

function reverseWords(description,callback){
 return callback(description);
}
let movie={ title: "Movie 1", description: "An exciting action thriller" }
console.log(reverseWords(movie.description,(description)=>description.split(' ').reverse().join(' ')));
