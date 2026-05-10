http = require('http')
fs = require('fs')
path = require('path')
url = require('url')
const dataPath = path.join(__dirname, "data")

function getAllJokes(req, res){
    /*datadir = path.join(__dirname, "data")
    fsdirreaded = fs.readdirSync(datadir)
    data = {}
    for (i = 0; i < fsdirreaded; i++)
    {
        fs.readFileSync(i)
        data.push(i)
    }
    res.end(data)*/
    let dir = fs.readdirSync(dataPath)
    let allJokes = []

    for(let i = 0; i < dir.length; i++)
    {
        let file = fs.readFileSync(path.join(dataPath, i+'.json'))
        let jokeJSON = Buffer.from(file).toString()
        let joke = JSON.parse(jokeJSON)
        joke.id = i;

        allJokes.push(joke)
    }
    res.end(JSON.stringify(allJokes))
}

const server = http.createServer((req, res) => {
    if(req.url == '/jokes' && req.method == "GET")
    {
        getAllJokes(req, res)
    }
})
server.listen(2637)