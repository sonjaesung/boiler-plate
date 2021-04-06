const express = require('express');
const app = express();
const port = 3000;
const config = require('./config/key');

const mongoose = require('mongoose');
const {User} = require('./models/user');

//app.use(bodyParser().urlencoded({extended: true}));
//app.use(bodyParser().json());

mongoose.connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('MongoDB Connected...');
}).catch(err => {
    console.log(err);
});

app.use(express.json());

app.get('/', (req, res) => res.send('here we are'));

app.post('/register', (req, res) => {

    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) {
            return res.json({success: false, err});
        }
        else {
            return res.status(200).json({
                success: true
            });
        }
    });
});

app.listen(port, () => {console.log(`app start ${port}`)});90