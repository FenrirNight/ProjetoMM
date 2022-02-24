const http = require("http");
const URL = require("url");
const fs = require('fs')
const data = require("./agendas.json");

function writeFile(cb) {
    fs.writeFile(
        path.join(__dirname, "agendas.json"),
        JSON.stringify(data, null, 2),
        err => {
            if(err) throw err

            cb(JSON.stringify({message: "ok"}))
        }
    )
}

http
  .createServer((req, res) => {
    const { nome, email, telefone, del } = URL.parse(req.url, true).query;

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    if (!nome || !email || !telefone)
    return res.end(JSON.stringify(data))

    if (del) {
        data.agendas = data.agendas.filter(item => String(item.email) !== String(email)) 
        return writeFile((message) => res.end(message))
}

    data.agendas.push({nome, email, telefone})

    return writeFile((message) => res.end(message))
  })
  .listen(3000, () => console.log("API is running"));
