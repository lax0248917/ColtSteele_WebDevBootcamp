//MovieDB
//Create an array of movie objects. Each movie should have a title, ratings, and hasWatched properties. Iterate through the array and print out somethin that looks like:

//You have watched "In Bruges" - 5 stars
//You have not seen "Frozen - 4.5 stars"
//You have seen "Mad Max Fury Road" - 5 stars
//You have not seen " Les Miserables" - 3.5 stars
// use your own movies


//An array of objets that will have a title, a rating and, a hasWatched(boolean) and then array iteration to loop through the array.

var movieDB = [
    {
        title: "Big",
        hasWatched: true,
        rating: 5
        
    },
    {
        title: "Dumb and Dumber",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Silence of the lambs",
        hasWatched: false,
        rating: 2
    }
]

//interate throught the array movieDB()
// function listMovie(arr){
//     var result = arr[0][2];
//     for(var i = 0; i <= arr.length; i++){
//         if(result === true) {
//             return "You have seen" + title + "- " + rating + " stars"
//         }else return "You have not seen" + title + "- " + rating + " stars"
//     }
// }

movieDB.forEach(function(movie) {
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
})

//is a cleaner way of presenting. This creates a function to build the string like about. Then we take that function and have it run for each movie in movieDB.
function buildString(movie) {
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movieDB.forEach(function(movie) {
    console.log(buildString(movie));
});


    //for movies that are seen (booleen is true) return "You have watched" + name + "- " + rating + " stars"
    