const app = require('./app');
const http = require('http');

const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});