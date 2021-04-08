const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastName: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

// userSchema 를 save 하기전에 하는 동작.
// 화살표함수로 작성 시 this 에 값이 없음.
userSchema.pre('save', function(next) {

    if(this.isModified('password'))
    {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err)
            {
                return next(err);
            }

            bcrypt.hash(this.password, salt, (err, hash) => {
                if(err)
                {
                    return next(err);
                }
                
                this.password = hash;
                next();
            });
        });

        next();
    }
    else {
        next();
    }
});

userSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, isMath) {
        if(err) return callback(err),
        callback(null, isMath)
    });
}

const User = mongoose.model('User', userSchema);

module.exports = {User};