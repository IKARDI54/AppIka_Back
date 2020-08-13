const { Mongoose } = require("mongoose")

const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/appika_back', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify:false
})
.then(de => console.log('DB is connect'))
.catch(err => console.error(err));