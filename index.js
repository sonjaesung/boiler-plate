const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lokises:xkfhvls4@boilerplate.evtgp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('MongoDB Connected...');
}).catch(err => {
    console.log(err);
});

app.get('/', (req, res) => res.send('here we are'));

app.listen(port, () => {console.log(`app start ${port}`)});