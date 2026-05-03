http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/jokes' && req.method == "GET")
    {
        getAllJokes(req, res)
    }
})
server.listen(2637)