import express from 'express';
import exphbs from 'express-handlebars';
import router from './router';

const app = express();

app.use('/public', express.static('public'));
app.use('/images', express.static('images'));
app.engine('html', exphbs({ defaultLayout: 'main', extname: '.html' }));
app.set('view engine', 'html');
app.use(router);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
