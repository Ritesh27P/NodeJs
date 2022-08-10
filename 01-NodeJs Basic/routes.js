const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<form action="message" method="POST"> <input type="text" name="message"> <button type="submit">submit</button> </form>');
        return res.end();
    }

    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log(chunk);
        });

        req.on('end', ()=>{
            const bodyParser = Buffer.concat(body).toString();
            console.log(bodyParser);
            const message = bodyParser.split('=')[1]
            fs.writeFileSync('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('Hiii there');
    res.end();
};

module.exports = requestHandler;
// 