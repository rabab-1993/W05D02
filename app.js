let express = require("express")
let app = express();
let fs = require("fs");

// fs.readFile('/movies.json', (err, data))


let movies = [
    {
        id:0, name: "Avengers", isFav: true, isDeleted: false
    },
    {
        id:1, name: "Batman", isFav: false, isDeleted: false
    },
    {
        id:2, name: "Iron man", isFav: true, isDeleted: false
    },
    {
        id:3, name: "Captain America", isFav: true, isDeleted: false
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


// Get favorite
app.get("/favs", (req, res) => {
    let fav = movies.map((arr) => {
        if (arr.isFav === true) {
            return arr;
        }
    })
    res.json(fav)
})


app.post("/newmovies", (req, res) => {
    let {id,name,isFav, isDeleted}= req.body;
    movies.push({id,name,isFav, isDeleted})
    res.status(200)
    res.json({id,name,isFav, isDeleted})
})


// app.put("/update/:id", (req, res) => {
//     let getId= req.params.id
//     movies.filter((ele) => {
//       ele.isCompleted = isCompleted;
//     })
//     res.status(200)
//     res.json()
// })


// delete movie





app.listen(port, () => {
    console.log(`listening on port ${port}`);
})