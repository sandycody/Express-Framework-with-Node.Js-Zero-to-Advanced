const express = require('express');
const app = express();
const {engine} = require('express-handlebars');

const PORT = process.env.PORT || 3000;

// Setting the view engine to handlebars
app.set('view engine', 'hbs');

// Configuring handlebars
app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'mirror_index',
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials'
}));


// static files (import css file)
// Note : To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

app.use(express.static('public')); //It's a built in middleware in express

// Writing an API function
const simulatedAPI = () => {
    return  [
        {
            name: 'Bareilly ki Barfi',
            color: 'even'
        },

        {
            name: 'Ready',
            color: 'odd'
        },

        {
            name: 'Dream Girl',
            color: 'even'
        },

        {
            name: 'Band Vaaje',
            color: 'odd'
        },

        {
            name: 'Jazbaa',
            color: 'even'
        }
    ]
};

app.get('/', (req, res) => {
    // res.send("Hello World");
    res.render('main', { layout: "index", suggestedMovies: simulatedAPI() });
    // res.render('main');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});