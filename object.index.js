const movieDatabase ={
    movies:[],
    addMovie:function(movieTitle,ratings,averageRating){
this.movies.push({title:movieTitle,rating:ratings,averageRating:averageRating})
    },
    removeMovie:function(movieTitle){
        this.movies=this.movies.filter((movie)=>movie.title !== movieTitle)
    },

    addRating : function (MovieTitle,rating) {
        const movie = this.movies.find((movie)=> movie.title === MovieTitle)
        if(movie){
          movie.ratings.push(rating)};
     calculateAverageRating(MovieTitleovieTitle)      //this for ex 3.2

        },
    removeRating:function(MovieTitle,rating){
        const movie = this.movies.find((movie)=> movie.title === MovieTitle)
        if(movie){this.movies=this.movies.filter((movie)=>movie.ratings===rating)
        };
        calculateAverageRating(MovieTitleovieTitle)      //this for ex 3.2

    },
    calculateAverageRating:function(MovieTitle){
const movie=this.movies.find((movie)=>movie.title===MovieTitle)
if(movie){
    const sum=movie.ratings.reduce((acc,ra)=>acc+ra,0)
    movie.averageRating=movie.ratings.length > 0 ? sum/movie.ratings.length :0;
}
    },
    searchMovie:function(MovieTitle){
        const movie = this.movies.find((movie)=> movie.title === MovieTitle);
if(movie){ return [`${MovieTitle}`];

}
    },
    sortMoviesByRating:function(MovieTitle,averageRating){
        this.movies.sort((a,b)=>{
         if (b.averageRating!==a.averageRating) {
            return b.averageRating-a.averageRating;
         }  
         return a.title.localeCompare(b.title);});
        },
        sortMoviesByTitle:function(MovieTitle){
            this.movies.sort((a,b)=>{a.title.localeCompare(b.title);});
        }

}
movieDatabase.addMovie("fast&ferios",[],5)
movieDatabase.addMovie("abc",[],4)
console.log(movieDatabase.movies)
console.log(movieDatabase.searchMovie("fast&ferios"))
console.log(movieDatabase.sortMoviesByRating())

