const app = require('./app.js');
const productRoutes = require('./routes/ProductRoutes');

app.use('/products', productRoutes);

app.listen(app.get('port'), () => {
    console.log("Server listening in port: ", app.get('port'));
});