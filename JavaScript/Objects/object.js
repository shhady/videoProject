


const movieDatabase =
 { movies:[],
    addMovie : function (movieTitle, ratings,average) {
        this.movies.push({title: movieTitle, ratings:ratings, averageRating:average}) 

        


    } ,

    removeMovie : function ( title  ){ this.movies = this.movies.filter (this.movies === title ) } ,

    addRating : function (titleMovie , rating){ this.title.include(this.title===titleMovie )}
    
}

movieDatabase.addMovie('fast & f',[], 0)
movieDatabase.addMovie('gladiator',[2,1,4], 3)
// {title :"" , ratings :null , averageRating:null }

// console.log(movieDatabase.movies)



addRating: function (title, rating) {
    const movie = this.movies.find(movie => movie.title === title);
    if (movie) {
      movie.ratings.push(rating);
    }


// exercise 2 :

 movieDatabase.addRating();









