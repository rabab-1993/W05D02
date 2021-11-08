let express = require("express")
let app = express();



let movies = [
    {
        id:0, name: "avegers", isFav: true, isDeleted: false
    },
    {
        id:1, name: "batman", isFav: false, isDeleted: false
    },
    {
        id:2, name: "iron man", isFav: true, isDeleted: false
    },
    {
        id:3, name: "CaptinAmerica", isFav: true, isDeleted: false
    },

]

// Middleware

app.use(express.json())
let port = 5400;


// Get All Movies
app.get("/allmovies", (req, res) => {
    res.json(movies)
})

// Get By Id
app.get("/allmovies/:id", (req, res) => {
    let ids = req.params.id
    let movie = movies.find((movie) => movie.id === Number(ids))
    res.json(movie)
})

app.get("/favs", (req, res) => {
    let fav = movies.map((arr) => {
        // return i.isFav === true;
        if (arr.isFav === true) {
            return arr;
        }
    })
    res.json(fav)
})


// app.post("/newmovies", (req, res) => {
//     res.json(movies)
// })




app.listen(port, () => {
    console.log(`listening on port ${port}`);
})