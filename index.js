// Relevant to string exercises 3, 4, 5, 6
let gameData = {
    player: {
      name: "Hero",
      health: 100,
      level: 1,
      location: "forest",
      inventory: ["sword", "health potion"],
    },
    monsters: [
      {
        name: "Goblin",
        health: 25,
        location: "forest",
      },
      {
        name: "Ogre",
        health: 50,
        location: "mountain",
      },
      {
        name: "Dragon",
        health: 100,
        location: "castle",
      },
      {
        name: "Witch",
        health: 30,
        location: "swamp",
      },
      {
        name: "Ghost",
        health: 15,
        location: "graveyard",
      },
    ],
  };
  
  // ex 1
  /*
  1. Character Name Capitalization: Write a function, toTitleCase(name) , that takes a
      character's name string in all lowercase and returns it in title case.
      Input: "iron warrior"
      Output: "Iron Warrior"
  */
  function toTitleCase(name) {
    return name.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
               .join(' ');
  }
  
  const inputName = "the dark knight ";
  const outputName = toTitleCase(inputName);
  console.log(outputName);
  // Output: "Iron Warrior"
  
  //-----------------------------------------------------------------------------
  /*
  2. Item Search: Write a function, searchInventory(inventory, query) , that takes in an
  array of inventory item names and a string search query. The function should return a new
  array with only the items that contain the query string.
  Input: ["Iron Sword", "Healing Potion", "Steel Shield"], "Iron"
  Output: ["Iron Sword"]
  */
  function searchMovies(movies, query) {
    //the filter method It is used to create a new array containing elements from the original array that satisfy a specified condition. The filter() method does not modify the original array; instead, it returns a new array with the filtered elements.
    const result = movies.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    return result ; 
  }
    const movies = ["The Dark Knight", "Inception", "Interstellar"];
    const query = "In";
    const output = searchMovies(movies, query);
    console.log(output);
  
    //---------------------------------------------------------------------------
    /*
    3. NPC Name Format: Write a function, formatNPCName(name) , which takes an NPC's
    name in the format "last, first" and swaps it to "first last".
    Input: "Nolan, Christopher"
    Output: "Christopher Nolan"

    */
  function formatDirectorName(name){
      const [last, first] = name.split(", ");
      return `${first} ${last}`;
  }  
    const inputName1 = "Nolan, Christopher";
    const outputName1 = formatDirectorName(inputName1);
    console.log(outputName1);
    // Output: "Christopher Nolan"

    //-------------------------------------------------------------------------
    /*
    4. Movie Length: Write a function, parseDuration(duration) , that takes a string like "2h
    30min" and returns an object with the number of hours and minutes as integers.
    */
    function parseDuration(duration) {
        //Extract hours and minutes from the input string
        const [hoursPart, minutesPart] = duration.split(' ');
      
        //Convert hours and minutes to integers
        const hours = parseInt(hoursPart) || 0;
        const minutes = parseInt(minutesPart) || 0;
      
        //Return an object with the hours and minutes
        return {
          hours: hours,
          minutes: minutes
        };
      }

      const durationString = "2h 30min";
      const durationObject = parseDuration(durationString);
      console.log(durationObject); //{ hours: 2, minutes: 30 }      

//-----------------------------------------------------------------------------
    /*
    5. Movie Initials: Write a function, getMovieInitials(title) , that takes a movie title and
    returns its initials.
    */
function getMovieInitials(title){
    //Split the title into words
    const words = title.split(' ');
  
    //Get the first letter of each word
    const acronymLetters = words.map(word => word[0]);
  
    //Join the letters together to form the acronym
    const acronym = acronymLetters.join('');
  
    //Convert the acronym to uppercase (if it was all small letters )
    const acronymUppercase = acronym.toUpperCase();
  
    //Return the final acronym
    return acronym;
  }
  
  // Test the function with the input "Epic Fantasy Battle"
  const title = "The Dark Knight"  ;
  const acronym = getMovieInitials(title);
  console.log(acronym); // Output: "TDK"

  //---------------------------------------------------------------------------
  /*
  6. Concatenate Movie Details: Write a function, getMovieDetails(movie) , that takes an
  object with movie details like title, director, and genre and returns a single string that
  combines all this information.
  Input:
  { title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi"
  }
  Output: "Inception, directed by Christopher Nolan, genre: Sci-Fi"
*/
function getMovieDetails(movie)
{
  console.log ("title: " + movie.title + ", "+ "directed by: " + movie.director + ", " +"genre: " + movie.genre);
}
//the movie objects 
const movieObj ={
  title : "Inception",
  director :'Christopher Nolan', 
  genre : 'Sci-Fi'
};
//calling the function with the moiveObj 
getMovieDetails(movieObj);

//-----------------------------------------------------------------------------
/*
7. Movie Slug: Write a function, createSlug(title) , that takes a movie title and returns a
URL-friendly slug.
Input: "The Dark Knight"
Output: "the-dark-knight"
*/
const createSlug = (title) => {
  return title
        .split(" ")
        .map(word => word.toLowerCase())
        .join('-');
}
const Result = createSlug ('The Dark Knight');
console.log(Result);