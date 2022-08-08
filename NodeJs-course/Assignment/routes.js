const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        const allUsers = []
        const users = fs.readFileSync('user.txt')
        allUsers.push(users)
        const bodyParser = Buffer.concat(allUsers).toString();
        const UsersName = bodyParser.split(',')
        res.setHeader('Content-Type', 'text/html');
        res.write('Welcome on this page');

        for ( let user of UsersName) {
            res.write('<ul><li>'+ user + '</li></ul>');
        }
        res.write('<br>')
        res.write('<form action="/create-user" method="POST"> <input type="text" name="message"> <button type="submit">submit</button> </form>');

        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', ()=>{
            const bodyParser = Buffer.concat(body).toString();
            const message = bodyParser.split('=')[1];
            const act_message = message + ',';
            fs.appendFileSync('user.txt', act_message, err=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('Hiii there');
    res.end();
};

module.exports = requestHandler;
// 