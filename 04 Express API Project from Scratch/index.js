const express = require('express');
const app = express();
const employees = require('./Employees');



app.use(express.json());

// Setting up the routes
app.use('/api/employees', require('./routes/api/employees'));

const PORT = process.env.PORT || 3000; // If process.env.PORT is undefined, then it defaults to 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});