const app = require('./app.js');

app.listen(app.get('port'), () => {
    console.log("Server listening in port: ", app.get('port'));
});