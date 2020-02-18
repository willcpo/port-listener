const http = require('http');

const port = process.argv[2] || 9998


const app = http.createServer((request, response) =>{
    request.on('data', (chunk) => {
        console.log("\n\n---------- START ---------\n\n")
        process.stdout.write(chunk)
      }).on('end', () => {
        process.stdout.write("\n\n---------- END ----------\n\n")
        response.end()
      });
})

app.listen(port)